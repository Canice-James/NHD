
  "use strict";
      // Show full page LoadingOverlay
    $.LoadingOverlay("show");
    setTimeout(function(){
      $.LoadingOverlay("hide");
  }, 4000);
    // Hide it after 3 seconds
    $(body).ready(function(){
      setTimeout(function(){
          $.LoadingOverlay("hide");
      }, 1000);
    });
