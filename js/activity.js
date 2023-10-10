// $(document).ready(function () {
//   // Add a click event handler to all table cells with class 'selectable'
//   $("table td.selectable").click(function () {
//     // Toggle the 'selected' class on the clicked cell
//     $(this).toggleClass("selected");
//   });
// });
// $(document).ready(function () {
//   // Add a click event handler to all table cells with class 'selectable'
//   $("table td.selectable").click(function () {
//     // Toggle the 'selected' class on the clicked cell
//     $(this).toggleClass("selected");
//   });
// });
$(document).ready(function(){
  // Add a click event handler to all table cells with class 'selectable'
  $("table td.selectable").on("click", function () {
    // Toggle the 'selected' class on the clicked cell
    $(this).toggleClass("selected");
  });
});
// $(document).ready(function(){
//   // Add a click event handler to all table cells with class 'selectable'
//   $("td").on("click", function () {
//     var content = $(this).text();
//     if (content != "Not Available"){
//       $(this).toggleClass("tdhiglight");

//       if($(this).hasClass("tdhighlight")){
//         $('#displaySelected').css("visibility","visible");
//         $('#displaySelected').css("margin-top","2em");
//         $('#result').append("<p>"+content+"</p>");
//       }else{
//         $('#result p:contains('+content+')').remove();

//         if($('#result').has('p').length == false){
//           $('#displaySelected').css("visibility","hidden");
//           $('#displaySelected').css("margin-top","0");
//         }
//       }

//     }
//   });
// });
