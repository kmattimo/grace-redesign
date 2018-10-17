var keystone = require('keystone');
var async = require('async');
var helpers = require('../../logic/helpers');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	const promises = [
		keystone.list('Page').model.findOne({
			slug: req.params.page,
		}).populate('components').exec(),
		keystone.list('Navigation').model.findOne({}).populate({path: 'menu header', populate: ['secondaryNavigation']}).exec(), //populate secondary links inside populated primary links

		keystone.list('Settings').model.findOne({}).exec()
	]

	view.on('init', function (next) {

		Promise.all(promises)
		.then(([
			page,
			navigation,
			settings,
		]) => {

			// console.log(settings);
			// console.log(navigation.menu);

			var headerImage = '';
			if(page.headerImage && page.headerImage.secure_url)
				headerImage = page.headerImage.secure_url;
			else if(settings.defaultHeaderImage && settings.defaultHeaderImage.secure_url)
				headerImage = settings.defaultHeaderImage.secure_url;

			locals.page = {
				header: {
					title: page.title,
					image: headerImage,
					links: navigation.header.map(x => helpers.pageToLink(x))
				},
				menu: {
					links: navigation.menu.map(function(x) { return helpers.pageToLink(x)})
				},
				components: page.components,
			}

			next();
		});
		//TODO catch
	});
        // var q =

        //TODO: 404 if page not found 

		// q.exec(function (err, result) {
        //     // console.log(result);
        //     //massage viewModel instead of using the mongoose object directly
        //     locals.page.header = {
		// 		title: result.title,
		// 		image: result.headerImage? result.headerImage.secure_url : ''
		// 	}
		// 	locals.page.components = result.components
        //     // console.log('viewmodel:')
        //     // console.log(locals.page);
		// 	next(err);
		// });
	// });

	// view.on('init', function (next) {
	// 	var q = keystone.list('Navigation').model.findOne({})
	// 	q.exec(function (err, result) {
	// 		console.log(result)
	// 		locals.page.navigation = result;
	// 		console.log(result);
	// 		next(err);
	// 	});
	// });

	// view.on('init', function (next) {
	// 	var q = keystone.list('Settings').model.findOne({})
	// 	q.exec(function (err, result) {
	// 		console.log(result)
	// 		locals.page.settings = result;
	// 		next(err);
	// 	});
	// });

	// Render the view
	view.render('page');
};
