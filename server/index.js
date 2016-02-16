import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './generated/app';

const app = express();

app.get('/', (req, res) => {
  res.send(ReactDOMServer.renderToString(<App />));
});

app.listen(3000, () => console.log('server running'));
