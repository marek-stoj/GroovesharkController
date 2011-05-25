(function() {
	function playPause() {
    chrome.extension.sendRequest({
      command: 'playPause'
    });
	}
	
	function previous() {
    chrome.extension.sendRequest({
      command: 'previous'
    });
	}
	
	function next() {
    chrome.extension.sendRequest({
      command: 'next'
    });
	}

  function onKeyUp(e) {
    if (e.altKey && e.ctrlKey && e.keyCode == 45) {
      playPause();
    }
    else if (e.altKey && e.ctrlKey && e.keyCode == 37) {
      previous();
    }
    else if (e.altKey && e.ctrlKey && e.keyCode == 39) {
      next();
    }
  }

  if (window == top) {
    window.addEventListener(
      'keyup',
      function(e) {
        onKeyUp(e);
      });
  }
})();
