const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

let parser = new RSSParser()
parser.parseURL(
  CORS_PROXY + 'https://medium.com/feed/@bjzachey',
  function (err, feed) {
    if (err) throw err
    console.log(feed.title)
    feed.items.forEach(function (entry) {
      document.getElementById(
        'BlogPost',
      ).innerHTML = `<div class="card card-body"><a href="${entry.link}" target="blank"><i class="bi bi-card-text"></i>${entry.title}</a> <br> <i class="bi bi-calendar"></i>${entry.pubDate}</div>`
      console.log(entry.title + ':' + entry.link)
    })
  },
)
