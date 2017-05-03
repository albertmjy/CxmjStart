package cxmjstart


import grails.rest.*
import grails.converters.*

class TeaInventoryInfoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TeaInventoryInfoController() {
        super(TeaInventoryInfo)
    }
}
