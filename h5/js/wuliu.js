
var pageSize=5;

//$(".close,.cancel,.close_window").live("click",function(){
//  $(".pop_add_shop,.mask").fadeOut("fast");	
//  return false;
//});
$(".close2,.cancel2").click(function(){
  $(".pop_add_shop_user,.mask2").fadeOut("fast");	
  return false;
});
 
$(".add_shop_user").click(function(){
  $(".pop_add_shop_user,.mask2").fadeIn("fast"); 
  $(".mask2").height($("body").height());
  return false; 
});
function get_cookie(name){ 
         var strCookie=document.cookie; 
         var arrCookie=strCookie.split("; "); 
         for(var i=0;i<arrCookie.length;i++){ 
               var arr=arrCookie[i].split("="); 
               if(arr[0]==name)
               {
                    return decodeURIComponent(arr[1]); 
 
               }
         } 
} 
function getRequest() 
  {
	 var rel= window.location.href;
	 var index=rel.indexOf("?");
	 
	 var url = rel.substring(index); //获取url中"?"符后的字串
	 var theRequest = {};
	 if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
		   theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
	 }
	 return theRequest; 
  }
function fn_ajax(url,input_data,type,callback)
{
	if(type==null || type=="")
	{
		type="get";
	}
	
  	$.ajax({
					  type: type,
					  url: url,
					  data:input_data ,
					  dataType: "json",
					  success: function (data) 
					  { 
						  if(data.status==200)
						  {
							  eval(callback+"("+JSON.stringify(data.data)+")");
						  }
						  else
						  {
						    alert(data.msg); 
						  }
					  }, 
					  error: function (msg) 
					  { 
						  console.log(msg); 
					  }
	});
}

function fn_ajax_error(url,input_data,type,callback,errorCallback)
{	
	if(type==null || type=="")
	{
		type="get";
	}
  	$.ajax({
		type: type,
		url: url,
		data:input_data ,
		dataType: "json",
		success: function (data) 
		{ 
			 if(data.status==200)
			 {
				 eval(callback+"("+JSON.stringify(data.data)+")");
			 }
			 else
			 {
				// alert("================="+data.status);
				 if(errorCallback==null || errorCallback == "")
				 {
					 alert(data.msg); 
				 }else
				 {
					 input_data.status=data.status;
					 input_data.msg = data.msg;
					 eval(errorCallback+"("+JSON.stringify(input_data)+")");
					 
				 }
			 }
		}, 
		error: function (msg) 
		{ 
		 console.log(msg); 
		}
	});
}


function fn_ajax_error_async(url,input_data,type,callback,errorCallback,isAsync)
{
	if(type==null || type=="")
	{
		type="get";
	}
	
	var async = true;
	
	if(isAsync=="1")
	{
		async=false;
	}
	
  	$.ajax({
  		async: async,
		type: type,
		url: url,
		data:input_data ,
		dataType: "json",
		success: function (data) 
		{ 
		 if(data.status==200)
		 {
			 eval(callback+"("+JSON.stringify(data.data)+")");
		 }
		 else
		 {
			 if(errorCallback==null || errorCallback == "")
			 {
				 alert(data.msg); 
			 }else
			 {
				 eval(errorCallback+"("+JSON.stringify(data)+")");
			 }
		 }
		}, 
		error: function (msg) 
		{ 
		 console.log(msg); 
		}
	});
}

