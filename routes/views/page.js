var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.filters = {
		page: req.params.page,
	};

	//make sure object can be populated asynchronously
	locals.page = {}

	// Load all categories
	view.on('init', function (next) {

        console.log(locals.filters.page)
        var q = keystone.list('Page').model.findOne({
			slug: locals.filters.page,
		}).populate('components');

        //TODO: 404 if page not found 

		q.exec(function (err, result) {
            console.log(result);


            //massage viewModel instead of using the mongoose object directly
            locals.page.header = {
				title: result.title,
				image: result.headerImage
			}
			
			locals.page.components = result.components

            console.log('viewmodel:')
            console.log(locals.page);
			next(err);
		});
	});

	// 
	view.on('init', function (next) {

		var q = keystone.list('Navigation').model.findOne({})
	// 		.populate('author categories');

		q.exec(function (err, result) {
			console.log(result)
			locals.page.navigation = result;
			next(err);
		});
	});

	// Render the view
	view.render('page');
};
