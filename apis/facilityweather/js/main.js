

/*facility list*/
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

/*long and lat*/
$("#submit").on("click",function(e){
  e.preventDefault();
  var url = "https://api.sunrise-sunset.org/json?lat="+lat+" &lng= "+lng+" &callback=mycallback";
  var lat = parseFloat$("#lat").val("");
  var lng = parseFloat$("#lng").val("");
  $.ajax({
    url: url,
    success: function(response){
      response.forEach(function(e){
        console.log(e);
        $("ul").append("<li>"+e+"</li>");
      })

    },
    error: function(r){
      console.log(r);
    }

  })
})

/*weather app*/

$("#submit").on("click",function(e){
  e.preventDefault();
  var apiKey = "0dc269b920596a7479afe7c982110133";
  var cityName = $("#city").val();
  var country = "US"

  var weatherUrl = "https://api.openweathermap.org/data/2.5/find?q=" +cityName+ "," +country+ "&units=imperial" +  "&APPID=" +apiKey;

  $.ajax({
    url: weatherUrl,
    success: function(response){
      console.log(response.list[0].main.temp);

    },
    error: function(r){
      console.log(r);
    }

  })
})
