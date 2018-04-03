// event
function carouselPlaus() {
	console.log("2", t_loopnum);
	--t_loopnum;
	if (t_loopnum >= 1) {
		$(".carousel-list").animate({
			"left" : '-=' + $(".1_").width()
		}, 'slow')
	} else {
		$(".carousel-list").animate({
			"left" : '0'
		}, 'slow')
		t_loopnum = loopnum
	}
}

function carouselMinus() {
	console.log("2", t_loopnum);
	++t_loopnum;
	if (t_loopnum <= loopnum) {
		$(".carousel-list").animate({
			"left" : '+=' + $(".1_").width()
		}, 'slow')
	} else {
		t_loopnum = loopnum
	}
}
// carousel

var loopnum, t_loopnum;
function carouselInit() {
	// 轮播初始化
	let
	containswidth = $(".carousel").width()
	$(".1_").width(containswidth)
	$("carousel").height($(".1_").outerHeight())
	$(".carousel-list").width(containswidth * 4 + 20)
	$(".carousel-list").height($(".1_").outerHeight())
	$("carousel").height($(".1_").outerHeight())
	$(".n").css({
		"left" : $(".1_").width() - 24
	})
}

function carouseLoop() {

	setInterval(function() {
		--t_loopnum
		if (t_loopnum >= 1) {
			$(".carousel-list").animate({
				"left" : '-=' + $(".1_").width()
			}, 'slow')
		} else {
			$(".carousel-list").animate({
				"left" : '0'
			}, 'slow')
			t_loopnum = loopnum
		}
	}, 3000)
}

function carousel(tm) {
	carouselInit()
	// global var 'loop' init
	loopnum = Math.ceil($(".carousel-list").width() / $(".1_").width()) - 1;
	t_loopnum = loopnum;
	carouseLoop()
}

// ready
$(document).ready(function() {
	getImgShow()

});
// -------------------------------------业务----------------------------------------

var id = '${id}';
var root = '${root}';

function getImgShow() {
	$.getJSON(root + '/app/data?viewid=gw_imgshow&cpid=' + id, function(rt) {
		var data = rt.data;
		var strVar = "";
		$.each(data, function(i, obj) {
			strVar += "<img class=\"1_\" src=\"" + obj.img_addr + "\" />\n";
		})
		$(".carousel-list").append(strVar);
		carousel()
	})
}