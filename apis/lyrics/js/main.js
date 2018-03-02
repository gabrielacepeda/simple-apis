

/*lyrics*/
$(".enter").on("click", function(e){
  e.preventDefault();
  var apiUrl = "https://api.lyrics.ovh/v1/";
  var art = $(".artist").val();
  var songName = $(".song").val();
  $(".enter").val("");
  $.ajax({
    url: apiUrl + art +"/"+ songName,
      success: function(response) {
      console.log(response);
      $("#lyrics").append(response.lyrics);
  },
      error: function(r){
      console.log(r);
    },

  });

  })
  /*inspirational quotes*/
$(".enter").on("click", function(e){
  e.preventDefault();
var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="
$(".enter").val("");
$.ajax({
  url: url,
    success: function(response) {
      response.forEach(function(e){
      console.log(e.content + e.title);
      $("p").append(e.content + e.title);
    })
},
    error: function(r){
    console.log(r);
  },

});

})
