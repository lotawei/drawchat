/**
 * Created by mac on 2017/10/18.
 */

function GetDays(Year,Month)
{
    d = new Date(Year,Month,0);
    var Days = d.getDate();

    return  Days;
}


function PrefixInteger(num, length) {
    return (Array(length).join('0') + num).slice(-length);
}


function isNull(object){
    if(object == null || typeof object == "undefined"){
        return true;
    }
    return false;
};
function getWeek(dateString){
    var date;
    if(isNull(dateString)){
        date = new Date();
    }else{
        var dateArray = dateString.split("-");
        date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
    }
    //var weeks = new Array("日", "一", "二", "三", "四", "五", "六");
    //return "星期" + weeks[date.getDay()];
    return "星期" + "日一二三四五六".charAt(date.getDay());
};


function getDays(day1, day2) {
    // 获取入参字符串形式日期的Date型日期
    var d1 = day1.getDate();
    var d2 = day2.getDate();
    // 定义一天的毫秒数
    var dayMilliSeconds  = 1000*60*60*24;
    // 获取输入日期的毫秒数
    var d1Ms = d1.getTime();
    var d2Ms = d2.getTime();

    // 定义返回值
    var ret = [];

    // 对日期毫秒数进行循环比较，直到d1Ms 大于等于 d2Ms 时退出循环
    // 每次循环结束，给d1Ms 增加一天
    for (d1Ms; d1Ms <= d2Ms; d1Ms += dayMilliSeconds) {

        // 如果ret为空，则无需添加","作为分隔符
        if (!ret) {
            // 将给的毫秒数转换为Date日期
            var day = new Date(d1Ms).format("yyyy-MM-dd");

            // 获取其年月日形式的字符串
            ret.push(day.getYMD());
        } else {

            // 否则，给ret的每个字符日期间添加","作为分隔符
            var day = new Date(d1Ms);


            ret.push(day.getYMD());

        }
    }

    return   ret;
}

// 给Date对象添加getYMD方法，获取字符串形式的年月日
Date.prototype.getYMD = function(){
    var retDate = this.getFullYear() + "-";  // 获取年份。
    retDate += this.getMonth() + 1 + "-";    // 获取月份。
    retDate += this.getDate();               // 获取日。
    return retDate;                          // 返回日期。
}

// 给String对象添加getDate方法，使字符串形式的日期返回为Date型的日期
String.prototype.getDate = function(){
    var strArr = this.split('-');
    var date = new Date(strArr[0], strArr[1] - 1, strArr[2]);
    return date;
}
function funcChina(str) {
    if (/.*[\u4e00-\u9fa5]+.*/.test(str)) {
        return   true
    } else {
       return false
    }
}

