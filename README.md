# Yuliia_Supruniuk / WebUI

Test script for https://www.dropbox.com

Scenarios:
- Upload
- GetFileMetadata
- Delete file

### How to run test?
Please make sure you have installed node and npm in your system.
 ```
 node -v
 npm -v
 ```
> **_NOTE:_**  Before running please get access token(https://dropbox.github.io/dropbox-api-v2-explorer/#files_upload Get Token) and paste it in _constants/dropbox.constants.ts_ in _token_.
```
git clone https://github.com/supruniiuk/Yuliia_Supruniuk.git
cd Yuliia_Supruniuk
git checkout WebAPI
npm install --legacy-peer-deps
npm test
```