win = Titanium.UI.currentWindow;

Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;

showLoader = function(e) {
    actInd.show();
};

hideLoader = function(e) {
    actInd.hide();
};

var actInd = Ti.UI.createActivityIndicator({
});

win.setLeftNavButton(actInd);

var videoOpenButton = Titanium.UI.createButton({
    height : 34,
    width : 34,
    backgroundImage : '/images/wjob/playbutton.png',
    bottom : 130,
    right : 75,
});

var startStopButton = Titanium.UI.createButton({
    height : 34,
    width : 34,
    backgroundImage : '/images/wjob/playbutton.png',
    bottom : 50,
    right : 75,
});

var pauseResumeButton = Titanium.UI.createButton({
    height : 34,
    width : 34,
    backgroundImage : '/images/wjob/pause.png',
    bottom : 50,
    right : 75,
    visible : false,
});

win.add(videoOpenButton);
win.add(startStopButton);
win.add(pauseResumeButton);

var audioPlayer = Ti.Media.createAudioPlayer({
    url : 'http://peace.str3am.com:6550',
    allowBackground : true,
});

startStopButton.addEventListener('click', function() {

    Ti.API.info('Play Button Click');

    if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE) {

        alert('You are not connected to the internet. Check your connection, then try again!');

    } else if (audioPlayer.paused) {

        audioPlayer.start();
        pauseResumeButton.setVisible(true);
        startStopButton.setVisible(false);

    } else {

        showLoader();
        audioPlayer.start();
        pauseResumeButton.setVisible(true);
        startStopButton.setVisible(false);

    }

});

pauseResumeButton.addEventListener('click', function() {

    Ti.API.info('Pause Button Click');

    audioPlayer.pause();
    startStopButton.setVisible(true);
    pauseResumeButton.setVisible(false);

});

audioPlayer.addEventListener('progress', function(e) {
    Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
});

audioPlayer.addEventListener('change', function(e) {

    Ti.API.info('State: ' + e.description + ' (' + e.state + ')');

    if (audioPlayer.playing) {
        hideLoader();
    }

});

videoOpenButton.addEventListener('click', function(e) {

    Ti.API.info('Video Play Button Click');

    if (audioPlayer.playing) {
        audioPlayer.stop();
        startStopButton.setVisible(true);
        pauseResumeButton.setVisible(false);
    }

    var modal = Titanium.UI.createWindow({
        title : 'Watch Video',
        barColor : '#000',
        backgroundColor : '#fff',
        barColor : '#004f98',
    });

    modal.open({
        modal : true
    });

    var videoPlayer = Titanium.Media.createVideoPlayer({
        top : 0,
        autoplay : true,
        backgroundColor : 'fff',
        url : 'http://168.93.159.190:1935/live/WJOB1/playlist.m3u8',
    });
    
    modal.add(videoPlayer);
    
    videoPlayer.addEventListener('error', function(e) {
        
        Ti.API.info("Error: " + e.message);
        
    });

    videoPlayer.addEventListener('playbackstate', function(e) {
        
        Ti.API.info("Playback state: " + e.playbackState);
        
    });

    var closeBtn = Titanium.UI.createButton({
        title : "Close",
        style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
    });

    closeBtn.addEventListener("click", function() {
        modal.close();
    });

    modal.setRightNavButton(closeBtn);

});

var social_icons = Titanium.UI.createView({
    width : 68,
    height : 32,
});

var facebook = Titanium.UI.createImageView({
    image : 'images/wjob/fb.png',
    height : 31,
    width : 31,
    right : 0,
});

social_icons.add(facebook);

var twitter = Titanium.UI.createImageView({
    image : 'images/wjob/twitter.png',
    height : 31,
    width : 31,
    left : 0,
});

social_icons.add(twitter);

win.setRightNavButton(social_icons);

twitter.addEventListener('click', function(e) {

    Ti.API.info('Twitter Icon Click');

    var modal = Titanium.UI.createWindow({
        title : 'Twitter',
        barColor : '#000',
        backgroundColor : '#fff',
        barColor : '#004f98',
    });

    var webview = Titanium.UI.createWebView({
        top : 0,
        left : 0,
        url : 'https://twitter.com/JED1230',
    });

    modal.add(webview);

    var closeBtn = Titanium.UI.createButton({
        title : "Close",
        style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });

    closeBtn.addEventListener("click", function() {
        modal.close();
    });

    modal.setRightNavButton(closeBtn);

    var ActivityIndicatorWin = Titanium.UI.createView({
        backgroundColor : '#004f98',
        zIndex : 9999,
        top : 0,
        right : 0,
        left : 0,
        bottom : 0,
        opacity : 1,
    });

    var ActivityIndicator = Titanium.UI.createActivityIndicator({
        style : Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
    });

    ActivityIndicator.show();
    ActivityIndicatorWin.add(ActivityIndicator);

    modal.add(ActivityIndicatorWin);

    webview.addEventListener('load', function() {

        ActivityIndicatorWin.setVisible(false);

    });

    modal.open({
        modal : true
    });

});

facebook.addEventListener('click', function(e) {

    Ti.API.info('Facebook Icon Click');

    var modal = Titanium.UI.createWindow({
        title : 'Facebook',
        barColor : '#000',
        backgroundColor : '#fff',
        barColor : '#004f98',
    });

    var webview = Titanium.UI.createWebView({
        top : 0,
        left : 0,
        url : 'http://m.facebook.com/#!/WJOB.1230',
    });

    modal.add(webview);

    var closeBtn = Titanium.UI.createButton({
        title : "Close",
        style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });

    closeBtn.addEventListener("click", function() {
        modal.close();
    });

    modal.setRightNavButton(closeBtn);

    var ActivityIndicatorWin = Titanium.UI.createView({
        backgroundColor : '#004f98',
        zIndex : 9999,
        top : 0,
        right : 0,
        left : 0,
        bottom : 0,
        opacity : 1,
    });

    var ActivityIndicator = Titanium.UI.createActivityIndicator({
        style : Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
    });

    ActivityIndicator.show();
    ActivityIndicatorWin.add(ActivityIndicator);

    modal.add(ActivityIndicatorWin);

    webview.addEventListener('load', function() {

        ActivityIndicatorWin.setVisible(false);

    });

    modal.open({
        modal : true
    });

});