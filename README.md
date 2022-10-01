# MisEstilos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## configuration Angular Material

npm install --save angular/material2-builds angular/cdk-builds angular/animations-builds

npm install --save hammerjs

Para los iconos

(<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">)

Este código va en style.scss:

@import '~@angular/material/theming';

import 'hammerjs'; en el archivo main.ts

@include mat-core();

// COLORES DISPONIBLES: https://material.io/design/color/
$candy-app-primary: mat-palette($mat-indigo);
$candy-app-accent:  mat-palette($mat-pink, A200, A100, A400);

// The warn palette is optional (defaults to red).
$candy-app-warn:    mat-palette($mat-red);

// Create the theme object (a Sass map containing all of the palettes).
$candy-app-theme: mat-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn);

@include angular-material-theme($candy-app-theme);

En angular.json:

"styles": [
                               "src/styles.css"
                               "src/mitema.scss"
                                    ],

Por último he creado un módulo, modulo 
material.module.ts    

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from ‘@angular/material’;
@NgModule({
imports: [
CommonModule,
MatToolbarModule,
],
exports: [
MatToolbarModule,
],
})
export class MaterialModule { }

y se importa a app.module para usarlo en todos los sitios

TODA LA INFO LA SAQUE DE ESTA WEB:
https://medium.com/@sandy.e.veliz/angular-material-design-instalaci%C3%B3n-angular-material-790caca5677b



## mis notas 


https://angular.io/guide/animations

