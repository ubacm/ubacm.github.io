import React from 'react'
import ReactDOM from 'react-dom'

class CheckInsList extends React.Component {
  constructor() {
    super()

    this.state = {
      data: [
        {
          "events": [
            "14HEO",
            "sj2sr",
            "sb63g",
            "nzwa4",
            "u4nea"
          ],
          "score": 20,
          "slack_id": "U6U3RPWEL",
          "username": "jmromero"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "sb63g"
          ],
          "score": 16,
          "slack_id": "U6U4VS3CG",
          "username": "aritrapa"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "sb63g",
            "13sbe"
          ],
          "score": 15,
          "slack_id": "U6VC012FK",
          "username": "ryandils"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "sb63g",
            "nzwa4",
            "w47b5",
            "u4nea",
            "hpgqq"
          ],
          "score": 14,
          "slack_id": "U8ZG1HRD0",
          "username": "dmrichwa"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "sb63g",
            "nzwa4",
            "w47b5",
            "u4nea",
            "x08v2"
          ],
          "score": 14,
          "slack_id": "U5D8QDK5K",
          "username": "sjames5"
        },
        {
          "events": [
            "u4nea",
            "x08v2",
            "13sbe"
          ],
          "score": 14,
          "slack_id": "U6VT8AQCX",
          "username": "afuchs2"
        },
        {
          "events": [],
          "score": 13,
          "slack_id": "U6Y66MJ1L",
          "username": "anrao3"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 12,
          "slack_id": "U6WKQRKT2",
          "username": "aosaliu"
        },
        {
          "events": [],
          "score": 12,
          "slack_id": "U6J9Q4685",
          "username": "baicheng"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 12,
          "slack_id": "U6A644MS9",
          "username": "khlin"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "sb63g",
            "nzwa4",
            "w47b5",
            "13sbe"
          ],
          "score": 12,
          "slack_id": "U5D7FS076",
          "username": "arthur"
        },
        {
          "events": [
            "nzwa4",
            "w47b5",
            "13sbe"
          ],
          "score": 12,
          "slack_id": "U66MQV0J2",
          "username": "dooskington"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "u4nea",
            "x08v2"
          ],
          "score": 11,
          "slack_id": "U6PTJBDNU",
          "username": "mastershefu"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 11,
          "slack_id": "U6VFEBDNU",
          "username": "taktukta"
        },
        {
          "events": [
            "14HEO",
            "w47b5"
          ],
          "score": 11,
          "slack_id": "U6JNJBTQ8",
          "username": "rpan"
        },
        {
          "events": [],
          "score": 10,
          "slack_id": "U5F682P35",
          "username": "phillip"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 10,
          "slack_id": "U6X9E8Y74",
          "username": "shawnmam"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "nzwa4",
            "7ielu",
            "tcjt4",
            "w47b5",
            "hpgqq"
          ],
          "score": 10,
          "slack_id": "U6Q7T2ZAT",
          "username": "sirhype"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "nzwa4",
            "w47b5",
            "13sbe"
          ],
          "score": 10,
          "slack_id": "U6UNQ55LK",
          "username": "pagottes"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "sb63g",
            "nzwa4",
            "w47b5"
          ],
          "score": 10,
          "slack_id": "U9A8B497B",
          "username": "dhuang34"
        },
        {
          "events": [
            "14HEO",
            "nzwa4",
            "w47b5",
            "u4nea",
            "x08v2"
          ],
          "score": 10,
          "slack_id": "U937CQUKW",
          "username": "dvdonato"
        },
        {
          "events": [
            "14HEO",
            "nzwa4",
            "w47b5"
          ],
          "score": 10,
          "slack_id": "U74EMR5UZ",
          "username": "ericbusc"
        },
        {
          "events": [
            "sj2sr",
            "nzwa4",
            "u4nea",
            "x08v2",
            "13sbe"
          ],
          "score": 10,
          "slack_id": "U92DJ8NL9",
          "username": "edwinhun"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 9,
          "slack_id": "U6J6T803D",
          "username": "calvinji"
        },
        {
          "events": [
            "sj2sr",
            "nzwa4"
          ],
          "score": 9,
          "slack_id": "U6YC42JDD",
          "username": "owentorr"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 9,
          "slack_id": "U75BJ0N95",
          "username": "jackyeng"
        },
        {
          "events": [
            "14HEO",
            "hpgqq"
          ],
          "score": 9,
          "slack_id": "U6X8RD4BU",
          "username": "heeborum"
        },
        {
          "events": [
            "sj2sr",
            "sb63g",
            "nzwa4",
            "w47b5"
          ],
          "score": 8,
          "slack_id": "U70B1RZKR",
          "username": "liam"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 8,
          "slack_id": "U75R44GQ1",
          "username": "jwong48"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 8,
          "slack_id": "U78KSD1KN",
          "username": "sultanol"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 8,
          "slack_id": "U6YC53E4X",
          "username": "dbosah"
        },
        {
          "events": [
            "14HEO",
            "w47b5",
            "u4nea",
            "x08v2"
          ],
          "score": 8,
          "slack_id": "U94CSDKN1",
          "username": "wfnichol"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 7,
          "slack_id": "U0YU7P3DZ",
          "username": "dstarner"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 7,
          "slack_id": "U6Z4GRLMN",
          "username": "ewalk"
        },
        {
          "events": [
            "sb63g"
          ],
          "score": 7,
          "slack_id": "U6XB6E8BE",
          "username": "halaalfa"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 7,
          "slack_id": "U71BFH1BM",
          "username": "piwaszko"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 7,
          "slack_id": "U6Q25E3NK",
          "username": "wendyshi"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 7,
          "slack_id": "U6UAMN2Q0",
          "username": "most_juanted"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "nzwa4"
          ],
          "score": 7,
          "slack_id": "U7V8X0MSR",
          "username": "eweinman"
        },
        {
          "events": [
            "14HEO",
            "w47b5"
          ],
          "score": 7,
          "slack_id": "U6WKKPJ00",
          "username": "hansbas"
        },
        {
          "events": [
            "sb63g",
            "w47b5"
          ],
          "score": 7,
          "slack_id": "U6B1QE8NR",
          "username": "ssmarcha"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 6,
          "slack_id": "U5WCNDEJH",
          "username": "anandimous"
        },
        {
          "events": [],
          "score": 6,
          "slack_id": "U6X76DFD1",
          "username": "anarghya"
        },
        {
          "events": [],
          "score": 6,
          "slack_id": "U6X77M49Z",
          "username": "hanabash"
        },
        {
          "events": [
            "hpgqq"
          ],
          "score": 6,
          "slack_id": "U6J4PST2Q",
          "username": "jasleena"
        },
        {
          "events": [],
          "score": 6,
          "slack_id": "U6WKPNN2U",
          "username": "mrproy"
        },
        {
          "events": [],
          "score": 6,
          "slack_id": "U6YSQNE1Z",
          "username": "rdonalds"
        },
        {
          "events": [],
          "score": 6,
          "slack_id": "U6XDF5LLV",
          "username": "ylin69"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "u4nea"
          ],
          "score": 6,
          "slack_id": "U59VCSEV7",
          "username": "angus"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "sb63g"
          ],
          "score": 6,
          "slack_id": "U94CU6013",
          "username": "amendezm"
        },
        {
          "events": [
            "14HEO",
            "sj2sr",
            "nzwa4"
          ],
          "score": 6,
          "slack_id": "U97TX8H6F",
          "username": "abhijitr"
        },
        {
          "events": [
            "sj2sr",
            "sb63g",
            "w47b5"
          ],
          "score": 6,
          "slack_id": "U999W55V3",
          "username": "kaiyuede"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 6,
          "slack_id": "U6Y7NTAK1",
          "username": "sriniketh"
        },
        {
          "events": [
            "14HEO",
            "u4nea",
            "hpgqq"
          ],
          "score": 6,
          "slack_id": "U951MKWTX",
          "username": "maksymso"
        },
        {
          "events": [
            "14HEO",
            "hpgqq"
          ],
          "score": 6,
          "slack_id": "U6ZU14W8L",
          "username": "doris"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 5,
          "slack_id": "U6C7JRV6G",
          "username": "dlaskama"
        },
        {
          "events": [],
          "score": 5,
          "slack_id": "U6UD7R8TB",
          "username": "jaclemon"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 5,
          "slack_id": "U6X6QBDK5",
          "username": "jasjeeva"
        },
        {
          "events": [],
          "score": 5,
          "slack_id": "U6XB55LMS",
          "username": "kevintop"
        },
        {
          "events": [],
          "score": 5,
          "slack_id": "U6J0H6WCS",
          "username": "wilsonaar"
        },
        {
          "events": [],
          "score": 5,
          "slack_id": "U6XDDR3PX",
          "username": "yingyinl"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 5,
          "slack_id": "U6UD66J9F",
          "username": "kmenon"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 5,
          "slack_id": "U6MBK00G1",
          "username": "ishmam_nur"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 4,
          "slack_id": "U6Z7Z7U5Q",
          "username": "caseydol"
        },
        {
          "events": [],
          "score": 4,
          "slack_id": "U5FQYDZRS",
          "username": "chin"
        },
        {
          "events": [],
          "score": 4,
          "slack_id": "U70M0KV98",
          "username": "gibbsy"
        },
        {
          "events": [],
          "score": 4,
          "slack_id": "U5ENXPVLZ",
          "username": "jherc127"
        },
        {
          "events": [
            "hpgqq"
          ],
          "score": 4,
          "slack_id": "U74TP3WSX",
          "username": "jpmiller"
        },
        {
          "events": [],
          "score": 4,
          "slack_id": "U6YBAUSVC",
          "username": "kokhaoyo"
        },
        {
          "events": [],
          "score": 4,
          "slack_id": "U6WL18A8G",
          "username": "lawreenl"
        },
        {
          "events": [],
          "score": 4,
          "slack_id": "U6KJPMCK0",
          "username": "macdonalds"
        },
        {
          "events": [],
          "score": 4,
          "slack_id": "U6W3AC7K9",
          "username": "mmorgent"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 4,
          "slack_id": "U6VJ56M70",
          "username": "pat_jones"
        },
        {
          "events": [],
          "score": 4,
          "slack_id": "U6XFQPM0W",
          "username": "thharian"
        },
        {
          "events": [],
          "score": 4,
          "slack_id": "U6A0T7B8W",
          "username": "tryhard"
        },
        {
          "events": [],
          "score": 4,
          "slack_id": "U6LDVKM1N",
          "username": "zwagner"
        },
        {
          "events": [
            "14HEO",
            "sj2sr"
          ],
          "score": 4,
          "slack_id": "U93KUNFH6",
          "username": "ankitsig"
        },
        {
          "events": [
            "sj2sr",
            "sb63g"
          ],
          "score": 4,
          "slack_id": "U934CJ1TN",
          "username": "tjpeyton"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 4,
          "slack_id": "U94CTN9HT",
          "username": "isabelal"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 4,
          "slack_id": "U9AM7BATD",
          "username": "jinyitao"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 4,
          "slack_id": "U9ATME0Q5",
          "username": "derekrod"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 4,
          "slack_id": "U97AFP6MT",
          "username": "sharma88"
        },
        {
          "events": [
            "14HEO",
            "nzwa4"
          ],
          "score": 4,
          "slack_id": "U5E01ACK0",
          "username": "wguo24"
        },
        {
          "events": [
            "w47b5",
            "u4nea"
          ],
          "score": 4,
          "slack_id": "U7MN0SW13",
          "username": "arnabdas"
        },
        {
          "events": [
            "sb63g",
            "u4nea"
          ],
          "score": 4,
          "slack_id": "U949A9SRY",
          "username": "vbaziuk"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 3,
          "slack_id": "U65ULCHCL",
          "username": "aaron"
        },
        {
          "events": [
            "hpgqq"
          ],
          "score": 3,
          "slack_id": "U6Y5VQAMD",
          "username": "acintron"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U75SH66EA",
          "username": "agolden2"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U6BHD9Y4R",
          "username": "baknight"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 3,
          "slack_id": "U711ZUTPZ",
          "username": "connorm"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U6XDE9093",
          "username": "garyyeun"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U71C0GKHB",
          "username": "iansong"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U6TFVD6LR",
          "username": "ksrayava"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U6UNJUAAU",
          "username": "kwang32"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 3,
          "slack_id": "U6MDL54TE",
          "username": "likhith"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U6JTTEJ6A",
          "username": "liua2021"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U6ZUPEDJ5",
          "username": "mthafeez"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U6X3WFD6W",
          "username": "peterpin"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U6U9J552N",
          "username": "toyosi"
        },
        {
          "events": [],
          "score": 3,
          "slack_id": "U6UK445TM",
          "username": "vitogalv"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6XAUS0BC",
          "username": "aamelunia"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6XB5DGNQ",
          "username": "adamkantor"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U73S607CP",
          "username": "alexperr"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6WKR59BJ",
          "username": "arturo"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6X6DLX8B",
          "username": "awoloszy"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6W21UXD5",
          "username": "chenran"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6TFVV8V7",
          "username": "chimaobi"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U7MRW2X4K",
          "username": "degoldbe"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6A673UPM",
          "username": "evanchen"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6WQ3K82V",
          "username": "ewong23"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U5QTZSE10",
          "username": "frank"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U5W92RYGY",
          "username": "gamalamin"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U795MLG3F",
          "username": "gjbunyea"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6WKQTZHN",
          "username": "haemanthi"
        },
        {
          "events": [
            "sb63g"
          ],
          "score": 2,
          "slack_id": "U94CTA1T7",
          "username": "edwinmed"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 2,
          "slack_id": "U74ANG4SU",
          "username": "alanpink"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 2,
          "slack_id": "U95525JCE",
          "username": "massimoz"
        },
        {
          "events": [
            "w47b5"
          ],
          "score": 2,
          "slack_id": "U9808AYSG",
          "username": "jbochnik"
        },
        {
          "events": [
            "hpgqq"
          ],
          "score": 2,
          "slack_id": "U9RS8HWAK",
          "username": "cprowesl"
        },
        {
          "events": [
            "hpgqq"
          ],
          "score": 2,
          "slack_id": "U5D7ES2TE",
          "username": "rshanule"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U71MZCD71",
          "username": "hannahwl"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U71A6H2UU",
          "username": "hennings"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U69E2PF4H",
          "username": "ibuc37"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6US1QQ4V",
          "username": "iwanders"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U71VAU5R6",
          "username": "jackhale"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U662UB8A1",
          "username": "jaynarendrashah"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6UP30H4J",
          "username": "jglickma"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6XB69SP6",
          "username": "jjwidric"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6YD7A9AT",
          "username": "jmorrow2"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6YBKNZ8X",
          "username": "jmsiegel"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U76F88MEK",
          "username": "knjames"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6VAQMZS4",
          "username": "kyleskom"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U7518PJ67",
          "username": "lieselva"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6Y66D65C",
          "username": "mertatki"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6XAQL161",
          "username": "minseoki"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6UPA46UV",
          "username": "mjkirshy"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6WP6HGJD",
          "username": "montanaq"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6HAMU57S",
          "username": "nbarrios1337"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6X9DSQLA",
          "username": "ncumbo"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6UMST5GS",
          "username": "royrishiroy"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6JUA4M53",
          "username": "rubix"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6W1AN6LA",
          "username": "samraatg"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6WP7ETMX",
          "username": "shreya"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6WP6V6UR",
          "username": "tmsherwo"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6B3TAHTQ",
          "username": "tonyni"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U7B6Q2RFG",
          "username": "vffaltis"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U75TH8A4B",
          "username": "vsingh24"
        },
        {
          "events": [],
          "score": 2,
          "slack_id": "U6J0R9SD8",
          "username": "wp26"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 2,
          "slack_id": "U9A7KAJM7",
          "username": "sravi3"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 2,
          "slack_id": "U89MTPCNA",
          "username": "mcstaffo"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 2,
          "slack_id": "U9AP722R2",
          "username": "anushrav"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 2,
          "slack_id": "U8ZUND9HA",
          "username": "wonytong"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 2,
          "slack_id": "U9BS8BRJT",
          "username": "kennyzha"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 2,
          "slack_id": "U75SL287Q",
          "username": "floreben"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 2,
          "slack_id": "U77NQHHRR",
          "username": "rikhan"
        },
        {
          "events": [
            "14HEO"
          ],
          "score": 2,
          "slack_id": "U9AUQSMEZ",
          "username": "ankitner"
        },
        {
          "events": [
            "sj2sr"
          ],
          "score": 2,
          "slack_id": "U99FZSLN7",
          "username": "dcfedori"
        },
        {
          "events": [
            "sj2sr"
          ],
          "score": 2,
          "slack_id": "U8ZHYCQ04",
          "username": "awstone"
        },
        {
          "events": [
            "sj2sr"
          ],
          "score": 2,
          "slack_id": "U725D1B7U",
          "username": "asifhasa"
        },
        {
          "events": [
            "sb63g"
          ],
          "score": 2,
          "slack_id": "U93NJRP17",
          "username": "vjvitale"
        },
        {
          "events": [
            "sb63g"
          ],
          "score": 2,
          "slack_id": "U8W6C6P9C",
          "username": "jmekjean"
        },
        {
          "events": [
            "sb63g"
          ],
          "score": 2,
          "slack_id": "U9ASCSPQQ",
          "username": "caractac"
        },
        {
          "events": [
            "sb63g"
          ],
          "score": 2,
          "slack_id": "U9B00CS2D",
          "username": "eanweise"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 2,
          "slack_id": "U7YF9G6JG",
          "username": "bmmcmaho"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 2,
          "slack_id": "U9EBZ0EAW",
          "username": "coreyalm"
        },
        {
          "events": [
            "nzwa4"
          ],
          "score": 2,
          "slack_id": "U9EFHRX1T",
          "username": "dkim39"
        },
        {
          "events": [
            "w47b5"
          ],
          "score": 2,
          "slack_id": "U94CSD7KP",
          "username": "btmccann"
        },
        {
          "events": [
            "w47b5"
          ],
          "score": 2,
          "slack_id": "U93FEGAMS",
          "username": "noahwutz"
        },
        {
          "events": [
            "u4nea"
          ],
          "score": 2,
          "slack_id": "U90LF0XK7",
          "username": "fabianra"
        },
        {
          "events": [
            "u4nea"
          ],
          "score": 2,
          "slack_id": "U5G4M56CF",
          "username": "airbusvsboeing"
        },
        {
          "events": [
            "hpgqq"
          ],
          "score": 2,
          "slack_id": "U7HQ91E2U",
          "username": "ethansac"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U7WR6BRT8",
          "username": "ahunt"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6HRPCB7A",
          "username": "airloaf"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6X7764CB",
          "username": "ameyer"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6CCZ7LMA",
          "username": "arogers7"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6Y671WRL",
          "username": "asoni"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6JEWF85R",
          "username": "bhasin"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U70EG0CRM",
          "username": "bhaskar4"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6X6XAN6P",
          "username": "bread_baker"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U75A9JJU9",
          "username": "brettkol"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6WMDEQ1X",
          "username": "cdhutchi"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6U3VFK9N",
          "username": "chaoping"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6XFD5NUS",
          "username": "chriskuczko"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6XA55DLL",
          "username": "claire1107liu"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6V0B8TBN",
          "username": "clmonnon"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U78KLB9NG",
          "username": "cngolden"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6WP7JC8Z",
          "username": "corychai"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6TV4GMTM",
          "username": "dakota0064"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6T6U1MFV",
          "username": "drake"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U5FTYQ2KV",
          "username": "dwdelacr"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U7JES4Q84",
          "username": "eithneam"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6WNTF33N",
          "username": "grant24"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6YC47QFR",
          "username": "hanoody"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6X76J9FD",
          "username": "hhuang42"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U69FYRERX",
          "username": "himanivi"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U724UJK8U",
          "username": "hsokhey"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6JDENMAP",
          "username": "j_grogan4"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6WGHHXNU",
          "username": "jasonniu"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6XDES33P",
          "username": "jaylligu"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6YC10GQ7",
          "username": "jhhunter"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U71DNPR2N",
          "username": "jjklein2"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6YC4GFEK",
          "username": "jpaxon"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6VKRD13Q",
          "username": "jshi8"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6YC4F1KR",
          "username": "juhmall"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U660P7PUM",
          "username": "klaschinger"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U74Q50J0J",
          "username": "krobledo"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U70MRCL8Y",
          "username": "lepetic"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6XN41MBQ",
          "username": "levyshi"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6YC45ZPH",
          "username": "lisakanb"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6X9DSL02",
          "username": "ltarnowb"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U750ENL6N",
          "username": "mahiaash"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6U4GDBLY",
          "username": "mdeng5"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6L2Y2MM4",
          "username": "mjwattle"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U74R0U7UL",
          "username": "mmaruf"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6X9ECH9Q",
          "username": "morshedu"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U7C1GH2B0",
          "username": "msillah"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6WGWU3TJ",
          "username": "mta5"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U89TLFYUX",
          "username": "mugdhami"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6FLDNUAG",
          "username": "nikkin"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6GN2681J",
          "username": "nkhalid"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6XDE7LVB",
          "username": "nppasqua"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U89KJTK1U",
          "username": "orkosinh"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U88PASAD8",
          "username": "pasumart"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6X7930N7",
          "username": "pjjones"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6URSHP7C",
          "username": "pururval"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U7AFDHR32",
          "username": "rajeevgu"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6Y5Z5XU6",
          "username": "rapatel4"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6WKQHQGG",
          "username": "raselahm"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6X9VETU2",
          "username": "rhughes3"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U7633JSS3",
          "username": "rwang29"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U76D5H3C6",
          "username": "sanchitb"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U752WA5FG",
          "username": "sdileto"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6YC3CH1V",
          "username": "sfung3"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6X76RCGK",
          "username": "shlutz"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6Z49D4JX",
          "username": "shrishty"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U72ADJU4E",
          "username": "sjdeck"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6ZQNNEV8",
          "username": "sravanika"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U5KJJ2E3F",
          "username": "syang"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6UUQHQ1J",
          "username": "urjitha"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U88THR1J9",
          "username": "varunshi"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6WJDKK7B",
          "username": "walenore"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6VK7U6P8",
          "username": "weijinzh"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U7D2V4H09",
          "username": "wenjunsh"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U6WBAU2BX",
          "username": "zackbowe"
        },
        {
          "events": [],
          "score": 1,
          "slack_id": "U7BGTBZ60",
          "username": "zsmoore"
        }
      ],
    }

    this.fetchScores = this.fetchScores.bind(this)
  }

  componentDidMount() {
    // this.fetchScores()
  }

  fetchScores() {
    fetch('https://chicken-ubacm.herokuapp.com/users/scores')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        data: json
      })
    })
    .catch(err => {
      this.setState({
        data: null,
      })
    })
  }

  render() {
    if (!this.state.data) {
      return <h3>Loading...</h3>
    }

    const memberEntries = this.state.data.map(member => (
      <div className="member_entry" key={member.slack_id}>
        <div className="username">{member.username}</div>
        <div className="score">{member.score}</div>
      </div>
    ))

    return (
      <div className="component__checkins_list">
        <div className="header">
          <div className="username">Username</div>
          <div className="score">Marks</div>
        </div>
        <div className="member_entries">
          {memberEntries}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<CheckInsList />, document.getElementById('app'))
