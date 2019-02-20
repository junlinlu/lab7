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

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134826835-1"></script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-134826835-1');

function clickLikeBtn(e) {
  e.preventDefault();
  console.log("hello");
  gtag("send", "event", "like", "click");
}