var cta = require('./sharedFields/cta');

var keystone = require('keystone');
var Types = keystone.Field.Types;

var ComponentBase = new keystone.List('ComponentBase', {
  map: { name: 'title' },
});
ComponentBase.add({
  title: { type: String, required: true },
});
ComponentBase.register();

var RTE = new keystone.List('RTE', { inherits: ComponentBase });
RTE.add({
  Header: {type: Types.Text},
  Content: {type: Types.Html, wysiwyg: true},
});
RTE.add({heading: 'Call to Action'})
RTE.add({
  ...cta()
})
RTE.register();


var Quote = new keystone.List('Quote', { inherits: ComponentBase });
Quote.add({
  Content: {type: Types.Html},
  Author: {type: String},
});
Quote.register();


// TODO: header is a bad name for titles ... what to call it? 

//autocreate this one and link it wherever - the same latest news appears
var LatestNews = new keystone.List('LatestNews', {inherits: ComponentBase});
LatestNews.add({
  Header: {type: Types.Text, default: 'Latest News'},

});
LatestNews.register();


//When you add new components add them to the components.pug switch case