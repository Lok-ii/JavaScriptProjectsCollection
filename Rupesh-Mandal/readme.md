# Typing Speed Test

A simple web-based Typing Speed Test application that measures your typing speed, accuracy, and provides other statistics.
Users can type a given quote within a set time limit and receive feedback on their performance.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Files](#files)
- [Styling](#styling)
- [JavaScript Logic](#javascript-logic)
- [Usage](#usage)
- [UI](#ui)


## Demo

https://lok-ii.github.io/JavaScriptProjectsCollection/Rupesh-Mandal/index.html

## Features

- **Timer:** A countdown timer starts when the user begins typing.
- **Text Display:** Displays a random paragraph for the user to type.
- **User Input:** Users can type the displayed text in the provided textarea.
- **Statistics:** Real-time statistics include the number of mistakes, words per minute (WPM), characters per minute (CPM),
- and accuracy percentage.
- **Start and Reset Buttons:** Buttons to start the test and reset the input area for a new attempt.

## Files

- **index.html:** The main HTML file containing the structure of the web page.
- **style.css:** The stylesheet file for styling the application.
- **script.js:** The JavaScript file containing the logic for the typing test.
- **assets/:** Folder containing images used in the application.

## Styling

The application utilizes a combination of HTML and CSS for its structure and styling. Key styling features
include a transparent background overlay,font choice, timer placement, and button styling.

## JavaScript Logic

This section provides an overview of the JavaScript code in the Typing Speed Test project, explaining key functionalities 
and how they contribute to the application.

### Overview

The JavaScript code (`script.js`) is responsible for handling the logic behind the Typing Speed Test application.
It manages the timer, user input, displays random paragraphs, calculates statistics, and more.

### Key Elements

### Variables

- `button`: Represents all button elements on the page.
- `display`: Represents the element that displays the paragraphs for typing.
- `inputarea`: Represents the textarea where users input their text.
- `timer`: Represents the element displaying the countdown timer.
- `details`: Represents an array of elements displaying statistics like mistakes, words per minute,
-  characters per minute, and accuracy.
- `maincontainer`: Represents the main container of the application.
- `paragraph`: An array of paragraphs for users to type.
- `images`: An array of image paths associated with each paragraph.

### Functions

- `countdown()`: Initiates the countdown timer and updates the display.
- `gettimer()`: Updates the timer and stops it when the time limit is reached.
- `randomparagraph()`: Generates a random index for selecting a paragraph.
- `displayquotes()`: Displays a random paragraph and background image.
- `reset()`: Resets the application, including the timer, statistics, and user input.

### Event Listeners

- Event listener for user input in the textarea to calculate statistics.
- Event listener for the "START" button to initiate the typing test.
- Event listener for the "RESET" button to reset the application for a new test.

## Usage

1. Open the `index.html` file in a web browser.
2. Click the "START" button to begin the typing test.
3. Type the displayed quote in the textarea.
4. After the timer reaches 0, the statistics will be updated based on your typing performance.
5. Click the "RESET" button to start a new test.


## UI

![Screenshot 2023-11-18 191335](https://github.com/Lok-ii/JavaScriptProjectsCollection/assets/69234169/81c2ca2c-c29d-4fca-8bad-9e564d941f01)
![Screenshot 2023-11-18 191429](https://github.com/Lok-ii/JavaScriptProjectsCollection/assets/69234169/aed35e74-e2fd-48f4-acf8-7dfc88f3380f)
![Screenshot 2023-11-18 191458](https://github.com/Lok-ii/JavaScriptProjectsCollection/assets/69234169/a4e28c98-ed52-4653-b0cd-43ff4f867fed)


   
