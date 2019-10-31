# background-transition

An extremely light and simple jQuery plugin to synchronously load and then
transition (fade-in/out) a list of images as full screen background-images on
a web page.

To aid performance, each image in the list you specify is individually
downloaded prior to it being transitioned.

A demo of the plugin is available [here](http://www.mttrchrds.com/github/backgroundtransition/).

## Installation

Clone or download the repository.

Copy/move the minified CSS and JS files from "dist" folder into your own project.

Link to the CSS and JS files in your own codebase. jQuery is a dependency of
the plugin, therefore ensure that you link to jQuery before BackgroundTransition
in your markup (see below).

```html
<link rel="stylesheet" type="text/css" href="backgroundTransition.min.css" />
...
<script type="text/javascript" src="backgroundTransition.min.js"></script>
```
Add a DOM container with class "backgroundTransition" in your markup which is
the parent of your page's content (see below)

```html
<body>
    <div class="backgroundTransition">
        <h1>My page title</h1>
```
Use the plugin as below. Ensure to use ".backgroundTransition" as the plugin selector.

```javascript
$(function() {
  $('.backgroundTransition').backgroundTransition({
      backgrounds:[
          { src: 'images/image1.jpg' },
          { src: 'images/image2.jpg' },
          { src: 'images/image3.jpg' },
      ],
      transitionDelay: 5,
      animationSpeed: 500
  });
});
```
Options are:
- `backgrounds` is an array of objects. Each object has a 'src' property followed by a relative path to an image. Please note that plugin requires at least 2 images.
- `transitionDelay` is a value, in seconds, of the delay between image transition. Default value is 10.
- `animationSpeed` is the speed at which the image will fade in (milliseconds). Default value is 1000.

Finally, add a CSS rule to your own CSS file to ensure that a background image is
loaded on page load before DOM Ready. Ensure this image is the same image as the
first image passed into the plugin (in example above "images/image1.jpg")

```css
.backgroundTransition {
  background-image: url('images/image1.jpg');
}
```

### Customize

It's possible to easily modify or extend the BackgroundTransition plugin source
files. Simply download or clone the repository, the original plugin
JavaScript and Sass files are located in the "src" folder.

These files can be modified then viewed within the repo via "demo/index.html".

Using Gulp (instructions below), the source Sass can be compiled/watched and final JS/CSS files
minified for distribution.

Install the NPM dependencies (assumes you already have NPM installed). Navigate
to the project root and run:
```sh
$ npm install
```

Install Gulp globally (if not already):
```sh
$ npm install -g gulp
```

To compile the CSS file from Sass during development:
```sh
$ gulp dev-sass
```

To watch the Sass file and compile CSS automatically when Sass is updated:
```sh
$ gulp watch-sass
```

To build the minified distrubution version of CSS ("dist" folder):
```sh
$ gulp dist-sass
```

To build the minified distrubution version of CSS and JS together:
```sh
$ gulp build-dist
```

## Credits

BackgroundTransition was written by Matt Richards. The plugin is based on
[Mark Dalgleigh's](http://markdalgleish.com/2011/05/creating-highly-configurable-jquery-plugins/)
popular jQuery plugin design pattern (subsequently modified by [Addy Osmani](http://www.smashingmagazine.com/2011/10/essential-jquery-plugin-patterns/#a-highly-configurable-and-mutable-plugin)).

Background images in the demo were sourced from [Pixabay](http://pixabay.com).
