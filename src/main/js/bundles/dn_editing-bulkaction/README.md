# dn_editing-bulkaction

This bundle adds a bulk action to the result UI, allowing users to open the editing widget with multiple selected features.

## Usage

1. Add the bundle `dn_editing-bulkaction` to the `allowedBundles` list in the `app.json`
2. Ensure that the `result-ui` and `editing` bundles are also loaded
3. The bulk action automatically appears in the result table toolbar when at least one feature is selected

### Sample Configuration

```json
"dn_editing-bulkaction": {
    "Config": {
        "storeIds": ["store1", "store2"]
    }
}
```

| Property | Type | Description |
|----------|------|-------------|
| `storeIds` | `String[]` | Array of store IDs for which the bulk action should be visible in the result table. The bulk action will only appear for data tables matching one of these store IDs. If not configured, the bulk action appears for all stores. |
