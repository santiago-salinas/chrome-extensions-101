# chrome-extensions-101

My learning repo about chrome extensions

Things I learned

Every extension and its permissions must be declared under `manifest.json`

i.e:

```
{
  "manifest_version": 3,
  "name": "Hello Extensions of the world!",
  "description": "Base Level Extension",
  "version": "1.0",
  "action": {
    "default_popup": "hello.html", // What shows when clicked
    "default_icon": "hello_extensions.png" // Icon
  },

  "icons": { // Multiple scales of an Icon
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },\

  "content_scripts": [ //When a page loads, it executes this on these urls
    {
      "js": ["scripts/content.js"],
      "matches": [
        "https://developer.chrome.com/docs/extensions/*",
        "https://developer.chrome.com/docs/webstore/*"
      ]
    }
  ]

  // Inject scripts into the active tab
}
```

Extensions can monitor browser events in the background using the extension's service worker. Service workers are special JavaScript environments that are loaded to handle events and terminated when they're no longer needed.

```
{
  ...
  "background": {
    "service_worker": "background.js"
  },
  ...
}
```

Create a file called background.js and add the following code:

```
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});
```

The first event our service worker will listen for is runtime.onInstalled(). This method allows the extension to set an initial state or complete some tasks on installation. Extensions can use the Storage API and IndexedDB to store the application state. In this case, though, since we're only handling two states, we will use the action's badge text itself to track whether the extension is 'ON' or 'OFF'.
