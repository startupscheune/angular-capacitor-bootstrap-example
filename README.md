# angular-capacitor-bootstrap-example

## Run on android

open android: `npx cap open android`

after every change `ng build` und `npx cap sync` + "Sync Project with Gradle Files" in Android Studio

## Installation guide - Angular + Capacitor + Android

Install node
- node 18.12.1 LTS https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi
- typescript 4.8.4 `npm install -g typescript@4.8.4`
- angular 15.0.4 `npm install -g @angular/cli@15.0.4`

Install typescript
- typescript 4.8.4 `npm install -g typescript@4.8.4`

Install angular
- angular 15.0.4 `npm install -g @angular/cli@15.0.4`
- more information: https://angular.io/guide/setup-local

Create project
- create project with `ng new put-your-app-name-here`
  - routing? -> yes
  - CSS as Stylesheet
  - test with `cd put-your-app-name-here` and `ng serve --open`

Add capacitor
- `ng add @capacitor/angular@2.0.3`
   - create Package ID: com.putyourappnamehere.app (no dashes)
   - Join Ionic / Share usage data -> no
- `ng build`
- install ios und android addons `npm i @capacitor/ios @capacitor/android`
  -  `npx cap add android` creates Android project -> see: https://capacitorjs.com/docs/basics/workflow
  -  `npx cap add ios` creates ios project

Install Android Studio or Xcode
- Android: https://developer.android.com/studio
- Xcode (only on macOS): https://capacitorjs.com/docs/getting-started/environment-setup#ios-requirements

Capacitor API examples
- Geolocation: https://capacitorjs.com/docs/apis/geolocation
  - `npm install @capacitor/geolocation`
  - `npx cap sync` every time you update your application
- Camera: https://capacitorjs.com/docs/apis/camera
  - `npm install @capacitor/camera`
  - PWA support `npm install @ionic/pwa-elements`
  - add to main.ts like https://capacitorjs.com/docs/web/pwa-elements
    - `import { defineCustomElements } from '@ionic/pwa-elements/loader';`
    - `defineCustomElements(window);`

## Libraries

Bootstrap 4
- `npm i bootstrap@4.6.2`
- `npm i jquery@3.5.1`
- https://getbootstrap.com/docs/4.6/getting-started/introduction/
- add to angular.json to architect.build
```
  "styles": [
     "styles.css".
     "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  "scripts": [
     "../node_modules/jquery/dist/jquery.min.js",
     "../node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
```