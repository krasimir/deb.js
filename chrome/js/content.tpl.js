if(location.search.indexOf('debjs') >= 0) {
    var s = document.createElement('script');
	s.setAttribute('type', 'text/javascript');
	s.innerHTML = '{debjs}';
	var root = document.head || document.documentElement;
	root.insertBefore(s, root.firstChild);
	chrome.runtime.sendMessage({ debjs: {status: true}}, function(response) {});
} else {
	chrome.runtime.sendMessage({ debjs: {status: false}}, function(response) {});
}