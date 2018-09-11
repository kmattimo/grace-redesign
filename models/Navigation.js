var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Navigation = new keystone.List('Navigation', {
	nocreate: true,
});

Navigation.add({
	name: {type: String,},
	header: { type: Types.Relationship, ref: 'Page', many: true, label: 'Header Navigation' },
	menu: {type: Types.Relationship, ref: 'Page', many: true, label: 'Menu Navigation'}
});




Navigation.register();
