# Tenpo tech Challenge

Food Delivery mobile app

UI model: https://xd.adobe.com/view/f54f4021-662d-463e-62df-5f9bcfd1b411-837e/

## Installation 

After cloning the project, move to its root folder and then run

```bash
yarn install
```

## Android 

change the ports to run on local devices/emulator

```bash
adb reverse tcp:8081 tcp:8081
```
finally start the mock server and reverse the ports again 

```bash
yarn serve:data
adb reverse tcp:8000 tcp:8000
```


## iOS 
 move to ios folder and install pods
```bash
    cd ios
    pod install
```

go to src/constants, open env.ts and edit DOMAIN value with your current IP address

start the mock server

```bash
    yarn serve:data
```

move to the root of the project and run
```bash
    yarn ios
```
if you are using an M1 processor you need to install Rosetta
https://support.apple.com/es-es/HT211861 and run 
```bash
    arch -x86_64 yarn ios
```

## Known issues on iOS 
strings using Gotham-Book font may not appear.


## Stack of technologies used
    emotion
    react-nativebottom-sheet
    react-native-community/geolocation
    react-navigation
    react-native-maps
    styled-system

    react native Context API and Reducer API for state management
