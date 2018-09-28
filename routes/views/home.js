var keystone = require('keystone');

var pageView = require('./page')
exports = module.exports = function (req, res) {

	req.params.page = "home";

	return pageView(req,res);
};
