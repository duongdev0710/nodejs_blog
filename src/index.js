const path = require('path');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const express = require('express');
const sass = require('node-sass');
const app = express();
const port = 5000;

const inputDir = 'src/resources/scss'
const outputDir = 'src/public/css'

sass.render({
    file: path.join(inputDir, 'app.scss'),
    outFile: path.join(outputDir, 'app.css'),
  }, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      // Save the compiled CSS to the output directory
      fs.writeFileSync(path.join(outputDir, 'app.css'), result.css);
    }
  });

app.use(express.static(path.join(__dirname, 'public'))); // method join tra ve path thu muc static
app.use(morgan('combined'))



app.engine('hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    // res.render('news');
    return res.send({
        id: 1, name: 'duongdt', job: 'web developer', age: 27
    })
})

app.listen(port, () => console.log('Example app listening on port ' + port))
