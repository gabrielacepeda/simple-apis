


$("#enter").on("click", function(e){
var apiUrl = "http://makeup-api.herokuapp.com/api/v1/products.json?brand="
var brandName = $("#brand").val();
var productName = $("#product").val();
$("#enter").val("");
$.ajax({
  url: apiUrl + brandName +"&product_type="+ productName,
    success: function(response) {
    response.forEach(function(e){
    console.log(response.name);
    $("ul").append("<li>" +response.name+"</li>");

    })
},
    error: function(r){
    console.log(r);
  },

});



})
