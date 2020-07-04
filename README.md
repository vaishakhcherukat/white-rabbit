# StackExchange

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Run the application

Run `npm install` for installing the dependencies required for the appliication to work
This project is created using angular cli in angular v9

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. T
he app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Components

The app contains 2 modules
    Authentication Module
    Home Module

The authentication module has the user authentication portion.
default user credentials are as below : 
    username : admin
    password : admin123

Once the user is successfully logged in the app navigates to the home module/ dashboard component
The dashboard component has the following features : 
    Load the questions from the stack exchange api
    The tabs on the navbar in the dashboard filters the response to the answered , not answered and favourite questions.
    Clicking on each tab will load only the filtered contents.
    User can click on the `Mark as favourite` button to  mark a question as favourite question, that will be saved to local storage so even if the user reloads the favourites will be persistent.
    user can logout from the portal, while clicking in the logout button, the user session and the favourites are being cleared.

