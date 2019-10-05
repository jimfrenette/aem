
"use strict";

use( function() {

  var data = {};

  data.desktop = {};
  data.mobile = {};  

  data.desktop.file = properties.get("./desktop/fileReference");  
  data.desktop.alt = properties.get("./desktop/alt");

  data.mobile.file = properties.get("./mobile/fileReference");  
  data.mobile.alt = properties.get("./mobile/alt");

  return data;
});