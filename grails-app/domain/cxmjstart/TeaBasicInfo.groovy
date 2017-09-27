package cxmjstart

import grails.rest.Resource

@Resource(uri="/teabasicinfos", readOnly = false, formats = ["json", "xml"])
class TeaBasicInfo {

    String name
    String brand
    String year
//    Double weight
//    String unit

    String category
    String region
    UnitLabel unitLabel  // don't use this right now, keep in safe

    String city
    String county
    String township
    String village
    String committee

//    String comments

    static mapping = {
//        id generator:'assigned', name:'name'
    }

    static constraints = {
        name nullable: false, unique: true, blank: false
        brand nullable: false, blank: false
        year nullable: false, blank: false, range: 1900..2020
        category nullable: false, blank: false, inList: categoryList()

        region nullable: false, blank: false, inList: regionList()
        unitLabel nullable: false, blank: false // TODO matchs: [dsf], inList: unitlabel.labelsById

        city nullable: true
        county nullable: true
        township nullable: true
        village nullable: true
        committee nullable: true

//        comments nullable: true, widget: "textarea"

    }

    static List<String> regionList(){
        return ["景洪", "大理", "保山", "临沧", "勐腊", "勐海", "普洱", "拼配"]
    }
    static List<String> categoryList(){
        return ["生普", "熟普"]
    }
}

//class Response {
//    ...
//    static constraints = {
//        survey blank: false
//        answer blank: false, validator: { val, Response obj -> val in obj.survey.answers }
//    }
//}

//class Response {
//    Survey survey
//    Answer answer
//
//    static constraints = {
//        survey blank: false
//        answer blank: false, inList: survey.answers
//    }
//}