# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Description

A simple react app displaying the stops and routes of a public transportation's bus line on a map.

## Task

The task is to create a simple React app, in order to visualize the routes of a single line of the public transport. Each route consists of stops and segments. The segments represent the space between the different stops. The app should consist of 2 different views:

Map - The routes should be displayed on a leaflet-map (both stops and segments should be depicted).
Table - The stops of the routes should be displayed in a table.

##	Requirements

Redux must be used for data storage.
Leaflet (react-leaflet) must be used for the map visualization.
There must be a dropdown menu to allow switching between the routes.
React Hooks must be used in the components (class components are not allowed).
The request for fetching the data from an API must be mocked.
There are no restrictions in terms of styling frameworks - you can use an existing styling framework of your choice or write your own CSS.
