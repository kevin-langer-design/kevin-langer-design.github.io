var securityPopUp = document.getElementById("security_pop_up");

// Load the JSON files with the animations

var securityAnimation = bodymovin.loadAnimation({
  container: securityPopUp,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://cdn2.hubspot.net/hubfs/538402/Bigfoot/Solution%20Pages/Security_Animation.json"
});

// Play animation on hover

securityPopUp.addEventListener("mouseenter", function () {
  securityAnimation.play()
});

// Replay animation on click

securityPopUp.addEventListener("click", function () {
  securityAnimation.goToAndPlay(0)
});

// Play animation on touch for touch devices

securityPopUp.addEventListener("touchstart", function () {
  securityAnimation.goToAndPlay(0)
});

