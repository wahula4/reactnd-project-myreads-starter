# MyReads Project

## Overview

MyReads is a bookshelf React app that allows you to select and categorize books you have read, are currently reading, or want to read.  The main page displays a list of "shelves", each of which contains a number of books. Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. React Router is used to navigate between the homepage and search page.

![Homepage snapshot](/src/icons/screenshot.PNG)

## Initializing App
The app is hosted on Surge [here](https://gray-flesh.surge.sh/)\

OR
Clone the repository.
In your terminal type npm install to download the dependencies.(Make sure you have Node.js installed on your system).
Then type npm start in the terminal to start the app in a web browser.

## Searching
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend.

### References
[Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)\
[404 Page](https://css-tricks.com/404-best-practices/)\
[Stateless Function Components vs Class Components](https://reactjs.org/docs/components-and-props.html)\
[React.js](https://reactjs.org/)\
[React cheatsheet](https://devhints.io/react)
