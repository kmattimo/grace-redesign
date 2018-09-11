var keystone = require('keystone');
var Types = keystone.Field.Types;


var ComponentBase = new keystone.List('ComponentBase', {
  map: { name: 'title' },
});
ComponentBase.add({
  title: { type: String, required: true },
  type: {type: String }
});
ComponentBase.register();

var RTE = new keystone.List('RTE', { inherits: ComponentBase });
RTE.add({
  Content: {type: Types.Html, wysiwyg: true},
});
RTE.register();


var Quote = new keystone.List('Quote', { inherits: ComponentBase });
Quote.add({
  Content: {type: Types.Html},
  Author: {type: String},
});
Quote.register();


//When you add new components add them to the components.pug switch case