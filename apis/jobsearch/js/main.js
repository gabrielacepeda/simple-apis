

$(".enter").on("click", function(e){
  var apiUrl = "https://jobs.search.gov/jobs/search.json?query=";
  var category = $(".category").val();
  $.ajax({
    url: apiUrl + category,
      success: function(response) {
      response.forEach(function(e){
        console.log(e.position_title + e.organization_name);
        $("ul").append("<li>" +e.position_title+", "+e.organization_name+"</li>");

      })
      var state = $(".state").val();
+ "jobs" +"in" + state
  },
      error: function(r){
      console.log(r);
    },

  });

})

$(".enter").on("click", function(e){
  var apiUrl = "https://jobs.search.gov/jobs/search.json?query=";
  var category = $(".category").val();
  var state = $(".state").val();
  $.ajax({
    url: apiUrl + category + "+jobs+" +"in+" + state,
      success: function(response) {
      response.forEach(function(e){
        console.log(e.position_title + e.organization_name);
        $("ul").append("<li>" +e.position_title+", "+e.organization_name+"</li>");

      })

  },
      error: function(r){
      console.log(r);
    },

  });



})
