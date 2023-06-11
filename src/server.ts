import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  const HEALTHZ_ROUTER: string = 'healthz';

  const app: Application = express();

  /* Middleware */

  /* Routers */
  app.get(`/${HEALTHZ_ROUTER}`, (request: Request, response: Response) => {
    response.status(200).json({
      message: 'Hello, World! ⭐',
    });
  });

  const PORT: number = Number(process.env.PORT) || 3000;
  app.listen(PORT, () => {
    console.log(
      `server is running on: http://localhost:${PORT}/${HEALTHZ_ROUTER}`
    );
  });
})();
