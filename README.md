deb.js
======

### ~1.5K minimalistic JavaScript library for debugging in the browser

* works on functional level
* groups your `console.log` statements and place them in a proper context
* displays stack traces, passed arguments and execution time

## Usage

Add `deb.min.js` at the top of your page. Before every other script file.

```html
<script src="deb.min.js"></script>
```

Add `.deb()` After the definition of your functions.

```js
var calculateSomething = function(cb) {
	// ...
}.deb();
```

Open your console. You should see something like that:

![deb.js](http://work.krasimirtsonev.com/git/debjs/debjs.jpg)

Use `.debc()` to collapse the output.

## Deb.js as Chrome extension

[Deb.js in Google Web Store](https://chrome.google.com/webstore/detail/debjs/egmeoknjmgikkkcdicmajkbkmkcmbiah)

There is extension for Chrome that injects `deb.min.js` into your page. All you have to do is to install the extension from [here](https://chrome.google.com/webstore/detail/debjs/egmeoknjmgikkkcdicmajkbkmkcmbiah) and click the icon in the upper right corner.

Once you do that the extension will inject the file before your page's content and you will be able to use `.deb()` or `debc()` methods.

![deb.js](http://work.krasimirtsonev.com/git/debjs/debjschrome.png)

## Deb.js is availble in Bower too

To install the library via Bower just run:

```
bower install deb.js
```

The file that you probably want to use is `/bower_components/deb.js/build/deb.min.js`.

## Articles

* [Deb.js: the Tiniest Debugger in the World](http://code.tutsplus.com/tutorials/debjs-the-tiniest-debugger-in-the-world--cms-21565)
* [Deb.js: самый крохотный отладчик в мире](http://habrahabr.ru/post/228819/)

## Preview

Here is an animated gif that demonstrates how Deb.js outputs information about the executed function. 

![deb.js](http://work.krasimirtsonev.com/git/debjs/debjs_05.gif)

## Building

1. `npm install`
2. `npm run build`

## Contributers

* [Krasimir Tsonev](http://krasimirtsonev.com/)
* [Tyler Eich](https://github.com/TylerEich)
* [The Code Destroyer](https://github.com/TheCodeDestroyer)
* [Valentin Zwick](https://github.com/vzwick)
* [kshirish](https://github.com/kshirish)