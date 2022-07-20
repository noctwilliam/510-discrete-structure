$(document).ready(function(){

    $("#search").focus(function() {
      $(".search-box").addClass("border-searching");
      $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function() {
      $(".search-box").removeClass("border-searching");
      $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function() {
        if($(this).val().length > 0) {
          $(".go-icon").addClass("go-in");
        }
        else {
          $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function(){
      myFunction();
    });

});

// close popup
function closePopup()
{
  $(".shipDetail").css("display","none");
  $(".container").css("display","block");
}


// popup
function myFunction() {
  var search = document.getElementById("search").value;
  $(".shipDetail").css("display","block");
  $(".container").css("display","none");
  $(".shipDetail").html("");
  $(".shipDetail").css("background-image" ,"");
  $(".shipDetail").css("background-image" ,"url(loading.gif)");

  // load
  setTimeout(function(){
    $(".shipDetail").css("background-image" ,"url(popupBg.gif)");
    $(".shipDetail").html(
      "<div class='closeButton' onclick='closePopup()'>"+
      "<span class='material-symbols-outlined'>cancel</span>"+
      "</div>"+
      "<div class='col-2'></div>"
      );

    var array = 0;
    var isExist = true;

    if (Object.values(ship[0]).indexOf(search.toLowerCase()) > -1) {
      array = 0;
    } else if (Object.values(ship[1]).indexOf(search.toLowerCase()) > -1) {
      array = 1;
    } else if (Object.values(ship[2]).indexOf(search.toLowerCase()) > -1) {
      array = 2;
    } else if (Object.values(ship[3]).indexOf(search.toLowerCase()) > -1) {
      array = 3;
    } else if (Object.values(ship[4]).indexOf(search.toLowerCase()) > -1) {
      array = 4;
    } else {
        isExist = false;
        $(".shipDetail").css(
          "background-image" 
          ,"url(error.gif)"
          );
          $(".col-2").append(
            "<div class='notFoundText'>"+
            "<h2><b>SHIP NOT FOUND!</b></h2>"+
            "</div>"
            );
      }

      if(isExist == true){
        $(".col-2").append(
          "<div class='scroll'>"+
          "country: <b>"+ ship[array]["country"] + "</b>"+
          "<br>leave: <b>"+ ship[array]["leave"] + "</b>"+
          "<br>carries: <b>"+ ship[array]["carries"] + "</b>"+
          "<br>chimney_color: <b>"+ ship[array]["chimney_color"] + "</b>"+
          "<br>destination: <b>"+ ship[array]["destination"] + "</b>"+
          "</div>"
          );
      }
    }
  , 3000);

}

// object based approach
const ship = [
	{
		country: "french",
		leave: 5,
		carries: "tea",
		chimney_color: "blue",
		destination: "genoa",
	},
	{
		country: "greek",
		leave: 6,
		carries: "coffee",
		chimney_color: "red",
		destination: "hamburg",
	},
	{
		country: "brazil",
		leave: 8,
		carries: "cocoa",
		chimney_color: "black",
		destination: "manila",
	},
	{
		country: "english",
		leave: 9,
		carries: "tea",
		chimney_color: "blue",
		destination: "marseille",
	},
	{
		country: "spanish",
		leave: 7,
		carries: "corn",
		chimney_color: "green",
		destination: "port said",
	},
];