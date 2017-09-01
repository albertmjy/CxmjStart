package cxmjstart


import grails.rest.*
import grails.converters.*

class UsersController extends RestfulController {
    static responseFormats = ['json', 'xml']
    UsersController() {
        super(Users)
    }
}
