(function() {
  $(function() {
    return $("#floating-head").load("https://dl.dropboxusercontent.com/u/7364646/jeremiespoken.com/face.svg", function(response) {
      $(this).addClass("svgLoaded");
      return response;
    });
  });

}).call(this);