function indexlocdata() {
    var   data = {"code":200,"msg":"请求成功","data":[{"date":"2017-10-01","orderCount":6622,"peopleCount":13276},{"date":"2017-10-02","orderCount":14199,"peopleCount":29906},{"date":"2017-10-03","orderCount":16550,"peopleCount":35715},{"date":"2017-10-04","orderCount":17986,"peopleCount":39017},{"date":"2017-10-05","orderCount":12134,"peopleCount":26073},{"date":"2017-10-06","orderCount":8122,"peopleCount":17287},{"date":"2017-10-07","orderCount":4411,"peopleCount":8535},{"date":"2017-10-08","orderCount":2134,"peopleCount":4074},{"date":"2017-10-09","orderCount":1220,"peopleCount":2195},{"date":"2017-10-10","orderCount":336,"peopleCount":450},{"date":"2017-10-11","orderCount":46,"peopleCount":72},{"date":"2017-10-12","orderCount":5,"peopleCount":7},{"date":"2017-10-13","orderCount":10,"peopleCount":24},{"date":"2017-10-14","orderCount":6,"peopleCount":14},{"date":"2017-10-15","orderCount":1,"peopleCount":1},{"date":"2017-10-16","orderCount":3,"peopleCount":7},{"date":"2017-10-17","orderCount":4,"peopleCount":6},{"date":"2017-10-18","orderCount":3,"peopleCount":6},{"date":"2017-10-19","orderCount":2,"peopleCount":5},{"date":"2017-10-20","orderCount":7,"peopleCount":27},{"date":"2017-10-21","orderCount":3,"peopleCount":6},{"date":"2017-10-22","orderCount":24,"peopleCount":56},{"date":"2017-10-23","orderCount":4,"peopleCount":8},{"date":"2017-10-25","orderCount":2,"peopleCount":8},{"date":"2017-10-26","orderCount":2,"peopleCount":2},{"date":"2017-10-28","orderCount":5,"peopleCount":10}]};

    return   data;

}
function totollocadata() {
    return {"code":200,"msg":"请求成功","data":[{"date":"2017-01-01","orderCount":3270,"peopleCount":6614},{"date":"2017-01-02","orderCount":3109,"peopleCount":5725},{"date":"2017-01-03","orderCount":1883,"peopleCount":3490},{"date":"2017-01-04","orderCount":1507,"peopleCount":2713},{"date":"2017-01-05","orderCount":1487,"peopleCount":2572},{"date":"2017-01-06","orderCount":1343,"peopleCount":2399},{"date":"2017-01-07","orderCount":1875,"peopleCount":3291},{"date":"2017-01-08","orderCount":1960,"peopleCount":3551},{"date":"2017-01-09","orderCount":1414,"peopleCount":2623},{"date":"2017-01-10","orderCount":1498,"peopleCount":2554},{"date":"2017-01-11","orderCount":1497,"peopleCount":2714},{"date":"2017-01-12","orderCount":1931,"peopleCount":3377},{"date":"2017-01-13","orderCount":2,"peopleCount":3},{"date":"2017-01-14","orderCount":2235,"peopleCount":3785},{"date":"2017-01-15","orderCount":2371,"peopleCount":4126},{"date":"2017-01-16","orderCount":1798,"peopleCount":3347},{"date":"2017-01-17","orderCount":1935,"peopleCount":3478},{"date":"2017-01-18","orderCount":1959,"peopleCount":3419},{"date":"2017-01-19","orderCount":1871,"peopleCount":3544},{"date":"2017-01-20","orderCount":1819,"peopleCount":3503},{"date":"2017-01-21","orderCount":2138,"peopleCount":3845},{"date":"2017-01-22","orderCount":1721,"peopleCount":3121},{"date":"2017-01-23","orderCount":1660,"peopleCount":2939},{"date":"2017-01-24","orderCount":1578,"peopleCount":2741},{"date":"2017-01-25","orderCount":1607,"peopleCount":2742},{"date":"2017-01-26","orderCount":1641,"peopleCount":2726},{"date":"2017-01-28","orderCount":3924,"peopleCount":6999},{"date":"2017-01-29","orderCount":8328,"peopleCount":16276},{"date":"2017-01-30","orderCount":11725,"peopleCount":23134},{"date":"2017-01-31","orderCount":10933,"peopleCount":22545},{"date":"2017-02-01","orderCount":9617,"peopleCount":19020},{"date":"2017-02-02","orderCount":7573,"peopleCount":14493},{"date":"2017-02-03","orderCount":5320,"peopleCount":9508},{"date":"2017-02-04","orderCount":4410,"peopleCount":7856},{"date":"2017-02-05","orderCount":4196,"peopleCount":7224},{"date":"2017-02-06","orderCount":4097,"peopleCount":7133},{"date":"2017-02-07","orderCount":3358,"peopleCount":5768},{"date":"2017-02-08","orderCount":4411,"peopleCount":7146},{"date":"2017-02-09","orderCount":4139,"peopleCount":6751},{"date":"2017-02-10","orderCount":3267,"peopleCount":5506},{"date":"2017-02-11","orderCount":3528,"peopleCount":6467},{"date":"2017-02-12","orderCount":3569,"peopleCount":6332},{"date":"2017-02-13","orderCount":3229,"peopleCount":5567},{"date":"2017-02-14","orderCount":3686,"peopleCount":6364},{"date":"2017-02-15","orderCount":4032,"peopleCount":7029},{"date":"2017-02-16","orderCount":4174,"peopleCount":6964},{"date":"2017-02-17","orderCount":4024,"peopleCount":6898},{"date":"2017-02-18","orderCount":4648,"peopleCount":8200},{"date":"2017-02-19","orderCount":3772,"peopleCount":6512},{"date":"2017-02-20","orderCount":2975,"peopleCount":5124},{"date":"2017-02-21","orderCount":2610,"peopleCount":4672},{"date":"2017-02-22","orderCount":3145,"peopleCount":5471},{"date":"2017-02-23","orderCount":2802,"peopleCount":4961},{"date":"2017-02-24","orderCount":3049,"peopleCount":5198},{"date":"2017-02-25","orderCount":3654,"peopleCount":6410},{"date":"2017-02-26","orderCount":2788,"peopleCount":4756},{"date":"2017-02-27","orderCount":1855,"peopleCount":3405},{"date":"2017-02-28","orderCount":1851,"peopleCount":3392},{"date":"2017-03-01","orderCount":1807,"peopleCount":3269}]};
}
function vacationlocdata() {
    return {"code":200,"msg":"请求成功","data":[{"date":"2017-01-01","orderCount":3270,"peopleCount":6614},{"date":"2017-01-02","orderCount":3109,"peopleCount":5725},{"date":"2017-01-03","orderCount":1883,"peopleCount":3490},{"date":"2017-01-04","orderCount":1507,"peopleCount":2713},{"date":"2017-01-05","orderCount":1487,"peopleCount":2572},{"date":"2017-01-06","orderCount":1343,"peopleCount":2399},{"date":"2017-01-07","orderCount":1875,"peopleCount":3291},{"date":"2017-01-08","orderCount":1960,"peopleCount":3551},{"date":"2017-01-09","orderCount":1414,"peopleCount":2623},{"date":"2017-01-10","orderCount":1498,"peopleCount":2554},{"date":"2017-01-11","orderCount":1497,"peopleCount":2714},{"date":"2017-01-12","orderCount":1931,"peopleCount":3377},{"date":"2017-01-13","orderCount":2,"peopleCount":3},{"date":"2017-01-14","orderCount":2235,"peopleCount":3785},{"date":"2017-01-15","orderCount":2371,"peopleCount":4126},{"date":"2017-01-16","orderCount":1798,"peopleCount":3347},{"date":"2017-01-17","orderCount":1935,"peopleCount":3478},{"date":"2017-01-18","orderCount":1959,"peopleCount":3419},{"date":"2017-01-19","orderCount":1871,"peopleCount":3544},{"date":"2017-01-20","orderCount":1819,"peopleCount":3503},{"date":"2017-01-21","orderCount":2138,"peopleCount":3845},{"date":"2017-01-22","orderCount":1721,"peopleCount":3121},{"date":"2017-01-23","orderCount":1660,"peopleCount":2939},{"date":"2017-01-24","orderCount":1578,"peopleCount":2741},{"date":"2017-01-25","orderCount":1607,"peopleCount":2742},{"date":"2017-01-26","orderCount":1641,"peopleCount":2726},{"date":"2017-01-28","orderCount":3924,"peopleCount":6999},{"date":"2017-01-29","orderCount":8328,"peopleCount":16276},{"date":"2017-01-30","orderCount":11725,"peopleCount":23134},{"date":"2017-01-31","orderCount":10933,"peopleCount":22545}]};

}
function bancilocdata() {
    return {"code":200,"msg":"请求成功","data":[{"departId":1,"arriveId":2,"departName":"武","arriveName":"熊猫基地"}]};

}
function bancidetaillocdata() {
      return  {"code":200,"msg":"请求成功","data":[{"date":"2017-09-01","orderCount":62,"peopleCount":107},{"date":"2017-09-02","orderCount":84,"peopleCount":138},{"date":"2017-09-03","orderCount":71,"peopleCount":128},{"date":"2017-09-04","orderCount":69,"peopleCount":117},{"date":"2017-09-05","orderCount":74,"peopleCount":125},{"date":"2017-09-06","orderCount":61,"peopleCount":93},{"date":"2017-09-07","orderCount":91,"peopleCount":165},{"date":"2017-09-08","orderCount":59,"peopleCount":105},{"date":"2017-09-09","orderCount":81,"peopleCount":148},{"date":"2017-09-10","orderCount":77,"peopleCount":132},{"date":"2017-09-11","orderCount":80,"peopleCount":143},{"date":"2017-09-12","orderCount":52,"peopleCount":119},{"date":"2017-09-13","orderCount":58,"peopleCount":85},{"date":"2017-09-14","orderCount":52,"peopleCount":98},{"date":"2017-09-15","orderCount":69,"peopleCount":118}]};

}

