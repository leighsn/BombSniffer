const Store = {
  actors: [],
  directors: [],
  movies: []
}

$(function() {
  $('#submit').on('click', function(event) {
    // Store.movies = []
    $('#results').empty()
    $('iframe').css("display", "none")
    // debugger
    var searchType = $("select#searchType").val()
    if(searchType === "actor") {

      actorsController.init()
    }
    else {
     directorsController.init()
    }
  })

  $('body').on('click', '.moviePosters', function(){
    console.log(this)
    var youtubeId = $(this).attr("id")
    moviesController.youtubeFrame(youtubeId)
  })
})

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
  if (event.data != YT.PlayerState.PLAYING) {
    player.stopVideo();
  }
}
function stopVideo() {

}
