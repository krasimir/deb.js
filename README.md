deb.js
======

> Minimalistic JavaScript library for debugging in the browser

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

## Build

1. `npm install uglify-js -g`
2. `sh ./build.sh`