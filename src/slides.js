/*
 * Offline-first progressive web apps
*/
/*
 Progressive web apps https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/
 Progressive - Works for every user, regardless of browser choice because it's built with progressive enhancement as a core tenet.
Responsive - Fits any form factor: desktop, mobile, tablet, or whatever is next.
Connectivity independent - Enhanced with service workers to work offline or on low-quality networks.
App-like - Feels like an app, because the app shell model separates the application functionality from application content .
Fresh - Always up-to-date thanks to the service worker update process.
Safe - Served via HTTPS to prevent snooping and to ensure content hasn't been tampered with.
Discoverable - Is identifiable as an "application" thanks to W3C manifest and service worker registration scope, allowing search engines to find it.
Re-engageable - Makes re-engagement easy through features like push notifications.
Installable - Allows users to add apps they find most useful to their home screen without the hassle of an app store.
Linkable - Easily share the application via URL, does not require complex installation.
*/

/*
  What is offline-first?
  - An app written with online capabilities as an enhancement
  Other patterns

  Oh great, can I just cache everything?
  - no
  - browser limits the amount of cache space a service worker can use
  - browser will delete a cache that gets too large (is this true?)
*/

/*
  What is service worker?
  - web worker
  - script run by a browser in the background
  - separate from your web page code
  - can't access the DOM

*/

/*
  Life cycle
  - use cool image
*/

/*
  Registration

}

*/

/*
  Installation
*/

/*
 Activate
 - If you update your sw, the new one will be installed, and will activate
 when there are no longer any pages loaded using the old sw
 - Update cache number
 - Do stuff that would have broken the previous one
   - delete old caches
*/

/*
  Message
*/

/*
  Fetch
  - need to clone responses
*/

/*
 * Sync
*/

/*
 Push
*/

/*
  Gotchas
  - require https

*/

/*
  Great resources
  https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
  https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/
*/
