package cxmjstart

class UnitLabel {

    String unit
    Double weightInGram

    static constraints = {
        unit nullable: false
        weightInGram nullable: false
    }

}
