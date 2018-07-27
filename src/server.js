import App from 'common/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import createStore from 'common/store/createStore';
import configureServer from 'server/config/configureServer';
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
// Decorate server with middlewares
configureServer(server);
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Thanos - 1mg POS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            margin: 0px;
          }
          * {
            margin: 0;
            padding: 0;
          }
        </style>
        <!-- jss-insertion-point -->
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body style="margin: 0px;">
        <div id="root"></div>
    </body>
</html>`
      );
    }
  });

export default server;
