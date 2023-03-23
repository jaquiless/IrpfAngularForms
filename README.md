<em>IrpfAngularForms</em>

IrpfAngularForms is an Angular project that allows users to calculate the IRPF (Impuesto sobre la Renta de las Personas Físicas) of Spain and Andorra. The project has two components: one with a reactive form and the other with a basic form.

<h4>Reactive Form Component</h4>
The reactive form component has a form with the following fields:

- Annual income: a number input for the user's annual income.
- Personal pension plan: a number input for the user's personal pension plan with a maximum value of 1500 euros.
- Company pension plan: a number input for the user's company pension plan with a maximum value of 8500 euros.
The component also has two buttons for calculating the IRPF of Spain and Andorra. The result of the calculation is displayed below the buttons.

<h4>Basic Form Component</h4>
The basic form component has a form with the same fields as the reactive form component:

 - Annual income: a number input for the user's annual income.
- Personal pension plan: a number input for the user's personal pension plan with a maximum value of 1500 euros.
- Company pension plan: a number input for the user's company pension plan with a maximum value of 8500 euros.

The component also has two buttons for calculating the IRPF of Spain and Andorra. The result of the calculation is displayed below the buttons.

The difference between the two components is that the basic form component uses two-way data binding with ngModel while the reactive form component uses reactive forms with formControlName.

This project uses Bootstrap to style the forms and make the page responsive. It also uses Angular's reactive forms to handle the form inputs and calculations.

The page is designed to be responsive, so it can be viewed on any device with a screen of any size.

<h4>Usage</h4>
To use this project, clone the repository and run `npm install` to install the required dependencies. Then, run `ng serve` to start the development server.

<h4>Credits</h4>
This project was created by [your name here] and is licensed under the MIT license.
