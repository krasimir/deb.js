deb.js
======

### 1.5K minimalistic JavaScript library for debugging in the browser

## Usage

Add `deb.min.js` at the top of your page. Before every other script file.

```html
<script src="deb.min.js"></script>
```

Add `.deb()` After the definition if your functions.

```js
var calculateSomething = function(cb) {
	// ...
}.deb();
```

Open your console. You should see something like that:

![deb.js](http://work.krasimirtsonev.com/git/debjs/debjs.jpg)

Use `.debc()` to collapse the output.

## Deb.js as Chrome extension

There is an extension for Chrome that injects `deb.min.js` in your page. All you have to do is to open [this url]() and add `debjs` somewhere in your URL. For example:

	http://mysite.com/ <-- Deb.js is disabled
	http://mysite.com/debjs <-- Deb.js is enabled
	http://mysite.com?data=yes&prop=20&debjs <-- Deb.js is enabled


Once you do that the extension will inject the file before your page's content and you will be able to use `.deb()` or `debc()` methods.

Notice that if Deb.js is enabled you will see a small badge `ON` applied.

![deb.js](http://work.krasimirtsonev.com/git/debjs/debjschrome.jpg)

## Articles

[Deb.js: the Tiniest Debugger in the World](http://code.tutsplus.com/tutorials/debjs-the-tiniest-debugger-in-the-world--cms-21565)

## Build

1. `npm install`
2. `npm run build`