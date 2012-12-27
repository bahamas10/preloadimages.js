default: min
min:
	uglifyjs -cm < preloadimages.js > preloadimages.min.js
clean:
	rm -f preloadimages.min.js
