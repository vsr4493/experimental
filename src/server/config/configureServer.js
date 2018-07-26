import session from 'express-session';
import cookieParser from 'cookie-parser';
import proxy from 'express-http-proxy';

const IP = '192.168.2.187:3000'

const API_ENDPOINT = `http://192.168.2.187:3000/api/v1`;
const AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNTM3ODA3NzczfQ.JvyO1g5OSfuFFDrFvO5mmofmJLMzYLtzwMxQRzSyA9g';
//const API_ENDPOINT = 'http://sunapi.1mg.com:90/odin/api/v1/';

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
	server.use('/api', proxy(API_ENDPOINT, {
		proxyReqPathResolver: function (req) {
	    return `${API_ENDPOINT}${req.url}`;
    },
		proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
			// Decorate headers
			Object.assign(proxyReqOpts.headers, {
				'Authorization': AUTH_TOKEN,
			});
	    return proxyReqOpts;
	  }
	}));
};