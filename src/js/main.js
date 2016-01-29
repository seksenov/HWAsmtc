'use strict';
var systemMediaControls;

(function () {
    // Add the event listener to handle Windows activated event
    if (typeof Windows !== 'undefined') {
		systemMediaControls = Windows.Media.SystemMediaTransportControls.getForCurrentView();

		systemMediaControls.addEventListener("buttonpressed", systemMediaControlsButtonPressed, false);

		systemMediaControls.isPlayEnabled = true;
		systemMediaControls.isPauseEnabled = true;
		systemMediaControls.isStopEnabled = true;

		systemMediaControls.playbackStatus = Windows.Media.MediaPlaybackStatus.closed;
	}
})();

document.addEventListener("DOMContentLoaded", function () {
	var videoElement = document.getElementById("mediaVideo");
	videoElement.addEventListener("pause", mediaPaused);
	videoElement.addEventListener("playing", mediaPlaying);
	videoElement.addEventListener("ended", mediaEnded);
    videoElement.addEventListener("msfullscreenchange", fullScreen);
    videoElement.addEventListener("webkitfullscreenchange", fullScreen);
    videoElement.addEventListener("fullscreenchange", fullScreen);
    videoElement.addEventListener("mozfullscreenchange", fullScreen);
});

// Event handler for SystemMediaTransportControls' buttonpressed event
function systemMediaControlsButtonPressed(eventIn) {

    var mediaButton = Windows.Media.SystemMediaTransportControlsButton;

    switch (eventIn.button) {
        case mediaButton.play:
            playMedia();
            break;

        case mediaButton.pause:
            pauseMedia();
            break;

        case mediaButton.stop:
            stopMedia();
            break;

        // Insert additional case statements for other buttons you want to handle
    }
}

// Plays the media.
function playMedia() {
    var media = document.getElementById("mediaVideo");
    media.play();
}

// Pauses the media.
function pauseMedia() {
    var media = document.getElementById("mediaVideo");
    media.pause();
}

// Stops the media.
function stopMedia() {
    var media = document.getElementById("mediaVideo");
    media.pause();
    media.currentTime = 0;
}

// The media Play event handler.
function mediaPlaying() {
    // Update the SystemMediaTransportControl state.
    systemMediaControls.playbackStatus = Windows.Media.MediaPlaybackStatus.playing;
}

// The media Pause event handler.
function mediaPaused() {
    // Update the SystemMediaTransportControl state.
    systemMediaControls.playbackStatus = Windows.Media.MediaPlaybackStatus.paused;
}

// The media Ended event handler.
function mediaEnded() {
    // Update the SystemMediaTransportControl state.
    systemMediaControls.playbackStatus = Windows.Media.MediaPlaybackStatus.stopped;
}

// Full screen change event notification
function fullScreen() {
    console.log("fullscreenchange");
    if (typeof Windows !== 'undefined') {
        var view = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
        if(view.IsFullScreenMode) {
            console.log("Exiting WinRT Fullscreen");
            view.ExitFullScreenMode();
        }
        else {
            console.log("Entering WinRT Fullscreen");
            view.TryEnterFullScreenMode();
        }
    };
}
