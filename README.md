# Iframe Sidebar
A chrome extension that inserts a sidebar of any URL you choose into the current page. When a user clicks the app icon, the current page is replaced with two iframes:
- Sidebar - uses a variable path and width to open whatever page you want
- Current page - uses the path from the page the user was on and takes up the rest of the page width

## Usage
Download or clone the files, change the sidebar URL to whatever you want, and change any other styles you want.

To test the extension, go to [chrome://extensions/](chrome://extensions/) make sure Developer mode is checked, choose load unpacked extension, and browse to your updated files. Load any new page (non-https, unless your menu is also https) and click the extension icon.

[Here](https://developer.chrome.com/extensions/packaging) are instructions for publishing the extension when you're done.