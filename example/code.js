var MyModule = function() {
	var field = $('#text');
	var saySomething = function(what) {
		field.html(what);
	}.deb();
	var bold = function(str) {
		saySomething('<b>' + str + '</b>');
	}
	return {
		run: function() {
			$('[value="Hello"]').on('click', function() {
				saySomething($(this).attr('value'));
			});
			$('[value="Goodbye"]').on('click', function() {
				bold($(this).attr('value'));
			});
		}
	}
}