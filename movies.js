// onload !


var url = "";
var junk = "";

$(function(){


  $('form').submit(function(){
    var theMovie = $('input').val();
    var movie = theMovie.replace(/" "/g, '%20');
    // movie.replace("")
    url ='http://www.omdbapi.com/?t=' + movie;
    // console.log(movieGet());
    // movieGet();
 $.ajax({
      type: 'get',
      url: url,
      dataType: 'json'
  }).done(function(data){
    console.log(data);
    junk = data;
    movieInfo();
  });
   return false;
  });

});


//  function movieGet() { $.ajax({
//       type: 'get',
//       url: url,
//       dataType: 'json'
//   }).done(function(data){
//     console.log("i'm done");
//     console.log(data);
//   }).fail(function(data){
//     console.log("i've failed");
//     console.log(data);
//   }).always(function(data){
//     console.log("i always run!");
//   });

// };
function movieInfo() {
  for (var i = 0; i < junk.length; ++i)
 $('body').append('<div>' + junk[i].Title + ", " + junk[i].Year);
};
