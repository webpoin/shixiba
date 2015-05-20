$(".fullSlide").hover(function(){
    $(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
},
function(){
    $(this).find(".prev,.next").fadeOut()

});
$(".fullSlide").slide({
	
    mainCell: ".bd ul",
    effect: "fold",
    autoPlay: true,
    autoPage: true,
    trigger: "click",
    startFun: function(i) {
        var curLi = jQuery(".fullSlide .bd li").eq(i);
        if ( !! curLi.attr("_src")) {
            curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
        }
    }
	
});
$(function () {
	
    var titnumb = $(".hd ul li").length;
	if (titnumb == 1) {
		$(".fullSlide .pd").css("display", "none");
        } else {
        $(".fullSlide .pd").css("display", "block");
		}
	});

//΢��	
$(function(){ 
	$(".weixin").hover(function(){ 
	$(".chat span").show(); 
	}, 
	function(){ 
	$(".chat span").hide(); 
	}) 
});

//quest line
$(".quest_con .line").hover(
		function(){
		 $(this).addClass("on");
		},
		function(){
		 $(this).removeClass("on");
	
		});		
//contact line
$(".contact_con .line").hover(
		function(){
		 $(this).addClass("on");
		},
		function(){
		 $(this).removeClass("on");
	
		});		


