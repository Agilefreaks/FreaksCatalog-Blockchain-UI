# FreaksCatalog-Blockchain-UI
The react web app for the eth contracts

## Install

`yarn install` - This will install all dependencies

## Frontend App

### Run app

`yarn run react-app:start`

### Run tests

`yarn run react-app:test`

## Linting

`yarn run react-app:lint`

In order to let the IDE lint your code, you must declare the path to the linting configs.
In VSCode this can be done by

On a file *.vscode/settings.json* do this:

```json
{
  "eslint.options": {
      "configFile": "./packages/react-app/.eslintrc.js"
  },
  "stylelint.configFile": "./packages/react-app/.stylelintrc",
  "stylelint.configBasedir": "./packages/react-app"
}
```
