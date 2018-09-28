var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Settings = new keystone.List('Settings', {
	nocreate: true,
});

Settings.add({
	name: {type: String,},
	defaultHeaderImage: { type: Types.CloudinaryImage, label: 'Default Header Image' },
});




Settings.register();
