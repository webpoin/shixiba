Date.prototype.format = function(format){
var o = {
"M+" : this.getMonth()+1, //month
"d+" : this.getDate(), //day
"h+" : this.getHours(), //hour
"m+" : this.getMinutes(), //minute
"s+" : this.getSeconds(), //second
"q+" : Math.floor((this.getMonth()+3)/3), //quarter
"S" : this.getMilliseconds() //millisecond
};

if(/(y+)/.test(format)) {
format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
}

for(var k in o) {
if(new RegExp("("+ k +")").test(format)) {
format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
}
}
return format;
};

function getNowDay()
{
	var now = new Date();
	var nowStr = now.format("yyyy-MM-dd"); 
	return nowStr;
}

function getNowMonth()
{
	var now = new Date();
	var nowStr = now.format("yyyy-MM"); 
	return nowStr;
}

function getNowFormatDate()
{
	var	day = new Date();
	
	var Year = 0;
	var Month = 0;
	var Day = 0;
	var CurrentDate = "";
	//初始化时间
	//Year= day.getYear();//有火狐下2008年显示108的bug
	Year= day.getFullYear();//ie火狐下都可以
	Month= day.getMonth()+1;
	Day = day.getDate();
	//Hour = day.getHours();
	// Minute = day.getMinutes();
	// Second = day.getSeconds();
	CurrentDate += Year + "-";
	if (Month >= 10 )
	{
	CurrentDate += Month + "-";
	}
	else
	{
	CurrentDate += "0" + Month + "-";
	}
	if (Day >= 10 )
	{
	CurrentDate += Day ;
	}
	else
	{
	CurrentDate += "0" + Day ;
	}
	return CurrentDate;
} 

function formatDate(rday)
{
	var day=rday;
	if(day==null)
	{
		day = new Date();
	}	
	var day = new Date(new Date()-24*60*60*1000);
	var Year = 0;
	var Month = 0;
	var Day = 0;
	var CurrentDate = "";
	//初始化时间
	//Year= day.getYear();//有火狐下2008年显示108的bug
	Year= day.getFullYear();//ie火狐下都可以
	Month= day.getMonth()+1;
	Day = day.getDate();
	//Hour = day.getHours();
	// Minute = day.getMinutes();
	// Second = day.getSeconds();
	CurrentDate += Year + "-";
	if (Month >= 10 )
	{
	CurrentDate += Month + "-";
	}
	else
	{
	CurrentDate += "0" + Month + "-";
	}
	if (Day >= 10 )
	{
	CurrentDate += Day ;
	}
	else
	{
	CurrentDate += "0" + Day ;
	}
	return CurrentDate;
} 

function getBeforeFormatDate()
{
	return formatDate(new Date(new Date()-24*60*60*1000));
}

function getAfterFormatDate()
{
	return formatDate(new Date(new Date()+24*60*60*1000));
}

/**
 * 获取上一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
function getPreMonth(date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}

/**
 * 获取下一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */        
function getNextMonth(date) {
	if(date==null || date=="")
		{
			date = getNowFormatDate();
		}
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }

    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}

/**
 * 获取给定日期后面N个月的日期
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
function getNMonth(date,n) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数
    var year2 = year;
    var month2 = parseInt(month) + n;
    if (month2 == 13) {
        year2 = parseInt(year2) + (parseInt(month2)-1)/12;
        month2 = (parseInt(month2)-1)%12+1;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }

    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}

function getNMonth(date,n) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数
    var year2 = year;
    var month2 = parseInt(month) + n;
    if (month2 == 13) {
        year2 = parseInt(year2) + (parseInt(month2)-1)/12;
        month2 = (parseInt(month2)-1)%12+1;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }

    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}

function getAMonth(date,n) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数
    var year2 = year;
    var month2 = parseInt(month) + n;
    if (month2 > 12) {
        year2 = parseInt(year2) + parseInt((parseInt(month2)-1)/12);
        month2 = (parseInt(month2)-1)%12+1;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    
    if(year2==year)
    {
    	return month2+"月";
    }else if(year2>year)
    {
    	return year2+"年"+month2+"月";
    }	
    
    //if (month2 < 10) {
  //      month2 = '0' + month2;
    //}

   // var t2 = year2 + '-' + month2 + '-' + day2;
   // return t2;
}
function getBMonth(date,n) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数
    var year2 = year;
    var month2 = parseInt(month) + n;
    if (month2 > 12) {
        year2 = parseInt(year2) + parseInt((parseInt(month2)-1)/12);
        month2 = (parseInt(month2)-1)%12+1;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    
    if (month2 < 10) {
          month2 = '0' + month2;
     }
  
    return year2+"-"+month2;
    
    //if (month2 < 10) {
  //      month2 = '0' + month2;
    //}

   // var t2 = year2 + '-' + month2 + '-' + day2;
   // return t2;
}

//JS 获取日期相差天数
function betweenDays(day1,day2)
{
	var s1 = new Date(day1.replace(/-/g, "/"));
	var s2 = new Date(day2.replace(/-/g, "/"));
	
	var days=0;
	if(day2>day1)
	{
		days = s2.getTime() - s1.getTime();	
	}else
	{
		days = s1.getTime() - s2.getTime();
	}	
	
	var time = parseInt(days / (1000 * 60 * 60 * 24));
	return time;
}
