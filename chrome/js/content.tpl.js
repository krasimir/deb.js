// Function to inject script into top of <head> or <html>
function injectScript() {
  var s = document.createElement('script');
  s.textContent = '{debjs}';

  var root = document.head || document.documentElement;
  var newScript = root.insertBefore(s, root.firstChild);
  s.parentNode.removeChild(s);
}

// This logic decides if deb.js should be injected or not.
if (sessionStorage.debJsState) injectScript();

// Listen for messages from background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message === 'getState') { // Get debJsState
    sendResponse(sessionStorage.debJsState);
  } else if (typeof message.setState === 'string') { // Set debJsState
    sessionStorage.debJsState = message.setState;
    sendResponse();
  }
});
