const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://github.com/zachey01?tab=repositories';

request(url, (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);

    // Получение списка элементов на странице
    const items = $(' ');

    // Создание массива объектов с данными элементов
    const data = [];
    items.each((i, item) => {
      const title = $(element).find("a.codeRepository").text();

      data.push({
        title
      });
    });

    // Сохранение данных в JSON файл
    fs.writeFile('data.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Данные успешно сохранены в файл data.json');
    });
  }
});