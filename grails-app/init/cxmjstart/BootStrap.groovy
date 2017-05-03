package cxmjstart

class BootStrap {

    def init = { servletContext ->
        Calendar cal = Calendar.getInstance()
        cal.set(Calendar.YEAR, 2014)
        cal.getTime()

        new TeaBasicInfo(name: "2014年古玉正气唐", brand: "古玉", year: new Date(year: 2014-1900), category: "生普", region: "临沧").save()
        new TeaBasicInfo(name: "2014陈升号霸王青饼", brand: "陈升号", year: cal.getTime(), category: "生普", region: "拼配").save()
        new TeaBasicInfo(name: "2014益木堂景迈", brand: "益木堂", year: new Date(), category: "生普", region: "普洱", county:"2", village: "milk", committee: "B啊").save()

        new UnitLabel(unit: "pack", weightInGram: 357).save()
        new UnitLabel(unit: "gram", weightInGram: 1).save()
    }
    def destroy = {
    }
}
