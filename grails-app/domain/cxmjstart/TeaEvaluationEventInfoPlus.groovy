package cxmjstart

class TeaEvaluationEventInfoPlus{

    Date evaluationDate
    String temperature
    String humidity
    String hostName
    String intro

//    List<String> teaName
//    List<String> userName
    String teaName
//    String userName


    static hasMany = [teaName:String]

    static constraints = {
//        teaName lazy: false
        teaName nullable: true, lazy:false
    }

}
