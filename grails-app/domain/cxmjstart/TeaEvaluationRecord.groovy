package cxmjstart

class TeaEvaluationRecord {

    Double colorRate
    Double smellRate
    Double tasteRate
    Double feelingRate
    Double potentialRate
    Double overallRate
    String comments

    String user
    Date date
    String tea

    static constraints = {
        user nullable: true
        date nullable: true
        tea nullable: true
    }
}
