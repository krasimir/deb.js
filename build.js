var fs = require('fs');
var UglifyJS = require('uglify-js');
var result = UglifyJS.minify(__dirname + '/lib/deb.js');

fs.writeFile(__dirname + '/build/deb.min.js', result.code, function(err) {
	var extensionContentTpl = fs.readFileSync(__dirname + '/chrome/js/content.tpl.js', { encoding: 'utf8' });
	var extensionContent = extensionContentTpl.replace('{debjs}', result.code);
	fs.writeFile(__dirname + '/chrome/js/content.js', extensionContent, function(err) {
		console.log('Building successful.');	
	});
});