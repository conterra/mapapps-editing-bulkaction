///
/// Copyright (C) 2025 con terra GmbH (info@conterra.de)
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///         http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import async from "apprt-core/async";


import type { BulkButtonTableAction, BulkActionContext, TableActionDisplayState, DataTable} from "result-api/api";
import type { InjectedReference } from "apprt-core/InjectedReference";

export class EditingBulkAction implements BulkButtonTableAction {
    private readonly _editingWidget!: InjectedReference<any>;
    private readonly _editingToggleTool!: InjectedReference<any>;
    private _properties: InjectedReference<Record<string, any>>;

    public toolId: "";
    public icon: string;
    public label: string;
    public tooltip: string;
    public id: string;
    public rules: Array<any>;
    uiType = "button" as const;

    constructor(properties: Record<string, any>){
        console.info("Properties in constructor: ", properties);
        this.toolId = properties.toolId;
        this.id = "bulk-action-" + properties.id;
        this.icon = properties.icon;
        this.label = properties.label;
        this.tooltip = properties.tooltip;
        this.rules = properties.rules;
    }
    async trigger(actionContext: BulkActionContext): Promise<void> {
        console.info("Properties: ", this._properties);
        const dataTable = actionContext.dataTable;
        const tableModel = dataTable.tableModel;
        const layer = dataTable.dataset?.dataSource?.layer;

        const selectedItems = await tableModel.getAllSelectedItems();
        const objectIds = selectedItems.map((item: any) => item.id);

        const graphics = await this.getGraphicsByIds(objectIds, layer);

        this._editingToggleTool.set("active", true);
        async(() => {
            const editingWidget = this._editingWidget;
            const viewModel = editingWidget._esriWidget?.viewModel;
            viewModel.startUpdateFeaturesWorkflow(graphics);

        }, 1000);
    }

    provideDisplayState(dataTable: DataTable): Partial<TableActionDisplayState> {
        const visible = this._properties!.storeIds.includes(dataTable.id);
        return { visible };
    }

    async getGraphicsByIds(objectIds: any[], layer: any): Promise<any> {
        const query = layer.createQuery();
        query.objectIds = objectIds;
        query.outFields = ["*"];
        query.returnGeometry = true;
        const result = await layer.queryFeatures(query);
        return result.features;
    }
}
