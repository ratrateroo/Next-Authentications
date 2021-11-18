// server.js
require('dotenv').config();
const express = require('express');
const nextModule = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';

const app = nextModule({ dev });
const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		const server = express();
		server.use(cors());

		server.get('*', async (req, res) => {
			// if (req.url.includes('/api')) {
			// 	return app.render(req, res, '/404');

			// }
			console.log('api');
			return handle(req, res);
		});

		server.post('*', async (req, res) => {
			return handle(req, res);
		});

		server.listen(process.env.PORT || 3001, (err) => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${process.env.PORT || 3001}`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
