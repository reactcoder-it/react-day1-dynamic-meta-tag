const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express();
const port = process.env.PORT || 5000;

app.get('/' , (req, res) => {
    console.log('Home page visited!')

    const filePath = path.resolve(__dirname, './build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }

        // replace
        data = data.replace(/\$OG_TITLE/g, 'Домашняя страница')
        data = data.replace(/\$OG_DESCRIPTION/g, 'Дескрипшн домашней страницы')
        data = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png')

        res.send(data)
    })
})

app.get('/about' , (req, res) => {
    console.log('About page visited!')

    const filePath = path.resolve(__dirname, './build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }

        // replace
        data = data.replace(/\$OG_TITLE/g, 'Страница о нас')
        data = data.replace(/\$OG_DESCRIPTION/g, 'Дескрипшн страницы о нас')
        data = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png')

        res.send(data)
    })
})

app.get('/contact' , (req, res) => {
    console.log('Contact page visited!')

    const filePath = path.resolve(__dirname, './build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }

        // replace
        data = data.replace(/\$OG_TITLE/g, 'Контакты')
        data = data.replace(/\$OG_DESCRIPTION/g, 'Дескрипшн страницы контактов')
        result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png')

        res.send(result)
    })
})

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));