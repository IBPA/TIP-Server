# TIP Server

## Running locally

1. All of the following codes will be ran in the <code>[tipserver](./tipserver)</code> folder.
```
cd TIP-Server/tipserver
```

2. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1. You need to install Angular CLI if you haven't already. Please follow this [link](https://angular.io/guide/setup-local) for details.

3. Install the dependent packages using npm. If you haven't already, you need to install Node.js and npm. Check this [link](https://www.npmjs.com/get-npm) for instructions.
```
npm install
```

4. Connect the app to the dev backend environment using the Amplify CLI by running the following command from your project root folder. Note that you need to have access to the TIP-Server AWS account. To install the amplify-cli, please follow this [link](https://docs.amplify.aws/start/getting-started/installation/q/integration/angular).
```
amplify pull --appId d3k854yawandhi --envName dev
amplify pull
```

5. Run the following command. The app will automatically reload if you change any of the source files. Once compiled successfully, Navigate to [http://localhost:4200](http://localhost:4200) to see the changes.

```
ng serve
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
