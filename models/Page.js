var keystone = require('keystone');
var Types = keystone.Field.Types;


var Page = new keystone.List('Page', {
  // map: { name: 'name' },
  autokey: { path: 'slug', from: 'name', unique: true, fixed: true },
  //header image
});
Page.add({
  // slug: { type: String, readonly: true },
  name: { type: String, required: true, note: 'Affects the URL' },

  title: { type: String, note: 'For the header' },
  menuTitle: { type: String, label: 'Menu Title', note: 'Optionally create a shorter title for navigation elements' },
  headerImage: {type: Types.CloudinaryImage, label: 'Header Image'},
  secondaryNavigation: {type: Types.Relationship, ref: 'Page', many: true, label: 'Secondary Navigation'},

  components: {type: Types.Relationship, ref: 'ComponentBase', many: true }
});
Page.register();