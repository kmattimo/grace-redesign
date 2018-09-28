const pageToLink = function(page, stop) {
    var link = {
        url: '/' + page.slug,
        name: page.menuTitle? page.menuTitle : page.title,
    }

    if(!stop && page.secondaryNavigation) {
        //brother may I have some infinite loops    
        link.secondary= page.secondaryNavigation.map(x => pageToLink(x, true))
    }
    console.log(link);

    return link;
}

exports.pageToLink = pageToLink;