import express from 'express';
import { createPageRenderer } from 'vite-plugin-ssr';

const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;

const startServer = async () => {
  const app = express();

  let viteDevelopmentServer;
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`));
  } else {
    //
    // eslint-disable-next-line @typescript-eslint/no-require-imports , @typescript-eslint/no-var-requires
    const vite = require('vite');
    viteDevelopmentServer = await vite.createServer({
      root,
      server: { middlewareMode: 'ssr' },
    });
    app.use(viteDevelopmentServer.middlewares);
  }

  const renderPage = createPageRenderer({
    isProduction,
    root,
    viteDevServer: viteDevelopmentServer,
  });
  app.get('*', (request, response, next) => {
    const url = request.originalUrl;
    const pageContextInit = {
      url,
    };
    renderPage(pageContextInit).then(({httpResponse}) => {
      if (!httpResponse) {
        next();
        return;
      }

      const { body,
        statusCode,
        contentType } = httpResponse;
      response.status(statusCode).type(contentType).send(body);
    }).catch((error) => {
      console.error(error);
      next();
    });

  });

  const port = process.env.PORT ?? 3_000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
};

void startServer();
