chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.debjs && request.debjs && request.debjs.status === true) {
    	chrome.browserAction.setBadgeText({ text: 'ON'});
	} else {
		chrome.browserAction.setBadgeText({ text: '' });
	}
});