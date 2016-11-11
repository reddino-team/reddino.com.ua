function openFeedback() {
	document.getElementById('feedback').style.display = 'block';
}

function closeFeedback() {
	document.getElementById('feedback').style.display = 'none';
}

document.getElementById('feedback__button').addEventListener('click', openFeedback);
document.getElementById('close-window').addEventListener('click', closeFeedback);





