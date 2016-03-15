preloadimages.js
================

Preload images and callback when they are all ready

Usage
-----

``` html
<script src="preloadimages.min.js"></script>
<!-- // defines preloadimages() -->
```

You can call it with an array or object of images

``` js
preloadimages(['1.png', '2.png'], function(images) {
  console.log(images);
  // => [img, img]
});
```

or

``` js
preloadimages({moon: 'moon.png', sun: 'sun.png'}, function(images) {
  console.log(images);
  // => {moon: img, sun: img}
});
```

The function will callback when all of the images are loaded (or have failed
to load).  The argument passed to the callback is either an array or object
to match the input, and if it is an array, it will be in the same order
as the input array.

The items in the returned argument are `new Image()` elements.

License
-------

MIT License
