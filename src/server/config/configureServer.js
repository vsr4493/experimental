import session from 'express-session';
import cookieParser from 'cookie-parser';

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
};