import rateLimit from 'express-rate-limit';
import {Request, Response} from 'express'
import { IP_RATE_LIMITER_TIME_WINDOW_IN_MS, IP_REQUEST_LIMIT } from '../config';



// Apply rate limiting middleware
export const rateLimiterMiddleware = rateLimit({
  windowMs: IP_RATE_LIMITER_TIME_WINDOW_IN_MS, 
  max: IP_REQUEST_LIMIT, 
  message: 'Too many requests from this IP, please try again later.',
  handler: (req: Request, res: Response) => {
    res.status(429).json({ error: 'Too many requests from this IP, please try again later.' });
  }
});
