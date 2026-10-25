# Assignment 5. JavaScript Basics (DOM Manipulation & Events)

**Name:** Sissenbay Rassul
**Group:** se2538

## Project

Profile Desk is a single page app. One `userProfile` object feeds the profile card, the form changes it, and the hobbies list edits its `hobbies` array.

Files: `index.html`, `style.css`, `script.js`.

---

## Part 1: Profile Object, Data Types & Arithmetic

### Task 1. The Personal Info Object

Create a `const` object named `userProfile` with a string (`name`), a number (`birthYear`), a boolean (`isDeveloper`) and an array (`hobbies`).

Screenshot:

### Task 2. Arithmetic Calculations

Calculate the current age dynamically (current year minus `birthYear`), plus another metric (approximate months old and the hobbies count). Show them on the page and in the console.

Screenshot:

---

## Part 2: Form Input & Event Responses

### Task 3. HTML Form Setup

A form with a Username input, a Birth Year input and a "Create / Update Profile" submit button.

Screenshot:

### Task 4. Event Listener

A `submit` listener reads both values, validates them and updates the `userProfile` object. The profile card is redrawn after the update.

Screenshot:

---

## Part 3: DOM List Manipulation

### Task 5. Creating & Removing Elements

A `<ul>` shows the hobbies. "Add Item" creates a new `<li>` from the input, "Remove Item" deletes the last one.

Screenshot (adding an item):

Screenshot (removing an item):

---

## Summary of my work

1. I started with the `userProfile` object and checked it in the console.
2. I wrote `calculateAge()` and `calculateMonths()` and printed the results.
3. I built the HTML structure and the form, then connected it with `addEventListener("submit")` and `preventDefault()`.
4. I added validation for the username and the birth year, with a visible error message.
5. I wrote `renderHobbies()` which builds the `<li>` elements with `createElement` and `appendChild`. Add uses `push()`, Remove uses `pop()`.
6. I styled the page with CSS variables and made it responsive.