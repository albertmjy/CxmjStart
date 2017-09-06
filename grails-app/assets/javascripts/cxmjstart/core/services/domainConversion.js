//= wrapped

angular
    .module("cxmjstart.core")
    .factory("domainConversion", domainConversion);

function domainConversion($injector) {
    var domainCache = {};
    return function(domainClass, property) {
        return function(domain) {
            // console.log(domain)  //albert
            if (domain.hasOwnProperty(property)) {
                var Domain;
                if (!domainCache[domainClass]) {
                    // console.log($injector.get(domainClass))  // albert
                    // console.log($injector)  // albert

                    domainCache[domainClass] = $injector.get(domainClass);
                }
                Domain = domainCache[domainClass];
                // console.log(Domain)  // albert
                domain[property] = new Domain(domain[property]);
                // console.log(domain) // albert
            }
            return domain;
        };
    };
}