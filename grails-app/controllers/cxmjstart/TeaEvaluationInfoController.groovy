package cxmjstart


import grails.rest.*
import grails.converters.*

import cxmjstart.TeaEvaluationEventInfo

class TeaEvaluationInfoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TeaEvaluationInfoController() {
        super(TeaEvaluationInfo)
    }

    @Override
    def index(Integer max){
        params.max = Math.min(max ?: 10, 100)


//        List list1 = TeaEvaluationInfo.list()
//        List list2 = TeaEvaluationEventInfo.list()

        def result = TeaEvaluationInfo.list() //+ list2

//        redirect( )


        def r
        TeaEvaluationInfo.withNewSession {session ->
            def query = session.createSQLQuery("select * from TEA_EVALUATION_EVENT_INFO left join TEA_EVALUATION_INFO")
            query.addEntity(TeaEvaluationEventInfo.class)
            query.addEntity(TeaEvaluationInfo.class)

//            def query = session.createSQLQuery("select * from TEA_EVALUATION_INFO a, TEA_EVALUATION_EVENT_INFO b where a.TEA_EVALUATION_EVENT_INFO_ID=b.ID")
//            query.addEntity("evaluation", TeaEvaluationInfo.class)
//            .addJoin(TeaEvaluationEventInfo.class)

//            def query = session.createQuery("select t from TeaEvaluationEventInfo t")
            r = query.list()

        }


        println r

        def totalResult = [result, r]

//        println result
//        println r
//
//        println totalResult

        def t = result + r
//        println t[1]

//        println ""
//        for (k in t){
//            println k
//            println t
//        }

        println totalResult

        println result



//        redirect(controller: "teaEvaluationEventInfo", action: "/")
//        chain(controller: "teaEvaluationEventInfo", action: "/", params: params, model:list1)
//        forward(controllerClass: TeaEvaluationEventInfo, actionName: "index")



//        def result = TeaEvaluationInfo.executeQuery(
//                "SELECT a FROM TeaEvaluationInfo as a" +
//                        "left join " +
//                        "TeaEvaluationEventInfo as b")

//        def result = TeaEvaluationInfo.executeQuery("select a from TeaEvaluationInfo a, TeaEvaluationEventInfo b")
//        def result = TeaEvaluationInfo.list(fetch: [teaEvaluationEventInfo: 'join'])

        respond result
    }

}
