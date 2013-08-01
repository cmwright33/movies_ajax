// onload !


var url = "";
var junk = "";

$(function(){


  $('form').submit(function(){
    var theMovie = $('input').val();
    var movie = theMovie.replace(/" "/g, '%20');
    // movie.replace("")
    url ='http://www.omdbapi.com/?s=' + movie;
    // console.log(movieGet());
    // movieGet();
 $.ajax({
      type: 'get',
      url: url,
      dataType: 'json'
  }).done(function(data){
    console.log(data);
    junk = data;
    multiMovies();
  });
   return false;
  });

});

$('#single').on(click, function() {
  singleMovie();

   });


$('#multi').on(click, function() {
  multiMovie();
   });


function ajaxSearch() {
 $.ajax({
      type: 'get',
      url: url,
      dataType: 'json'
  }).done(function(data){
    console.log(data);
    junk = data;
    multiMovies();
  });
};




function multiMovies() {
  var theMovie = $('input').val();
    var movie = theMovie.replace(/" "/g, '%20');
  url ='http://www.omdbapi.com/?s=' + movie;
 for (var i = 0; i < junk.Search.length; ++i)
 $('body').append('<div id='+ i + '>' + junk.Search[i].Title + ", " + junk.Search[i].Year);
};

function singleMovie() {
  var theMovie = $('input').val();
    var movie = theMovie.replace(/" "/g, '%20');
    url ='http://www.omdbapi.com/?t=' + movie;
  $('body').append('<div id='+ i +'>' + junk.Title + ", " + junk.Year);
}
