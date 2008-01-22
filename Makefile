# $Id$

VERSION = 0.8.0
SHELL = /bin/sh
DOWNLOAD = /export/home/tuupola/rails/mephisto-svn/public/download
JSPACKER = /export/home/tuupola/bin/jspacker
JSMIN    = /export/home/tuupola/bin/jsmin

all: viewport packed minified latest

viewport: jquery.viewport.js
	cp jquery.viewport.js $(DOWNLOAD)/jquery.viewport-$(VERSION).js

packed: jquery.viewport.js
	$(JSPACKER) -i jquery.viewport.js -o jquery.viewport.pack.js -f -e62
	cp jquery.viewport.pack.js $(DOWNLOAD)/jquery.viewport-$(VERSION).pack.js

minified: jquery.viewport.js
	$(JSMIN) < jquery.viewport.js > jquery.viewport.mini.js 
	cp jquery.viewport.mini.js $(DOWNLOAD)/jquery.viewport-$(VERSION).mini.js

latest: jquery.viewport.js jquery.viewport.pack.js jquery.viewport.mini.js
	cp jquery.viewport.js $(DOWNLOAD)/jquery.viewport.js
	cp jquery.viewport.pack.js $(DOWNLOAD)/jquery.viewport.pack.js
	cp jquery.viewport.mini.js $(DOWNLOAD)/jquery.viewport.mini.js

