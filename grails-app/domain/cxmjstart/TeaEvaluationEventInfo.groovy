package cxmjstart

class TeaEvaluationEventInfo {

    Date evaluationDate
    String temperature
    String humidity
    String hostName
    String intro

    List<TeaBasicInfo> teaBasicInfo
    List<Users> users
    List<TeaEvaluationInfo> teaEvaluationInfo

    // additional
//    List<String> teaNames
//    List<String> userNames


    static constraints = {
        hostName nullable: true
    }

    static hasMany = [teaBasicInfo: TeaBasicInfo, users: Users, teaEvaluationInfo: TeaEvaluationInfo]

//    static fetchMode = [users:"eager"]

    static mapping = {
        teaBasicInfo lazy: false
        users lazy: false
        teaEvaluationInfo lazy: false
//        teaEvaluationInfo lazy: false
//        teaEvaluationInfo fetch: "join"

//        teaNames joinTable: [name:"evaTea", key: "id", column: "intro"]
//        userNames joinTable: [key: "id", column: "intro"]
    }
}