function  urlapi(type){

    //income
    var  baseip =  "http://112.74.40.157:6789";
    var   urls = {
        'index':baseip +'/orderByDateRange?start=yyyy1-ssss&end=yyyy2-dddd',
         'niandu':baseip +'/tripByDateRange?start=ssss&end=eeee',
        'vacation':baseip+'/tripByDateRange?start=2017-ssss&end=2017-dddd',
        'trip':baseip + '/trips',
        'total':baseip + '/tripByDateRange?start=ssss&end=eeee&departId=dddd&arriveId=aaaa'
    }


    return urls[type];


}

function   getoptions() {

       var options = {
        title : {
            text: '当月订单人数统计',
            subtext: '纯属搞着玩'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['人数','订单数','销售金额']
        },
        //右上角工具条
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} '
                }
            }
        ],
        series : [
            {
                name:'人数',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'订单数',
                type:'line',
                data:[1, 10, 2, 5, 3, 2, 0],
                markPoint : {
                    data : [
//                        {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                        {type : 'min', name: '周最低'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            },
            {
                name:'销售金额',
                type:'line',
                data:[1, 10, 2, 5, 3, 2, 0],
                markPoint : {
                    data : [
//                        {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                        {type : 'min', name: '周最低'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
       return  options;
}
function  getvactionmap() {
  var  ca =   {  '01-01':'元旦节',
        '02-14':'情人节',
        '03-08':'妇女节',
        '04-05':'清明节',
        '05-01':'劳动节',
        '06-01':'儿童节',
        '09-10':'教师节',
        '10-01':'国庆节',
        '12-25':'圣诞节',
        '01-27':'春节',
        '02-11':'元宵节',
        '05-30':'端午节',
        '08-28':'七夕节',
        '10-04':'中秋节',
        '10-28':'重阳节'
    };
  return  ca;
}



