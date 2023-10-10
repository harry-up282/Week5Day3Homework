$(document).ready(function(){
 
  $("td.selectable").on("click", function () {

    var columnIndex = $(this).index(); // Get the column index of the clicked cell
    var cliffSiteName = $("table thead tr th").eq(columnIndex).text(); 

    var content = $(this).text();
    // console.log("Clicked on cell with content: " + content); for debugging  error in the code instaed of tdhighlight it is td.selectable
    if (content != "Not Available"){
      $(this).toggleClass("td.selectable");

      if($(this).hasClass("td.selectable")){
        $('#displaySelected').css("visibility","visible");
        $('#displaySelected').css("margin-top","2em");
        // $('#result').append("<p>"+content+"</p>");

        $('#result').append("<p>"+content+ cliffSiteName+"</p>");
      }else{
        $('#result p:contains('+content+')').remove();

        if($('#result').has('p').length === false){
          $('#displaySelected').css("visibility","hidden");
          $('#displaySelected').css("margin-top","0");
        }
      }
        // Extract the cliff site name
        // $('#cliffSiteName').text("Cliff Site Name: " + cliffSiteName);
        
      
      
    }
  });
});

