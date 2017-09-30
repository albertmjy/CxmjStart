package cxmjstart


import grails.rest.*
import grails.converters.*

//@Resource(uri = "/tBasic", readOnly = false, formats = ["json", "xml"])
class TeaBasicInfoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TeaBasicInfoController() {
        super(TeaBasicInfo)
    }



    /**
     * Override the default index, list the resource by searching conditions
     *
     * @param max The maximum
     * @return A list of resources
     */
    @Override
    def index(Integer max) {
        println "I;m in index method"
        params.max = Math.min(max ?: 10, 100)
        print "${resourceName}Count" + countResources()

        response.addIntHeader("total-count", countResources())  // works!
        response.setHeader("Link", "<https://api.github.com/user/repos?page=3&per_page=100>; rel=\"next\", <https://api.github.com/user/repos?page=50&per_page=100>; rel=\"last\"")


        def list
        try {
            list = listAllResources(params)
        } catch (e){
            e.printStackTrace()
        }


        JSON.use('deep'){
            render list as JSON
        }

//        respond list, model: ["test": 123]


//        if (params.search){
//            redirect(action:"search", params: this.params)
//
//            println "recirect search"
//        } else {
//            super.index(max)
//        }


//        params.max = Math.min(max ?: 10, 100)
//        def list = TeaBasicInfo.list(params)
//
//        JSON.use('deep'){
//            render list as JSON
//        }
    }

    def filter(Integer max){
        println "I;m in filter method"
        params.max = Math.min(max ?: 10, 100)
        print "${resourceName}Count" + countResources()

        response.addIntHeader("total-count", countResources())  // works!
        response.setHeader("Link", "<https://api.github.com/user/repos?page=3&per_page=100>; rel=\"next\", <https://api.github.com/user/repos?page=50&per_page=100>; rel=\"last\"")

        def filterJson = JSON.parse(params.params)

        def t = TeaBasicInfo.createCriteria()
        def list = t.list(params){
            filterJson.each {k, v ->
                eq(k, v)
            }
        }
        respond list, model: ["test": 123]


    }

    def search(Integer max){
        println "I 'm in search"
        println "max: ${max}"


        params.max = Math.min(max ?: 10, 100)

//        def filterMap = []
//        if (params.brand){
//            filterMap << [brand: params.brand]
//        }

        println params
        println params.keySet()


        def searchMap = params
        searchMap.remove("controller")
        searchMap.remove("max")
        println searchMap

//        respond listAllResources(params), model: [("${resourceName}Count".toString()): countResources()]


        if (searchMap.isEmpty()){
            respond TeaBasicInfo.findAll(), model: [("${resourceName}Count".toString()): countResources()]
        } else {
            respond TeaBasicInfo.findAllWhere(searchMap), model: [("${resourceName}Count".toString()): countResources()]
        }

//        Book.findAll(query, [max: 10, offset: 5])
//        Book.findAll("from Book as b where b.author in (:authors)",
//                [authors: ['Dan Brown', 'Jack London']])

//        def id = params.id

//        def rstList = TeaBasicInfo.findAllWhere(params)

//        def rstList = TeaBasicInfo.findAll {
//            id ==~ /.*.*/
//
//        }


        def m = [id:((params.id) as Long)]

//        def m = [id:null]


        def rstList = TeaBasicInfo.findAllWhere(m)



//        print request
//        print params
//        def p = params + [x:12, y:23, z:34]


//        respond TeaBasicInfo.findAll()
    }

}
