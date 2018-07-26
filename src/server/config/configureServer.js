import session from 'express-session';
import cookieParser from 'cookie-parser';
import proxy from 'express-http-proxy';

const API_ENDPOINT = `hackapi.1mg.com:90/odin/api/v1`;
const AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNTM3ODExODMyfQ.PGnri-EAmOrPJbwwSvnIVKzkKRn7W6t7LkOfzP28KkE';

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
	    const result = `/odin/api/v1${req.url}`;
	    return result;
    },
		proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
			// Decorate headers
			Object.assign(proxyReqOpts.headers, {
				'Authorization': AUTH_TOKEN,
			});
			console.log(proxyReqOpts);
	    return proxyReqOpts;
	  },
	}));
};