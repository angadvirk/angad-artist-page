let menuOpen = false;

$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
    menuOpen = !menuOpen;
    toggleMenu(menuOpen);
	});
});

function toggleMenu(menuOpen) {
  const instagramButton = document.getElementById("instagram-button");
  const youtubeButton = document.getElementById("youtube-button");
  const spotifyButton = document.getElementById("spotify-button");
  if (menuOpen) {
    makeAppear(instagramButton);
    makeAppear(youtubeButton);
    makeAppear(spotifyButton);
  }
  else {
    makeDisappear(instagramButton);
    makeDisappear(youtubeButton);
    makeDisappear(spotifyButton);
  }
}

function makeAppear(element) {
  element.style.opacity = 1;
  element.style.right = 0;
  element.style.visibility = 'visible';
}

function makeDisappear(element) {
  element.style.opacity = 0;
  element.style.right = '-20px';
  element.style.visibility = 'hidden';
}