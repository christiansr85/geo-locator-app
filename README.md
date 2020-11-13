# geo-locator-app
React native application which uses a map and markers in order to remember points of interest. It's part of the https://www.udemy.com/course/react-native-sin-fronteras/ course.

## Dependencies
You need to have `expo` installed in your computer (along with `node`, of course) in order to be able to run the application.

You can install it through the command 
```
npm i -g expo-cli
```

## Run the application
You have to execute these two commands:
- `yarn install` (or `npm install`)
- `yarn start` (or `npm start`)

And then choose the device/emulator where you want to show the application.

## Install navigation dependencies for first time
Once you have all dependencies in your `package.json` file, you'll install them through the above mentioned `yarn install` command, but as a reminder, you could install them through `expo install` order followed by all these packages:
- `react-navigation`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-screens`
- `react-native-safe-area-context`
- `@react-native-community/masked-view`

The final command should look like this:
```
expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
After that, and as we are going to use stack navigation, we should have to install it as well:
```
yarn add react-navigation-stack
```