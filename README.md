## Build Process

**clean**
  * dev:
    * ensure public/assets exists and is empty
  * dist:
    * ensure public/assets exists and is empty
    * ensure public/assets/styles exists and is empty
    * ensure tmp/scripts exists and is empty
    
**build:vendor**
  * dev:
    * copy entire vendor directory to public/assets
    * create vendor bundle at public/assets/vendor.js
  * dist
    * N/A
    
**build:scripts**
  * dev:
    * copy entire scripts directory to public/assets
  * dist:
    * create self-executing bundle at public/assets/scripts/app.js
    
**build:styles**
  * dev:
    * compile sass to css at public/assets/styles/app.css
  * dist:
    * compile sass to css at public/assets/styles/app.css (minified)
    * replace asset reference in app.css to digest versions

**build**
  * dev:
    * N/A
  * dist:
    * run build:scripts and build:styles (in parallel for speed?)

**watch:scripts**
  * dev:
    * run build:scripts whenever app/scripts change 
  * dist:
    * N/A
  
**watch:styles**
  * dev:
    * run build:styles whenever app/scripts change 
  * dist:
    * N/A

**watch**
  * dev:
    * run watch:scripts and watch:styles in parallel
  * dist:
    * N/A

**live-reload**
  * dev:
    * start live-reload server on 9090
  * dist:
    * N/A

**dev**
  * set NODE_ENV to development, run build:vendor and watch

**dist**
  * set NODE_ENV to production and run build