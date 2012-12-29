/**
 * preloadimages()
 * 
 * preleoad an array or object full of image URI's
 * and callback when they are all loaded with an
 * array or object of `img` objects
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * License: MIT
 */
function preloadimages(obj, cb) {
  var loaded = 0;
  var toload = 0;
  var images = obj instanceof Array ? [] : {};

  for (var i in obj) {
    toload++;
    images[i] = new Image();
    images[i].src = obj[i];
    images[i].onload = load;
    images[i].onerror = load;
    images[i].onabort = load;
  }

  function load() {
    if (++loaded >= toload) cb(images);
  }
}
