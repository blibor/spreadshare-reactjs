const routes = module.exports = require('next-routes')()

routes
		.add('faq', '/faq/:slug', 'faq')