Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup({
    navBarHidden : true,
    orientationModes : [Titanium.UI.PORTRAIT],
});

var win1 = Titanium.UI.createWindow({
    title : 'Live Stream',
    backgroundColor : '#004f98',
    barColor : '#004f98',
    orientationModes : [Titanium.UI.PORTRAIT],
    backgroundImage : '/images/wjob/streamBG.png',
    url : 'liveStream.js',
});

var tab1 = Titanium.UI.createTab({
    icon : 'images/wjob/stream-icon.png',
    title : 'Live Stream',
    window : win1
});

var win2 = Titanium.UI.createWindow({
    title : 'Sign Up',
    backgroundColor : '#004f98',
    backgroundImage : '/images/wjob/sign-up-bg.jpg',
    barColor : '#004f98',
    orientationModes : [Titanium.UI.PORTRAIT],
    url : 'signUp.js',
});
var tab2 = Titanium.UI.createTab({
    icon : 'images/wjob/sign-up-icon.png',
    title : 'Sign Up',
    window : win2
});

var win3 = Titanium.UI.createWindow({
    title : 'Programming',
    backgroundColor : '#004f98',
    backgroundImage : '/images/wjob/sign-up-bg.jpg',
    barColor : '#004f98',
    orientationModes : [Titanium.UI.PORTRAIT],
    url : 'programming.js',
});

var tab3 = Titanium.UI.createTab({
    icon : 'images/wjob/programming-icon.png',
    title : 'Programming',
    window : win3
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

tabGroup.open();