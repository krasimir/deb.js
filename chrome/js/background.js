function updateBadgeText(tabId, toggle) {
	if (typeof tabId === 'undefined') return;

	chrome.tabs.sendMessage(tabId, 'getState', // Get state
	function(response) { // When state is retrieved...
		var state = response;

		if (toggle) state = !state;
		var badgeText = state ? 'ON' : '';

		chrome.browserAction.setBadgeText({ // Update badge
			text: badgeText
		});

		if (toggle) {
			chrome.tabs.sendMessage(tabId, { // Save state
				setState: badgeText
			}, function() { // When state is saved...
				if (toggle) {
					chrome.tabs.reload();
				}
			});
		}
	});
}

chrome.browserAction.onClicked.addListener(function(tab) {
	updateBadgeText(tab.id, true); // Toggle value
});

chrome.tabs.onActivated.addListener(function(info) {
	updateBadgeText(info.tabId);
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

	if (message === 'ready') {
		sendResponse();
		chrome.tabs.sendMessage(sender.tab.id, 'inject');
	}
});
