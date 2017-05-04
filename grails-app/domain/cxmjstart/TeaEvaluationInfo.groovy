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

    static constraints = {
    }

}
