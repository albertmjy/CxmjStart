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
    String county
    String township
    String village
    String committee
    UnitLabel unitLabel  // don't use this right now, keep in safe

    static mapping = {
//        id generator:'assigned', name:'name'
    }

    static constraints = {
        name nullable: false, unique: true
        brand nullable: false
        year nullable: false
        category nullable: false
        region nullable: true
        county nullable: true
        township nullable: true
        village nullable: true
        committee nullable: true
        unitLabel nullable: true
    }
}
