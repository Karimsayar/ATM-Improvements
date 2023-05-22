
# ATM-Improvement App
This is a simple ATM (Automated Teller Machine) app that allows users to make deposits and cash back withdrawals. It has been improved to prevent cash back withdrawals greater than the account balance.

The app is built using HTML, JavaScript (JSX), React, and Bootstrap.

## HTML
The standalone.html file serves as the entry point for the app. It includes the necessary scripts and stylesheets to use React and Bootstrap. The structure of the HTML file consists of a title, script and stylesheet imports, a root <div> element where the React component will be rendered, and the necessary script tags for React and Babel.

## JSX (JavaScript XML)
The main logic and UI of the app are implemented using JSX, a syntax extension for JavaScript that allows writing HTML-like code within JavaScript files.

account.jsx
This file contains the JSX code for the ATM app. It defines two components: ATMDeposit and Account.

ATMDeposit is a functional component that renders a label displaying either "Deposit" or "Cash Back" based on the isDeposit prop value. It also includes an input field for entering the deposit amount and a submit button.

Account is the main component that manages the state of the transaction and renders the account balance. It includes buttons for switching between deposit and cash back modes. It also renders the ATMDeposit component, passing the necessary props.

The Account component includes the logic for handling the form submission in the handleSubmit function. It checks whether it's a deposit or cash back transaction and updates the account balance accordingly. In the case of a cash back withdrawal, it now includes a check to prevent withdrawals greater than the account balance.

## Getting Started
To run the ATM-Improvement app locally, follow these steps:

Clone the repository or download the source code.
Open the standalone.html file in a web browser.
The app should load in the browser, and you can interact with the ATM interface to make deposits and cash back withdrawals.
Please note that the app requires an internet connection to load the necessary dependencies from external sources.

## Dependencies
The app utilizes the following dependencies:

React: A JavaScript library for building user interfaces.
ReactDOM: A package that serves as the entry point to the DOM (Document Object Model) and is used for rendering React components.
Bootstrap: A popular CSS framework for building responsive and visually appealing web pages.
All the necessary dependencies are included via CDNs (Content Delivery Networks) in the standalone.html file.

## Conclusion
The ATM-Improvement app is a basic ATM simulation with added functionality to prevent cash back withdrawals greater than the account balance. The use of JSX and React allows for a more modular and interactive user interface. Feel free to explore and modify the code to enhance the app further based on your requirements.
  
The author of this application is Abdelkarim Sayar, a student at MIT specializing in Full Stack Development with the MERN stack.

The project is licensed under the MIT License.

Happy banking!
