package cxmjstart

class TeaEvaluationEventInfo {

    Date evaluationDate
    String temperature
    String humidity
    String hostName
    String intro

    List<TeaBasicInfo> teaBasicInfo
    List<Users> users

    static constraints = {
        hostName nullable: true
    }

    static hasMany = [teaBasicInfo: TeaBasicInfo, users: Users]
}
