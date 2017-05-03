package cxmjstart

import grails.rest.Resource

@Resource(uri = "/teaEvaluationInfo", readOnly = false, formats = ["json", "xml"])
class TeaEvaluationInfo {

    TeaBasicInfo teaBasicInfo

    Date evaluationDate
    Double temperature
    Double humidity

    Double colorRate
    Double smellRate
    Double tasteRate
    Double feelingRate
    Double potentialRate
    Double overallRate
    String comments

    Users user

    static constraints = {
    }
}
