package cxmjstart

class TeaInventoryInfo {

//    TeaBasicInfo teaBasicInfo
    static belongsTo = [teaBasicInfo: TeaBasicInfo]  // foreign key

    String inOrOut
    Integer quantity
    UnitLabel unitLabel

    Date requestDate
    Date effectiveData

    Double price
    String owner

    static constraints = {
        inOrOut nullable: false
        quantity nullable: false
        unitLabel nullable: false
        requestDate nullable: false
        effectiveData nullable: true
        price nullable: true
        owner nullable: false
    }
}
