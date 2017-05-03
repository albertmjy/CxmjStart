package cxmjstart


import grails.rest.*
import grails.converters.*

class TeaEvaluationInfoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TeaEvaluationInfoController() {
        super(TeaEvaluationInfo)
    }
}
