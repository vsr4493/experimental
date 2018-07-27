import session from 'cookie-session';
import cookieParser from 'cookie-parser';
import proxy from 'express-http-proxy';

const API_HOST = `hackapi.1mg.com:90/odin`;
const API_ENDPOINT = `${API_HOST}/api/v1`;
const AUTH_TOKEN_KEY = 'authToken'

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
	server.use('/api/login', proxy(`${API_HOST}/login`, {
		proxyReqPathResolver: function (req) {
	    const result = `/odin/login`;
	    return result;
    },
	  userResDecorator(proxyRes, proxyResData, userReq, userRes) {
	    const response = JSON.parse(proxyResData.toString('utf8'));
	    if(response.is_success) {
	    	const data = response.data;
	    	userRes.cookie(AUTH_TOKEN_KEY, data.token);
	    }
	    return JSON.stringify(response);
	  }
	}));
	server.use('/api', proxy(API_ENDPOINT, {
		proxyReqPathResolver: function (req) {
	    const result = `/odin/api/v1${req.url}`;
	    return result;
    },
		proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
			// Decorate headers
			const token = srcReq.cookies[AUTH_TOKEN_KEY];
			Object.assign(proxyReqOpts.headers, {
				'Authorization': token,
			});
	    return proxyReqOpts;
	  },
	}));
};
