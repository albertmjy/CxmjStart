package cxmjstart


import grails.rest.*
import grails.converters.*
import groovy.json.JsonBuilder

class TeaEvaluationRecordController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TeaEvaluationRecordController() {
        super(TeaEvaluationRecord)
    }

    @Override
    def index(Integer max) {

        params.max = Math.min(max ?: 10, 100)

        def res
        TeaEvaluationRecord.withNewSession {session->
            def query = session.createSQLQuery("select a.*, b.NAME as user, c.name as tea, d.EVALUATION_DATE as date from TEA_EVALUATION_INFO a " +
                        "  inner join USERS  b on a.USER_ID =b.ID " +
                        "    inner join TEA_BASIC_INFO c on a.TEA_BASIC_INFO_ID = c.ID" +
                        "      inner join TEA_EVALUATION_EVENT_INFO d on a.TEA_EVALUATION_EVENT_INFO_ID = d.ID")
            query.addEntity(TeaEvaluationRecord.class)

            res = query.list();
        }

//        res[3] = new JsonBuilder(clients:res).toPrettyString()
//        res[4] = "haha"

//        res = [res, res]

        print res

        respond res, model: [("${resourceName}Count".toString()): countResources()]
//        respond listAllResources(params), model: [("${resourceName}Count".toString()): countResources()]
    }
}
