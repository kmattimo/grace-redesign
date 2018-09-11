var keystone = require('keystone');
var Types = keystone.Field.Types;


var Page = new keystone.List('Page', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true, fixed: true },
  //header image
});
Page.add({
  // slug: { type: String, readonly: true },
  title: { type: String, required: true },
  menuTitle: { type: String, label: 'Menu Title', note: 'Optionally create a shorter title for navigation elements' },
  headerImage: {type: Types.CloudinaryImage, label: 'Header Image'},
  components: {type: Types.Relationship, ref: 'ComponentBase', many: true }
});
Page.register();