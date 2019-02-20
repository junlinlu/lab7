'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(clickLikeBtn);
}

function clickLikeBtn(e) {
  e.preventDefault();
  console.log(gtag);

  gtag('event', 'click', {
    'event_category': 'like',
    'event_label':'user clicked like',
  });
}