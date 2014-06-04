var MyModule = function() {
	var calculateSomething = function(cb) {
		cb();
	}.deb();
	var testFunc = function() {
		calculateSomething(function() {
			var body = $('body');
			body.attr('class', 'test');
			console.log('body: ' + body.length);
		});
	}
	return {
		print: function() {
			console.log('print executed');
		},
		run: function() {
			var i = 0;
			while(i++ < 100000000) {}
			testFunc();
			this.print();
		}.deb()
	}
}