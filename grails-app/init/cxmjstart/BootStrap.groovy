package cxmjstart

class BootStrap {

    def init = { servletContext ->
        Calendar cal = Calendar.getInstance()
        cal.clearTime()
        cal.set(Calendar.YEAR, 2014)
        cal.getTime()


        def u1 = new UnitLabel(unit: "饼", weightInGram: 357).save()
        def u2 = new UnitLabel(unit: "pack", weightInGram: 357).save()
        def u3 = new UnitLabel(unit: "gram", weightInGram: 1).save()

        // new Date(year: 2014-1900)
        def t1 = new TeaBasicInfo(name: "2014年古玉正气唐", brand: "古玉", year: "2014", category: "生普", region: "临沧", unitLabel: u1).save()
        def t2 = new TeaBasicInfo(name: "2014陈升号霸王青饼", brand: "陈升号", year: "2017", category: "生普", region: "拼配", unitLabel: u1).save()
        def t3 = new TeaBasicInfo(name: "2014益木堂景迈", brand: "益木堂", year: "2010", category: "生普", region: "普洱", county:"2", village: "milk", committee: "B啊", unitLabel: u1).save()
        def t4 = new TeaBasicInfo(name: "2002年临沧茶厂保山茶砖", brand: "临沧茶厂", year: "2002", category: "生普", region: "保山", county:"", village: "", committee: "", unitLabel: u1).save()
        def t5 = new TeaBasicInfo(name: "2014年同兴号刮风寨", brand: "同兴号", year: "2014", category: "生普", region: "西双版纳", county:"勐腊县", village: "刮风寨自然村", committee: "麻黑村委会", unitLabel: u1).save()
        def t6 = new TeaBasicInfo(name: "2015年同兴号刮风寨", brand: "同兴号", year: "2015", category: "生普", region: "西双版纳", county:"勐腊县", village: "刮风寨自然村", committee: "麻黑村委会", unitLabel: u1).save()
        def t7 = new TeaBasicInfo(name: "2016年同兴号刮风寨", brand: "同兴号", year: "2016", category: "生普", region: "西双版纳", county:"勐腊县", village: "刮风寨自然村", committee: "麻黑村委会", unitLabel: u1).save()



        def user1 = new Users(name: "Ben", level: "master", teaAge: 10, mobile: 13500001111, gender: "man", role: "customer").save()
        def user2 = new Users(name: "William", level: "beginner", teaAge: 5, mobile: 13800004444, gender: "lady", role: "customer").save()

        def event = new TeaEvaluationEventInfo(evaluationDate: cal.getTime(), temperature: "20", humidity: "40", hostName: "Albert", intro: "this is an event",
                teaBasicInfo: [t1, t2, t3], users: [user1, user2]).save()

        new TeaEvaluationInfo(teaBasicInfo: t1, colorRate: 9.5, smellRate: 8, tasteRate: 8, feelingRate: 7, potentialRate: 8, overallRate: 7.5, comments: "good good",
                user: user1, teaEvaluationEventInfo: event).save()
        new TeaEvaluationInfo(teaBasicInfo: t1, colorRate: 6.5, smellRate: 4, tasteRate: 5, feelingRate: 6, potentialRate: 9, overallRate: 8.5, comments: "Fantastic!",
                user: user2, teaEvaluationEventInfo: event, mob: user2.name).save()
    }
    def destroy = {
    }
}
