

$("#enter").on("click",function(e){
  e.preventDefault();
  var apiKey = "0dc269b920596a7479afe7c982110133";
  var cityName = $("#city").val();
  var countryName = $("#country").val();

  var weatherUrl = "https://api.openweathermap.org/data/2.5/find?q=" +cityName+ "," +countryName+  "&units=imperial" +  "&APPID=" +apiKey;

  $.ajax({
    url: weatherUrl,
    success: function(response){
      console.log(response.list[0].main.temp);
      $("ul").append("<li>"  +cityName +"  ," +countryName + " " + " is "+ " currently " +response.list[0].main.temp+ " degrees"+ "</li>")

    },
    error: function(r){
      console.log(r);
    }

  })
})
