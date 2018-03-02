

$("#enter").on("click",function(e){
  var url = "https://data.nasa.gov/resource/9g7e-7hzz.json?country=US";
  $.ajax({
    url: url,
    success: function(response){
      response.forEach(function(e){
        console.log(e.facility);
        $("ul").append("<li>"+e.facility+"</li>");
      })

    },
    error: function(r){
      console.log(r);
    }

  })
})
