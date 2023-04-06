import app from './app.js';
import connectDB from './configs/mongodb.js';
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const server = app.listen(port, () =>
  console.log(`The app is listening on http://localhost:${port}/api/v1/users `)
);

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION ... Shutting Down');
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION ... Shutting Down');
  server.close(() => {
    process.exit(1);
  });
});
