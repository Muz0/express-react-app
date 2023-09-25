import http from 'http';
import app from './src/app.js';

const server = http.createServer(app);

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Path: server/src/app.js