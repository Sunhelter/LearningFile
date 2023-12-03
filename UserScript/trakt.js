[Script]
http-request ^https?:\/\/www\.netflix\.com\/watch\/\d+ script-path=https://raw.githubusercontent.com/yourusername/somepath/netflix.js

[MITM]
hostname = www.netflix.com

[Script]
var regex = /^https?:\/\/www\.netflix\.com\/watch\/(\d+)/;
$task.fetch({url: $request.url}).then(response => {
  var url = response.url;
  var match = url.match(regex);
  if (match) {
    var movieId = match[1];
    var title = response.headers['x-netflix-title'];
    var duration = response.headers['x-netflix-runtime'];
    var watchedTime = response.headers['x-netflix-watch-time'];
    var data = {
      movieId: movieId,
      title: title,
      duration: duration,
      watchedTime: watchedTime
    };
    $httpClient.post({
      url: 'https://api.trakt.tv/scrobble',
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': 'YOUR_API_KEY_HERE'
      },
      body: data
    }, (error, response, data) => {
      if (error) {
        console.log('Error scrobbling to Trakt:', error);
      } else if (response.status != 200) {
        console.log('Unexpected status scrobbling to Trakt:', response.status);
      } else {
        console.log('Scrobbled to Trakt:', data);
      }
    });
  }
});
