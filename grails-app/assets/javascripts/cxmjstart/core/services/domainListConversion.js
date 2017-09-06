//= wrapped

angular
    .module("cxmjstart.core")
    .factory("domainListConversion", domainListConversion);

function domainListConversion($injector) {
    var delegateCache = {};
    return function(domainClass, property, delegateFunction) {
        // console.log(domainClass)  //albert
        // console.log(property)  // albert
        // console.log(delegateFunction)  // albert
        return function(domainList) {
            // console.log(domainList)  // albert
            // console.log(Object.prototype.toString.call(domainList))  // albert
            // console.log(typeof domainList)  // albert
            if (!delegateCache[delegateFunction]) {
                delegateCache[delegateFunction] = $injector.get(delegateFunction);
            }
            // console.log(delegateCache[delegateFunction]) // albert
            return domainList.map(delegateCache[delegateFunction](domainClass, property));
        };
    };
}