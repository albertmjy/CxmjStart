package cxmjstart

import grails.rest.Resource

@Resource(uri = "/teaEvaluationInfo", readOnly = false, formats = ["json", "xml"])
class TeaEvaluationInfo {

    TeaBasicInfo teaBasicInfo

    Double colorRate
    Double smellRate
    Double tasteRate
    Double feelingRate
    Double potentialRate
    Double overallRate
    String comments

    Users user
    TeaEvaluationEventInfo teaEvaluationEventInfo

//    String userName = user.name

//    String userMobile

    static belongsTo = [teaEvaluationEventInfo: TeaEvaluationEventInfo]

    static constraints = {
    }


//    static hasMany = [mob: String]
////
//    static embedded = ['mob']

    static mapping = {

//        teaEvaluationEventInfo joinTable: [name: "tap"]

//        teaBasicInfo generator: "foreign", column: "name", type: "text"

//        mob joinTable: [column: "name", key:"ID"]
//        user joinTable: [column: "name", key:"ID"]

    }

}
