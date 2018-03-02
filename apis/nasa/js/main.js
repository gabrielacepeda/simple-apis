

$("#enter").on("click", function(e){
  e.preventDefault();
  var apiURL = "https://api.nasa.gov/planetary/apod?api_key=Um0nTp2TDXaCrDL6RP77CEHPU76w6i62mu2S12zc&date=";
  var icon = $(".date").val();
  $.ajax({
    url: apiURL + icon,
      success: function(response) {
      console.log(response);
      $("#img").attr("src", response.url);
  },
      error: function(r){
      console.log(r);
    },

  });



})
