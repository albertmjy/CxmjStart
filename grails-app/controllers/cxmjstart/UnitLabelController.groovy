package cxmjstart


import grails.rest.*
import grails.converters.*

class UnitLabelController extends RestfulController {
    static responseFormats = ['json', 'xml']
    UnitLabelController() {
        super(UnitLabel)
    }
}