function   isDate(strDate){ 
        var   strSeparator = "-";   //日期分隔符 
        var   strDateArray; 
        var   intYear; 
        var   intMonth; 
        var   intDay; 
        var   boolLeapYear; 
        //var strDate=form1.a.value   //表单中的日期值
        strDateArray = strDate.split(strSeparator); 
        
        if(strDateArray.length!=3)    {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
        
        intYear  =  Number(strDateArray[0],10); 
        intMonth  =  Number(strDateArray[1],10); 
        intDay   =   Number(strDateArray[2],10); 
        
        if(isNaN(intYear)||isNaN(intMonth)||isNaN(intDay))   { alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false; }
        
        if(intMonth>12||intMonth<1) {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
        
        if((intMonth==1||intMonth==3||intMonth==5||intMonth==7||intMonth==8||intMonth==10||intMonth==12)&&(intDay>31||intDay<1))   {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
        
        if((intMonth==4||intMonth==6||intMonth==9||intMonth==11)&&(intDay>30||intDay<1))   {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
        
        if(intMonth==2){ 
              if(intDay<1)   {   alert('提示: 日期格式错误! \r\n 请依【YYYY-MM-DD】格式输入！'); return   false;   }
              
              boolLeapYear   =   false;  
            if((intYear%4==0 && intYear %100!=0)||(intYear %400==0))
    {
      boolLeapYear=true;
    }
              
              if(boolLeapYear){ 
                    if(intDay>29) {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
              } 
              else{ 
                    if(intDay>28)  {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
              } 
        } 
        
        return   true; 
  } 


function GetCookieVal(offset)
//获得Cookie解码后的值
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
	endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

//---------------------------
function SetCookie(name, value)//设定Cookie值
{
	var expdate = new Date();
	var argv = SetCookie.arguments;
	var argc = SetCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;
	if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 1000 ));
	document.cookie = name + "=" + escape (value) +((expires == null) ? "" : ("; expires="+ expdate.toGMTString()))
	+((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain))
	+((secure == true) ? "; secure" : "");
}
	
//---------------------------------
function DelCookie(name)//删除Cookie
{
	var exp = new Date();
	exp.setTime (exp.getTime() - 1);
	var cval = GetCookie (name);
	document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString();
}
	
//------------------------------------
function GetCookie(name)//获得Cookie的原始值
{
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen)
	{
	var j = i + alen;
	if (document.cookie.substring(i, j) == arg)
	return GetCookieVal (j);
	i = document.cookie.indexOf(" ", i) + 1;
	if (i == 0) break;
	}
	return null;
}

function fn_callback(data)
{
	//alert(data);
	//alert(data.items.totalsize);
}

function fn_callback_error(data)
{
	  window.location.href='/wuliu/login.shtml?url='+data.data.url;
}

function oss_callback_error(data)
{
	  window.location.href='/wuliu/oss/login.shtml?url='+data.data.url;
}

function tsg_callback_error(data)
{
	  window.location.href='/tsg/oss/login.shtml?url='+data.data.url;
}

function tc_callback_error(data)
{
	  window.location.href='/track/oss/login.shtml?url='+data.data.url;
}

function islogin(usertype)
{
	  if(usertype=="13")
	  {
		  tsgIslogin(usertype);
		  return false;
	  }
	  if(usertype=="33")
	  {
		  tcIslogin(usertype);
		  return false;
	  }
	  var param={};
	  param.usertype=usertype;
	  var url="/pub/islogin?url="+window.location.href;
	  
	  var errorCallback="fn_callback_error";
	  if(usertype=="3")
	  {
		  errorCallback="oss_callback_error";
	  }
	  fn_ajax_error_async(url,param,"get","fn_callback",errorCallback,"1");
	  return false;
	  //window.location.href='/wuliu/login.html';
}

function tsgIslogin(usertype)
{
	  var param={};
	  param.usertype=usertype;
	  var url="/tsg/islogin?url="+window.location.href;
	  
	  var errorCallback="tsg_callback_error";
	  if(usertype=="13")
	  {
		  errorCallback="tsg_callback_error";
	  }
	  fn_ajax_error_async(url,param,"get","fn_callback",errorCallback,"1");
	  return false;
	  //window.location.href='/wuliu/login.html';
}

function tsgIsloginNew(usertype,callback)
{
	  var param={};
	  param.usertype=usertype;
	  var url="/tsg/islogin?url="+window.location.href;
	  
	  var errorCallback="tsg_callback_error";
	  if(usertype=="13")
	  {
		  errorCallback="tsg_callback_error";
	  }
	  fn_ajax_error_async(url,param,"get",callback,errorCallback,"1");
	  return false;
	  //window.location.href='/wuliu/login.html';
}

function tcIslogin(usertype)
{
	  var param={};
	  param.usertype=usertype;
	  var url="/track/oss/islogin?url="+window.location.href;
	  
	  var errorCallback="tc_callback_error";
	  if(usertype=="33")
	  {
		  errorCallback="tc_callback_error";
	  }
	  fn_ajax_error_async(url,param,"get","fn_callback",errorCallback,"1");
	  return false;
	  //window.location.href='/wuliu/login.html';
}

function toUndefined(obj)
{
	if(obj==null || obj =="undefined")
	{
		obj="";
	}
	return obj;
}

String.prototype.replaceAll = function (AFindText,ARepText)
{
raRegExp = new RegExp(AFindText,"g");
return this.replace(raRegExp,ARepText);
};

function tsg_callback(data)
{
}

function tsg_callback_error(data)
{
	  window.location.href='login.html?url='+data.data.url;
}

function nsIsLogin()
{
	  var param={};
	  var url="/tsg/reader/webislogin?url="+window.location.href;	  
	  var errorCallback="tsg_callback_error";
	  fn_ajax_error_async(url,param,"post","tsg_callback",errorCallback,"1");
	  return false;
	  //window.location.href='/wuliu/login.html';
}

function ispc() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function pop(msg)
{
	$("#popdiv").html(msg);
	$("#popdiv").popup();//id为弹出层的id
	$("#popdiv").popup("open");
}


function sxb_callback(data)
{
}

function sxb_callback_error(data)
{
	  window.location.href='login.html?url='+data.data.url;
}

function sxbIsLogin()
{
	  var param={};
	  param.usertype="1";
	  var url="/sx/islogin?accesscode="+localStorage.accesscode+"&accesstoken="+localStorage.accesstoken+"&url="+window.location.href;  
	  fn_ajax_error_async(url,param,"post","sxb_callback","sxb_callback_error","1");
	  return false;
}

function len(s){
	var l = 0; 
	var a = s.split(""); 
	for (var i=0;i<a.length;i++) { 
	if (a[i].charCodeAt(0)<299) { 
	l++; 
	} else { 
	l+=2; 
	} 
	} 
	return l; 
}
