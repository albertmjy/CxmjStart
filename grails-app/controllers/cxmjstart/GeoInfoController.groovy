package cxmjstart


import grails.rest.*
import grails.converters.*

class GeoInfoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    GeoInfoController() {
        super(GeoInfo)
    }
}
