import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.exampleapp.app',
  appName: 'angular-capacitor-bootstrap-example',
  webDir: 'dist/angular-capacitor-bootstrap-example',
  server: {
    androidScheme: 'https'
  }
};

export default config;
