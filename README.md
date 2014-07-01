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

## Articles

[Deb.js: the Tiniest Debugger in the World](http://code.tutsplus.com/tutorials/debjs-the-tiniest-debugger-in-the-world--cms-21565)

## Build

1. `npm install uglify-js -g`
2. `sh ./build.sh`