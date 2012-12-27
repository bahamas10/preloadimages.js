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
