[![devnet-bundle-snapshot](https://github.com/conterra/mapapps-bookmarks/actions/workflows/devnet-bundle-snapshot.yml/badge.svg)](https://github.com/conterra/mapapps-bookmarks/actions/workflows/devnet-bundle-snapshot.yml)
![Static Badge](https://img.shields.io/badge/tested_for_map.apps-4.20.3-%20?labelColor=%233E464F&color=%232FC050)
# Editing Bulk Action

This bundle adds a bulk action to the result UI, allowing users to open the editing widget with multiple selected features.

![Screenshot App](https://github.com/conterra/mapapps-editing-bulkaction/blob/main/screenshot.png)

## Installation Guide
- map.apps 4.20.0 or later
- [dn_editing-bulkaction Documentation](./src/main/js/bundles/dn_editing-bulkaction/README.md)

## Quick start
Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:
```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
To execute the tests in your browser, open <http://localhost:9090/js/tests/runTests.html> (may be on a different port depending on your configuration).

For more details refer to the [Developer's Guide](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/).
