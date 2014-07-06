function updateBadgeText(tabId, toggle) {
	if (typeof tabId !== 'number') return; // tabId is required

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
				chrome.tabs.reload(); // ...refresh page
			});
		}
	});
}

chrome.browserAction.onClicked.addListener(function(tab) { // On button click...
	updateBadgeText(tab.id, true); // ...(param 2 `true` => toggle value)
});

chrome.tabs.onActivated.addListener(function(info) { // On active tab change...
	updateBadgeText(info.tabId); // ...update badge
});
