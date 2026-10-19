module.exports = ({ env }) => [
  'strapi::logger', 'strapi::errors', { name: 'strapi::security', config: { contentSecurityPolicy: { useDefaults: true } } },
  { name: 'strapi::cors', config: { origin: [env('FRONTEND_URL', 'http://localhost:5173'), 'http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:5174', 'http://127.0.0.1:5174'], methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'], headers: ['Content-Type','Authorization','Origin','Accept'], keepHeaderOnError: true } },
  'strapi::poweredBy', 'strapi::query', 'strapi::body', 'strapi::session', 'strapi::favicon', 'strapi::public'
];
