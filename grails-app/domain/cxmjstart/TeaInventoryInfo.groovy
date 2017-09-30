package cxmjstart

class TeaInventoryInfo {

//    TeaBasicInfo teaBasicInfo
    static belongsTo = [teaBasicInfo: TeaBasicInfo]  // foreign key

    String inOrOut
    Integer quantity
//    UnitLabel unitLabel

    Date requestDate
    Date effectiveData

    Double price
    String owner
    String comments

    static constraints = {

        inOrOut inList: ["in", "out"]
        effectiveData nullable: true
        price nullable: true
        comments nullable: true

    }
}
