import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './generated/app';

const app = express();

app.engine('.hbs', handlebars({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.render('app', {
    app: ReactDOMServer.renderToString(<App />)
  });
});

app.listen(3000, () => console.log('server running'));
