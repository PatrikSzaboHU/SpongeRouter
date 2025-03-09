# Sponge Router

Sponge Router is a lightweight client-side page switching system that preloads HTML pages and dynamically swaps them into a designated container element. It makes it easy to make Single Page Applications.

## Features
- Preloads multiple pages for faster switching.
- Dynamically swaps content without requiring a full page reload.
- Saves the current state of the before switching.
- Simple APIs for declaring views and managing navigation.

## Installation
Download the minfined JavaScript file and include it in your website's header
```js
<script src="/path/to/sponge.min.js"></script>
```

## Usage

### 1. Set the container element
```js
spElement(document.getElementById("spongeswitch"));
```
*(you can replace "spongeswitch" with whatever you like)*

### 2. Declare pages with their respective URLs
```js
spDeclareViews({
    "page1": "/pages/page1.html",
    "page2": "/pages/page2.html"
});
```

### 3. Preload all pages and load the initial page
```js
spFetchAll().then(() => {
    spSwitch("page1");
});
```

### 4. Switch pages dynamically
```html
<button onclick='spSwitch("page2");'>Switch to Page 2</button>
```

## API Reference

### `spCurrentPage()`
Returns the current page's ID

### `spElement(HTMLElement)`
Sets the main container element where page content will be swapped.

### `spDeclareViews(views)`
Declares the available pages by mapping page IDs to their URLs.

### `spActions(actions)`
Maps functions with specific page IDs, triggering them when the corresponding page is activated.

### `spFetchAll()`
Fetches and caches all declared pages. Returns a Promise that resolves when all pages are loaded.

### `spSwitch(reqpage)`
Switches to the specified page ID and updates the container element.

## Error Handling
- If a page fails to load, an error is logged with `[Sponge]` for debugging.
- If an attempt is made to switch to a non-loaded page, an error is displayed in the console.

## License
This project is open-source under the MIT License.