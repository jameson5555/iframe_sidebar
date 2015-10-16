setTimeout(function() {

  // Configuration
  var menuUrl = 'http://yourdomain/yourpath.html'; // The URL of your menu
  var menuWidth = 300; // Width of your menu

  var currentPageUrl = window.location.href;
  var stylesPath = chrome.extension.getURL('styles.css');
  $('head').html('<link rel="stylesheet" href="'+stylesPath+'">');
  $('body').html('<iframe class="menu-frame" src="'+menuUrl+'" style="width: '+menuWidth+'px;"></iframe><iframe class="page-frame" src=" '+currentPageUrl+' " style="width: calc(100% - '+menuWidth+'px);"></iframe>');
});
