win = Titanium.UI.currentWindow;

var webview = Titanium.UI.createWebView({
    top : 0,
    left : 0,
    url : 'http://www.google.com/calendar/embed?mode=AGENDA&src=wjob1230.com_6u3r2vgt5412e0mn642nmc1oic%40group.calendar.google.com&ctz=America/Chicago',
});

win.add(webview);

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

win.add(ActivityIndicatorWin);

webview.addEventListener('load', function() {

    ActivityIndicatorWin.setVisible(false);

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