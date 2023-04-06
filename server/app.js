import express from 'express';
import userRouter from './routes/userRoutes.js';
import AppError from './helpers/appError.js';
import errorHandler from './helpers/errorHandler.js';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import monogoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { protectedRoute } from './controllers/userController.js';
import userUsageRouter from './routes/userUsageRoutes.js';
const app = express();

//Setup Static files folder as Public

//CORS
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.options('*', cors());

//Sets HTTP Security Headers
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

//Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, Please Try again later',
});
app.use('/api', limiter);

//Data Sanitization against NoSQL Query Injection
app.use(monogoSanitize());

//Data Sanitization aganint XSS
app.use(xss());

//Prevent Parameter Pollution
app.use(
  hpp({
    whitelist: [],
  })
);

app.use(cookieParser());
app.use(express.json({ limit: '10kb' }));

app.use('/public', protectedRoute, express.static('public'));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

//users routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/userUsage', userUsageRouter);
//Unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server !`));
});

//Error Handling Middileware
app.use(errorHandler);
// app.use(protectedRoute);

export default app;
