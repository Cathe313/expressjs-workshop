# ExpressJS Workshop for DecodeMTL Full-Stack Bootcamp
*Your express way to the web development world!*

## Basic instructions
* Fork this repository and create a new Cloud9 project by cloning your fork
* Each exercise should be done in a separate branch, **branched off of master**, with a descriptive name of your choice
* Completed exercises should be submitted as pull requests. The pull request name should be "Exercise #: " followed by the exercise's title
* Different exercises will require different NPM packages. This will require you to use `npm install --save` to get these packages. The `package.json` should be part of the same commit where you start using the required package(s). For example, if one of the exercises requires the use of the [`request`](https://github.com/request/request) library, then the `package.json` for that submission should contain the dependency, and it should be committed at the same time as the code that `require`s it.
* An **`index.js`** file is made available to you. You should be able to do all the exercises by changing the contents of this file. If you feel like adding modules to make your code clearer, don't hesitate to do it. It's not *always* necessary.

## Exercise 1: Getting started!
Create a web server that can listen to requests for `/hello`, and respond with some HTML that says `<h1>Hello World!</h1>`

## Exercise 2: A wild parameter has appeared!
Create a web server that can listen to requests for `/hello/:firstName`, and respond with some HTML that says `<h1>Hello _name_!</h1>`. For example, if a client requests `/hello/John`, the server should respond with `<h1>Hello John!</h1>`

## Exercise 3: Operations
Create a web serverthat can listen to requests for `/op/:operation/:number1/:number2` and respond with a JSON object that looks like the following. For example, `/op/add/100/200`:
```json
{
  "operator": "add",
  "firstOperand": 100,
  "secondOperand": 200,
  "solution": 300
}
```
Your program should work for `add`,`sub`,`mult`,`div` and return the appropriate solution. If `operation` is something other than these 4 values, you should use [`res.SendStatus`](http://expressjs.com/4x/api.html#res.sendStatus) to send an appropriate [error code](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). First, figure out the category of error code you need to send, then find an appropriate code using the provided link.

## Exercise 4: Fetching Data!
Create a web server that will respond to requests for `/entry/:entryId` in the following way:
1. First, create a global variable called `entries`, which will be an object of address book entries. It could look like this:
```javascript
var entries = {
  1: {
    firstName: "John",
    lastName: "Smith",
    emails: [
      {type: "home", address: "john@smith.com"},
      {type: "work", address: "jsmith@megacorp.com"}
    ]
  },
  // ...
};
```
2. When the user requests a certain entry, respond with some JSON that corresponds to the requested entry.
3. If the entry was not found, respond with an appropriate error code

## Exercise 5: searching for data
Create a web server that will respond to requests for `/entry/search` followed by a **[query string](https://en.wikipedia.org/wiki/Query_string)**. In this case, the endpoint is static, and the query string is handled separately. For this exercise, you will have to [parse the query string manually](https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js) inside of your request handler.

The linked code will give you back the query string as a simple JavaScript object. For example if the user requested `/entry/search?firstName=john&lastName=smith`, then you will have an object with `{firstName: "john", lastName: "smith}`.

Using the input from the user, search through the `entries` and return an **array** of matching entries. Treat each query string parameter as an OR. In the example above, return all the entries where the first name contains "john" OR the last name contains "smith". For `emails`, go thru all the emails and if one of them matches then you can return that entry.

## Exercise 6: receiving data
So far, everything we have done has been thru **GET** requests (`app.get(...)`). This exercise will make you do a **POST** request instead. **The goal of this exercise** is to enable web users to ADD entries to our address book. Contrary to the more common **GET** requests, you can't easily make a browser do a **POST**. One of the ways would be building an HTML form, but here we will do something more APIy :)

Using Chrome, install the [Advanced REST Client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo) extension. Using it, you'll be able to make **POST** requests easily.

Using `app.post`, create an endpoint that listens to **POST** requests to `/entry`. As a first step, inside your request handler, do a `console.log(req.body)`.

Then, using the "Form" method of the Advanced REST Client, try to send a **POST** to your server and look at your console. Notice that your server receives a list of key/value pairs. While we *could* use these values to get our job done, since we're in JavaScript land we'd rather receive some JSON instead.

In another step, use the "Raw" method of the Advanced REST Client, and send a **POST** to your server with some JSON in it, like this:

```json
{"firstName": "New", "lastName": "Entry"}
```

Notice that your server receives a string of JSON. You now know that you can parse this string using `JSON.parse` in order to get back a nice JavaScript object.

Now, after doing any validation you like, add the provided entry to your address book, giving it a unique ID. Make sure that in your response to the user, you give them back the entry they provided along with the ID you have created for it.
