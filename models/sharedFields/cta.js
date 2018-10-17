var keystone = require('keystone');
const Types = keystone.Field.Types;


module.exports = function(){
  return {
    CtaLink: {
      type: Types.Url,
      },
      CtaLabel: {
        type: Types.Text
      }
    }

    //TODO: internal/external checkbox, with dependent fields and computed getter
    
    //these will need the setup model method to work
    // getUrl() {
    //   return `/services/${this.serviceType}/${this.slug}`;
    // },
    // getBreadcrumbLink() {
    //   return `/services/${this.serviceType}`;
    // }
}
