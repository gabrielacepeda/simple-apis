

/*dad joke*/
$("#enter").on("click", function(e){
  e.preventDefault();
  var apiUrl = "https://icanhazdadjoke.com/search?term=";
  var term = $("#phrase").val();
  $.ajax({
    url: apiUrl + term,
      success: function(response) {
      console.log(response);
      $("#dad").append(response);
  },
      error: function(r){
      console.log(r);
    },

  });

})

/*chuck norris*/


$("#search").on("click", function(e){
  e.preventDefault();
  var apiurl = "https://api.chucknorris.io/jokes/random";
  $.ajax({
    url: apiurl,
      success: function(response) {

      console.log(response.value);
      $("ul").append("<li>"+response.value+"</li>");

  },
      error: function(r){
      console.log(r);
    },

  });

})
