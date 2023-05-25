fetch('../zacheySteamMaps.json')
  .then((response) => response.json())
  .then((data) => {
    // Обработка данных
    let output = ''
    data.forEach((item) => {
      output += `<center><div class="card card-body"><p class="maps-title">${item.title}</p><a href='${item.link}'><img src='${item.image}' alt=''></a></div></center><br><br>`
    })
    // Вывод данных на страницу
    document.getElementById('mapList').innerHTML = output
  })
  .catch((error) => console.error(error))
