
# Tenpo tech Challenge

Food Delivery mobile app

UI model: https://xd.adobe.com/view/f54f4021-662d-463e-62df-5f9bcfd1b411-837e/

## Installation

After cloning the project, move to its root folder and then run

```bash
yarn install --ignore-engines
yarn android
```

then change the ports to run on local devices/emulator

```bash
adb reverse tcp:8081 tcp:8081
```
finally start the mock server and reverse the ports again 

```bash
yarn serve:data
adb reverse tcp:8000 tcp:8000
```


