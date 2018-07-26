import session from 'express-session';
import cookieParser from 'cookie-parser';
import proxy from 'express-http-proxy';

const API_ENDPOINT = 'http://demo5190193.mockable.io';

// Decorate given server instance with necessary middlewares
export default (server) => {
	server.set('trust proxy', 1) // trust first proxy
	server.use(session({
	  secret: 'SuperSecure12345',
	  resave: false,
	  saveUninitialized: true,
	  cookie: { secure: true }
	}))
	server.use(cookieParser());
	server.use('/api', proxy(API_ENDPOINT));
};