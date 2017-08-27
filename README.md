#My Reads

This is a project to keep track of your reads!

This is taken from the starter template for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com).

## Installation and Launch

Here we'll assume that you know what `node`, `npm`, `javascript`, `html`, `react` means, and how to execute commands in a terminal in your OS. 

The versions of node and yarn used in this project are: 

```
$ node --version
v6.11.2
  
$ yarn --version
0.27.5
```
If you are not using [nvm](https://github.com/creationix/nvm), I'll recommend it, since it lets you use different versions of `node` adn `npm` in the same machine.

First you'll need a copy of the project, so go on and download it from [here](https://github.com/facebookincubator/create-react-app/archive/master.zip) and extract it. Or if you have `git` you can always make the `git clone` trick, like this:

`git clone https://github.com/imthejungler/my-reads.git`

After that just go into the folder:

`$ cd my-reads`

And then execute:

`$ npm install && npm start` 

or, if you have [yarn](https://yarnpkg.com/en/) installed, go ahead and run:

`$ yarn && yarn start`

By default it runs over the port `3000` and it will launch a browser with `localhost:3000`. If you have that port occupied, the command will ask you if you want to run it in another port. If after all that the browser does not open right away and does not show any error, just click here if the port didn't change: [http://localhost:3000](http://localhost:3000) 

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repo is for educational purpose only, so contributions are kind of closed. But if you want to extend it or fork it be my guest! 

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
