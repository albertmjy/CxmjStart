package cxmjstart

class GeoInfo {

    String city
//    String county
//    String township
//    String committee
//    String village
    String ss
//    List<String> xs = ["gagas", "gfadaf", "gadga"]
    int age
    String year


    static constraints = {
        ss inList: ["aa", "bb", "gadga"], nullable: false
        city nullable: false
        age min: 18, max: 40
        year range: 1900..2000

    }
}
