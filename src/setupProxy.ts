import { Application } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
export default (app: Application) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_DOMAIN || 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': `/api/${process.env.REACT_APP_API_VERSION || 'v1'}`,
      },
    }),
  );
};
