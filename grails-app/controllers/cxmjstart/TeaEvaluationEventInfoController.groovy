package cxmjstart


import grails.rest.*
import grails.converters.*

class TeaEvaluationEventInfoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TeaEvaluationEventInfoController() {
        super(TeaEvaluationEventInfo)
    }

    @Override
    def index(Integer max) {



        params.max = Math.min(max ?: 10, 100)

        def t = TeaEvaluationEventInfo.list()
//        println t[0].teaBasicInfo[0].name
//        println t[0].getDomainClass()
//        println t[0].teaBasicInfo.get(0)

//        for (i in t[0]){
//            println i
//        }

//        println t[0].teaBasicInfo[0]

//        t[0]["add"] = t[0].teaBasicInfo[0]
//        def m = t[0].teaBasicInfo[0]
//        t[1] = [:]
//        t[1].add = t[0].teaBasicInfo
//        t[0].teaBasicInfo[0] = t[1]


//        def res
//        TeaEvaluationEventInfo.withNewSession {session->
//            def query = session.createSQLQuery("select a.*, b.NAME as user, c.name as tea, d.EVALUATION_DATE as date from TEA_EVALUATION_INFO a " +
//                    "  inner join USERS  b on a.USER_ID =b.ID " +
//                    "    inner join TEA_BASIC_INFO c on a.TEA_BASIC_INFO_ID = c.ID" +
//                    "      inner join TEA_EVALUATION_EVENT_INFO d on a.TEA_EVALUATION_EVENT_INFO_ID = d.ID")
//            query.addEntity(TeaEvaluationRecord.class)
//
//            res = query.list();
//        }

        def res
        TeaEvaluationEventInfo.withNewSession {session->
            def query = session.createSQLQuery("SELECT a.*, c.name as tea_name, e.name as user_name FROM TEA_EVALUATION_EVENT_INFO a " +
                    "left join " +
                    "TEA_EVALUATION_EVENT_INFO_TEA_BASIC_INFO b on a.id=b.TEA_EVALUATION_EVENT_INFO_TEA_BASIC_INFO_ID " +
                    "left join " +
                    "TEA_BASIC_INFO c on b.TEA_BASIC_INFO_ID=c.ID " +
                    "left join " +
                    "TEA_EVALUATION_EVENT_INFO_USERS d on a.id=d.TEA_EVALUATION_EVENT_INFO_USERS_ID " +
                    "left join " +
                    "USERS e on d.USERS_ID =e.ID ")
//            query.addEntity(TeaEvaluationEventInfo.class)
//            query.addEntity(TeaBasicInfo.class)
//            query.addEntity(Users.class)
            query.addEntity(TeaEvaluationEventInfoPlus.class)

            res = query.list();
        }



//        def res, middle
//        TeaEvaluationEventInfo.withNewSession {session->
////            def query = session.createSQLQuery("select * from TEA_EVALUATION_EVENT_INFO a left join" +
////                    "  ( select b.*, c.NAME as tea_name FROM TEA_EVALUATION_EVENT_INFO_TEA_BASIC_INFO b " +
////                    "  left join " +
////                    "  TEA_BASIC_INFO c on b.TEA_BASIC_INFO_ID =c.ID ) d " +
////                    "on a.id=d.TEA_EVALUATION_EVENT_INFO_TEA_BASIC_INFO_ID ")
//
//
//            def preQuery = session.createSQLQuery("" +
//                    "select b.TEA_EVALUATION_EVENT_INFO_TEA_BASIC_INFO_ID , c.NAME as tea_name FROM TEA_EVALUATION_EVENT_INFO_TEA_BASIC_INFO b " +
//                    "  left join " +
//                    "TEA_BASIC_INFO c on b.TEA_BASIC_INFO_ID =c.ID ")
//            middle = preQuery.list()
//
//            def query = session.createSQLQuery("select * from TEA_EVALUATION_EVENT_INFO a left join" +
//                    "  ( select b.*, c.NAME FROM TEA_EVALUATION_EVENT_INFO_TEA_BASIC_INFO b " +
//                    "  left join " +
//                    "  TEA_BASIC_INFO c on b.TEA_BASIC_INFO_ID =c.ID ) d " +
//                    "on a.id=d.TEA_EVALUATION_EVENT_INFO_TEA_BASIC_INFO_ID ")
//
//            query.addEntity(TeaEvaluationEventInfoPlus.class)
//
//
//            res = query.list();
//        }


//        def res = TeaEvaluationEventInfo.list(fetch:[users:"eager"])


//        println middle

//        res[3] = [rst: middle]
//        res[2].teaName = middle[1][1]
        println res

//        LinkedHashMap<String, String> x = ["a":"anwser"]

        println t[0].teaBasicInfo[0].name
//        t[0].teaBasicInfo[0].name = "I'm fine!"
//        respond t
        JSON.use('deep'){
            render t as JSON
//            respond t,model: t
        }
//        respond listAllResources(params), model: [("${resourceName}Count".toString()): countResources()]
    }

}
