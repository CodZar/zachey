fetch('../zacheyProjects.json')
  .then((response) => response.json())
  .then((data) => {
    let output = ''
    data.forEach((item) => {
      output += `<a href='${item.link}'>${item.name}</a> <p>${item.description}</p> <div class='repo-card' data-repo='zachey01/${item.name}'></div> <br><br>`
    })
    document.getElementById('mapList').innerHTML = output
  })
  .catch((error) => console.error(error))
