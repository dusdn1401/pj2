document.write('<script type="text/javascript" src="js/reserve.js"></script>');	// 함수 리스트 호출
document.write('<script type="text/javascript" src="js/modify.js"></script>');	// 함수 리스트 호출
document.write(
"<!--[if lte IE 9]>"
+ "<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js'></script>"
+ "<script type='text/javascript'>alert('브라우저를 최신 버전으로 업그레이드하세요.'); window.open('http://outdatedbrowser.com/ko','_blank');</script>"
+ "<![endif]-->"
);

//loading
window.onload=function(){
	$("#intro").delay(500).fadeOut(1000,"swing",function(){$(this).remove();});	
	
	//spring
	$("#f-page").css("opacity","1");
}

$(document).ready(function(){
//window
var video = document.getElementById("myVideo");
var vid = document.getElementById("MainVideo");
var cbz = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
var dht = $(window).height();
var dwh = $(window).width();
var num = location.href.substr(location.href.lastIndexOf('_') + 1);
var val = num.slice(0, 2);
	val = val - 1;

//gnb
$(".top_menu a,.nav_menu a").click(function(){
	$("#header").addClass("open");
	$("#header #gnb").css({"height":"100%",'-webkit-transition': 'all 0.5s ' + cbz, '-ms-transition': 'all 0.5s ' + cbz, 'transition': 'all 0.5s ' + cbz});
	$("#gnb .gnb_lst").css({"opacity":"1",'-webkit-transition': 'all 0.5s ' + cbz,'-ms-transition': 'all 0.5s ' + cbz,'transition': 'all 0.5s ' + cbz});
	$("#gnb .vd_bg,#gnb .sns").css({"opacity":"1",'-webkit-transition': 'all 0.5s 0.5s ' + cbz,'-ms-transition': 'all 0.5s 0.5s ' + cbz,'transition': 'all 0.5s 0.5s ' + cbz});

	//index
	if($("body").is("#index") == true){$(".section").find("video").each(function(e){if($(this).parent(".section").is(".on") == true){$(this)[0].pause();}});}
	else if($("body").is(".previews") == true){vid.pause();}return false;
	
	return false;
});

$("#header .close a").click(function(){
	$("#header").removeClass("open");
	$("#header #gnb").css({"height":"0%",'-webkit-transition': 'all 0.4s 0.4s ' + cbz,'-ms-transition': 'all 0.4s 0.4s ' + cbz,'transition': 'all 0.4s 0.4s ' + cbz});
	$("#gnb .gnb_lst").css({"opacity":"0",'-webkit-transition': 'all 0.4s 0.3s ' + cbz,'-ms-transition': 'all 0.4s 0.3s ' + cbz,'transition': 'all 0.4s 0.3s ' + cbz});		
	$("#gnb .vd_bg,#gnb .sns").css({"opacity":"0",'-webkit-transition': 'all 0.4s ' + cbz,'-ms-transition': 'all 0.4s ' + cbz,'transition': 'all 0.4s ' + cbz});
	
	//index
	if($("body").is("#index") == true){$(".section").find("video").each(function(e){if($(this).parent(".section").is(".on") == true){$(this)[0].play();}});}
	else if($("body").is(".previews") == true){vid.play();}return false;
	
	return false;
});

//index
if($("body").is("#index") == true){fullpage();
	
	revideo($("#MainVideo1"));	revideo($("#MainVideo2"));
	revideo($("#MainVideo3"));	revideo($("#MainVideo4"));
	$(window).resize(function(){
		revideo($("#MainVideo1"));	revideo($("#MainVideo2"));
		revideo($("#MainVideo3"));	revideo($("#MainVideo4"));
	});		


//video
}else if($("body").is("#video") == true){
	fullpage();
	
	var w_thumb = $(window).width() / 10 * 6.69;
		w_thumb = Math.floor(w_thumb/10) * 10;
	var h_thumb = w_thumb * 0.5625;
		
	$(".vimeo").css({"width":w_thumb,"height":h_thumb,"margin-top":-h_thumb / 2, "margin-left":-w_thumb / 2,});
	
	$(window).resize(function(){
		var w_thumb = $(window).width() / 10 * 6.69;
			w_thumb = Math.floor(w_thumb/10) * 10;
		var h_thumb = w_thumb * 0.5625;
	
		$(".vimeo").css({"width":w_thumb,"height":h_thumb,"margin-top":-h_thumb / 2, "margin-left":-w_thumb / 2,});
	});
	
	
//exterior
}else if($("body").is("#exterior") == true){
	fullpage(); revideo($("#MainVideo"));
	$(window).resize(function(){revideo($("#MainVideo"));});vid.pause();
	$("#exterior h3").delay(1500).fadeIn(500,function(){
		$("#exterior h3,.bg").delay(1200).fadeOut(700,"linear");
		$("#exterior .box").delay(1200).fadeIn(500,function(){vid.play();});
	});

//previews
}else if($("body").is(".previews") == true){
	//visual
	revideo($("#MainVideo")); $("#visual").css("height",dht);
	$(".previews .lsts li").css({"height":parseInt(dht / 2)});
	
	if(dht < 600) $(".contents").css({"top":"590px"});
	else $(".contents").css({"top":parseInt(dht - 15)});
	scrolling(dht);
	
	//room 
	$("#rpv .btn").append('<img src="http://gonylab5.speedgabia.com/havet/final/images/room/detail_btn.png" alt="" width="197" height="48" />');
	
	$("#rpv .lsts li").each(function(e){var i = e + 1;
		$(this).find("a").attr("href","room_0"+ i +".html");
		$(this).find("a .txt span").text("HAVET'S ACCOMMODATION");
		$(this).find("a .txt strong").text(room_e_ttl[e]);
		var lst_wdh = parseInt($(this).find("a").width() + 50);
		$(this).find("a").css({"width":lst_wdh,"margin-left":lst_wdh / -2});
	});
	
	$("#rpv .lsts li > a").hover(function(){
		$(this).parent().find("a .txt span").css({"margin-top":"0",
			'-webkit-transition': 'all 0.3s ease-in','-ms-transition': 'all 0.3s ease-in','transition': 'all 0.3s ease-in'
		});
		$(this).find(".txt span,.txt strong").css({"color":"#fff",
			'-webkit-transition': 'all 0.3s ease-in','-ms-transition': 'all 0.3s ease-in','transition': 'all 0.3s ease-in'
		});
		$(this).parent().find("a .btn img").css({"top":"0","opacity":"1",
			'-webkit-transition': 'all 0.3s ease-in','-ms-transition': 'all 0.3s ease-in','transition': 'all 0.3s ease-in'
		});
		$(this).parent().find(".img_01 .wbg").css({"left":"-100%","opacity":"0",
			'-webkit-transition': 'all 0.6s ' + cbz,'-ms-transition': 'all 0.6s ' + cbz,'transition': 'all 0.6s ' + cbz
		});
		$(this).parent().find(".img_02 .wbg").css({"left":"100%","opacity":"0",
			'-webkit-transition': 'all 0.6s ' + cbz,'-ms-transition': 'all 0.6s ' + cbz,'transition': 'all 0.6s ' + cbz
		});
	},function(){
		$(".lsts li a .txt span").css({"margin-top":"30px",
			'-webkit-transition': 'all 0.2s ease-in','-ms-transition': 'all 0.2s ease-in','transition': 'all 0.2s ease-in'
		});
		$(".txt span,.txt strong").css({"color":"#364847",
			'-webkit-transition': 'all 0.3s ease-in','-ms-transition': 'all 0.3s ease-in','transition': 'all 0.3s ease-in'
		});
		$(".lsts li a .btn img").css({"top":"-48px","opacity":"0",
			'-webkit-transition': 'all 0.2s ease-in','-ms-transition': 'all 0.2s ease-in','transition': 'all 0.2s ease-in'
		});
		$(".lsts li .img_01 .wbg").css({"left":"0%","opacity":"0.5",
			'-webkit-transition': 'all 0.5s ' + cbz,'-ms-transition': 'all 0.5s ' + cbz,'transition': 'all 0.5s ' + cbz
		});
		$(".lsts li .img_02 .wbg").css({"left":"0%","opacity":"0.5",
			'-webkit-transition': 'all 0.5s ' + cbz,'-ms-transition': 'all 0.5s ' + cbz,'transition': 'all 0.5s ' + cbz
		});
	});
			
	//facility
	$("#fpv .btn").append('<img src="http://gonylab5.speedgabia.com/havet/final/images/room/detail_btn.png" alt="" width="197" height="48" />');
	$("#fpv .lsts li").each(function(e){var i = e + 1;
		$(this).find("a").attr("href","facility_0"+ i +".html");
		$(this).find("a .txt span").text("#FACILITY");
		$(this).find("a .txt strong").text(spc_e_ttl[e]);
	});
	
	$("#fpv .lsts li .img > a").hover(function(){
		$(this).find(".txt").css({"margin-top":"-90.5px",'-webkit-transition': 'all 0.3s ease','-ms-transition': 'all 0.3s ease','transition': 'all 0.3s ease'});
		$(this).find(".btn img").css({"top":"0","opacity":"1",'-webkit-transition': 'all 0.3s ease','-ms-transition': 'all 0.3s ease','transition': 'all 0.3s ease'});
		$(this).parent().find(".bg").css({"opacity":"0.3",'-webkit-transition': 'all 0.3s ease','-ms-transition': 'all 0.3s ease','transition': 'all 0.3s ease'});
		$(this).parent().parent().find("video")[0].play();
	},function(){
		$("#fpv .img .txt").css({"margin-top":"-62.5px",'-webkit-transition': 'all 0.3s ease','-ms-transition': 'all 0.3s ease','transition': 'all 0.3s ease'	});
		$("#fpv .img .btn img").css({"top":"-48px","opacity":"0",'-webkit-transition': 'all 0.3s ease','-ms-transition': 'all 0.3s ease','transition': 'all 0.3s ease'});
		$("#fpv .img .bg").css({"opacity":"0.5",'-webkit-transition': 'all 0.3s ease','-ms-transition': 'all 0.3s ease','transition': 'all 0.3s ease'});
		$(this).parent().parent().find("video")[0].pause();
	});
	
	//restaurant
	$("#restaurant .t-img").css({"height":parseInt(dht / 10 * 4)});

	//scroll
	$(window).scroll(function(){
		var top = $(this).scrollTop(); 
		
		if($("#container").is(".rpv") == true){	
			if(top > (dht / 3)) vid.pause();
			else vid.play();
					
			if($("#header").is(".open") == true) vid.pause();
		}
		
		if($("#container").is(".rst") == true){
			var rst = $(".rt_cont_lst").offset().top - 400;
			var move = 'all 0.9s 0.2s ease';
			if(top >= (dht / 2)){
				$(".rt_cont_txt .t-box .txt").css({"left":"0","opacity":"1",'-webkit-transition': move,'-ms-transition': move,'transition': move});
				$(".rt_cont_txt .t-box .img").css({"right":"0","opacity":"1",'-webkit-transition': move,'-ms-transition': move,'transition': move});
			}else{
				$(".rt_cont_txt .t-box .txt").css({"left":"-50px","opacity":"0",'-webkit-transition': move,'-ms-transition': move,'transition': move});
				$(".rt_cont_txt .t-box .img").css({"right":"-50px","opacity":"0",'-webkit-transition': move,'-ms-transition': move,'transition': move});
			}if(top >= rst){
				$(".rt_cont_lst .img_01,.rt_cont_lst .img_03").css({"top":"10px","opacity":"1",'-webkit-transition': move,'-ms-transition': move,'transition': move});
				$(".rt_cont_lst .img_02").css({"bottom":"10px","opacity":"1",'-webkit-transition': move,'-ms-transition': move,'transition': move});
				$(".rt_cont_lst .txt").css({"opacity":"1",'-webkit-transition': move,'-ms-transition': move,'transition': move});
			}else{
				$(".rt_cont_lst .img_01,.rt_cont_lst .img_03").css({"top":"-20px","opacity":"0",'-webkit-transition': move,'-ms-transition': move,'transition': move});
				$(".rt_cont_lst .img_02").css({"bottom":"-20px","opacity":"0",'-webkit-transition': move,'-ms-transition': move,'transition': move});
				$(".rt_cont_lst .txt").css({"opacity":"0",'-webkit-transition': move,'-ms-transition': move,'transition': move});
			}
		}
		
	});
	
	//resize
	$(window).resize(function(){
		var dht = $(window).height();
		
		//visual
		revideo($("#MainVideo")); $("#visual").css("height",dht);
		$(".previews .lsts li").css({"height":parseInt(dht / 2)});
		$("#restaurant .t-img").css({"height":parseInt(dht / 10 * 4)});
		
		
		if(dht <= 600) $(".contents").css({"top":"590px"});
		else $(".contents").css({"top":parseInt(dht - 5)});
	});scroll("top_btn");
	
//room
}else if($("body").is("#room") == true){scrolling(dht);
	var num = num.slice(0, 2); $("body").addClass("room_" + num);

	//var top = $(window).scrollTop(); if(top > (dht / 10 * 2)){$(".details h2 span,.details .in").css({"opacity":"1"});} 
		
	for(var i = 0; i < room_img[val]; i++){var b = i + 1;
		if(b < 10) $(".slide_show").append("<li id='slide_0"+ b +"'></li>");
		else if(b > 10) $(".slide_show").append("<li id='slide_"+ b +"'></li>");
	}slide("slide","slide_show > li"); 
	
	//객실정보
	$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ ttl +'/8',//실시간예약 객실정보 URL
	function(data){ var count = val;
		if(num == "01") val = 0; 
		if(num == "02") val = 1; 
		if(num == "03") val = 3;
		if(num == "04") val = 6; 
		if(num == "05") val = 8; 
		if(num == "06") val = 11;
		
		
		var names = data.result[val]["TYPE_NM"];			//객실이름
		var wdth = data.result[val]["ROOM_EXTN"];			//객실평수
		var flhts = data.result[val]["FLHT_ROOM_CNT"];		//침대객실
		var beds = data.result[val]["BED_ROOM_CNT"];		//온돌객실
		var tolt = data.result[val]["TOLT_CNT"];			//온돌객실
				
		var adlt = data.result[val]["ADLT_BASE_PERS"];		//기준인원
		var adlt_max = data.result[val]["ADLT_MAX_PERS"];	//최대인원
		var etc = data.result[val]["ETC_DETL"];				//기타상세
		
		var types = data.result[val]["ROOM_TYPE"];			//객실타입
		var spt1 = types.split(','); var slt1 = spt1.length;
			
		var intr = data.result[val]["INTERIOR"];			//비품안내
		var spt2 = intr.split(','); var slt2 = spt2.length;
				
		$(".details").append(
			'<h2><span>' + room_e_ttl[count] + '</span></h2>' +
			'<div class="in"><div class="img"></div>' + 
				'<div class="info"><h3>객실구성</h3>' +
					'<ul>' +
						'<li class="txt">' + room_k_txt[count].replace(/\n/g, "<br />") + '</li>' +
												
						'<li><span class="rtn">면적 : </span><em>' + wdth + '㎡</em><a href="#" class="layout_btn">+ 도면보기</a></li>' +
						'<li><span class="rtn">구성 : </span><ul class="types"></ul></li>' +
						'<li><span class="rtn">인원 : </span>' + adlt + '인 기준 (최대 인원 '+ adlt_max +'인)</li>' +
						'<li><span class="rtn">비품 : </span><ul class="intr"></ul></li>' +
					'</ul>'+
					'<div class="rvb_btn"><a href="reserve.html?reserve=rv"><span class="ko">예약하기 ></span></a></div>' + //<span class="price"></span>
				'</div>' +
			'</div>' + 
			'<div class="layout">' + 
				'<div class="obj">' + 
					'<img src="http://gonylab5.speedgabia.com/havet/final/images/room/layout_' + num + '.png" alt="'+ room_e_ttl[count] +'" width="1000" height="700" />' +
					'<a href="#"><img src="http://gonylab5.speedgabia.com/havet/final/images/room/close.png" alt="" width="74" height="74" /></a>' + 
				'</div>' + 
			'</div>' +
			'<div class="scl_slide"><a href="#"><img src="http://gonylab5.speedgabia.com/havet/final/images/room/scroll_txt.png" alt="" width="12" height="163" /></a></div>'
		);detail(dht,cbz);
		$(".details ul li").each(function(e){var hts = $(this).height(); $(this).find("span").css("height",hts);});
		
		//객실구성
		for(var i=0; i < slt1; i++) $(".details ul li ul.types").append("<li>" + spt1[i] + " / </li>");
		var txt1 = $(".details ul li ul.types li").eq(slt1-1).text(); txt1 = txt1.slice(0, txt1.indexOf("/"));
		$(".details ul li ul.types li").eq(slt1-1).text(txt1);
		
		//객실비품
		for(var i=0; i < slt2; i++) $(".details ul li ul.intr").append("<li>" + spt2[i] + ", </li>");
		var txt2 = $(".details ul li ul.intr li").eq(slt2-1).text(); txt2 = txt2.slice(0, txt2.indexOf(","));
		$(".details ul li ul.intr li").eq(slt2-1).text(txt2);
	
		$(".layout_btn").click(function(){$(".layout").fadeIn(500,'swing');return false;});
		$(".obj > a").click(function(){$(".layout").fadeOut(350,'swing');return false;});
		
		//객실 다이렉트 버튼
		//if(num == "03") $(".info").append("<div class='dr_btn'><a href='room_04.html'>OCEAN SUITE B 바로가기</a></div>");	
		//else if(num == "04") $(".info").append("<div class='dr_btn'><a href='room_03.html'>OCEAN SUITE A 바로가기</a></div>");
		//else if(num == "05") $(".info").append("<div class='dr_btn'><a href='room_06.html'>SKY LOFT SUITE B 바로가기</a></div>");
		//else if(num == "06") $(".info").append("<div class='dr_btn'><a href='room_05.html'>SKY LOFT SUITE A 바로가기</a></div>");
	
	});

	//가격정보
	$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/' + ttl + '/5',//실시간예약 객실가격 URL 
	function(data){
		
		if(num == "01") val = 0; 
		if(num == "02") val = 1; 
		if(num == "03") val = 3;
		if(num == "04") val = 6; 
		if(num == "05") val = 8; 
		if(num == "06") val = 11;
		
		
		//서버시간 - start
		/*
		function svTime(){
			var xmlHttp;
			try { xmlHttp = new XMLHttpRequest(); }
			catch (err1) {
				try{ xmlHttp = new ActiveXObject('Msxml2.XMLHTTP'); }
				catch (err2) {
					try { xmlHttp = new ActiveXObject('Microsoft.XMLHTTP'); }
					catch (eerr3) {}
				}
			}
			xmlHttp.open('HEAD', window.location.href.toString(), false);
			xmlHttp.setRequestHeader("Content-Type", "text/html");
			xmlHttp.send('');
			return xmlHttp.getResponseHeader("Date");
		}

		var st = svTime();
		var date = new Date(st);
		var week = new Array('일','월','화','수','목','금','토');

		//document.write("시간: " + date);
		//document.write("요일 : " + week[date.getDay()]);
	
		if("금" == week[date.getDay()]){
			var a = data.result[val]["P01_FRD_PRCE"] - 0;
			var b = data.result[val]["P01_FRD_PRCE"] / 1.1;
		}else if("토" == week[date.getDay()]){
			var a = data.result[val]["P01_SAT_PRCE"] - 0;
			var b = data.result[val]["P01_SAT_PRCE"] / 1.1;
		}else if("일" == week[date.getDay()]){	
			var a = data.result[val]["P01_WEEK_PRCE"] - 0;
			var b = data.result[val]["P01_WEEK_PRCE"] / 1.1;
		}else{
			var a = data.result[val]["P01_WEEK_PRCE"] - 0;
			var b = data.result[val]["P01_WEEK_PRCE"] / 1.1;
		}
		*/
		//서버시간 - end
	
		var a = data.result[val]["P01_WEEK_PRCE"] - 0;
		var b = data.result[val]["P01_WEEK_PRCE"] / 1.1;
		
		//정상가
		$(".price").text(
			"정상가 ￦" + String(Math.round(b)).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 
			" + 세금 ￦" + String(Math.round(b * 0.1)).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 
			" = ￦" + String(a).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		);
	
		
	});var top = $(this).scrollTop(); $("#visual").css("top",top / -2 / 2); 
	
	
//facility
}else if($("body").is("#facility") == true){scrolling(dht);
		
	var num = num.slice(0, 2); $("body").addClass("facility_" + num);
	
	for(var i = 0; i < spc_img[val]; i++){var b = i + 1;
		if(b < 10) $(".slide_show").append("<li id='slide_0"+ b +"'></li>");
		else if(b > 10) $(".slide_show").append("<li id='slide_"+ b +"'></li>");
	}slide("slide","slide_show > li"); 

	$(".details").append(
		'<h2><span>' + spc_e_ttl[val] + '</span></h2>' +
		'<div class="in"><div class="img"></div><div class="info"><h3>'+ spc_k_ttl[val] +'</h3><p>'+ spc_txt[val].replace(/\n/g, "<br />") +'</p></div>' +
		'</div><div class="scl_slide"><a href="#"><img src="http://gonylab5.speedgabia.com/havet/final/images/room/scroll_txt.png" alt="" width="12" height="163" /></a></div>'
	);detail(dht,cbz);
	
	var top = $(this).scrollTop(); $("#visual").css("top",top / -2 / 2); 

//enjoy
}else if($("body").is("#enjoy") == true){
	scrolling(100); scroll("top_btn"); $(".seciton").css("height",parseInt(dht / 10 * 9));
	$(window).resize(function(){var dht = $(window).height();$(".seciton").css("height",parseInt(dht / 10 * 9));});

	
/*------------------------------------------------------------------------------------------------*/
//common - js

//about	
}else if($("body").is("#about") == true){scrolling(460);
	
	$(".brand > div a").hover(function(){
		$(this).parent().parent().find(".img > div").css({'-webkit-transform': 'scale(1.04)','-ms-transform': 'scale(1.04)','transform': 'scale(1.04)'});
		$(this).find("b").css("color","#9a9a9a");
	},function(){
		$(".img > div").css({'-webkit-transform': 'scale(1)','-ms-transform': 'scale(1)','transform': 'scale(1)'});
		$(".brand .txt b").css("color","#385559");
	});
	
	$(".service > div").css({"height":parseInt(dht / 10 * 9)});
	$(".service > .sb_sv_lst").css({"height":parseInt(dht / 10 * 5)});
	$(".service > .sv_03").css({"height":parseInt(dht / 10 * 5)});
	
	
	$(window).resize(function(){
		var dht = $(window).height();
		$(".service > div").css({"height":parseInt(dht / 10 * 9)});	
		$(".service > .sb_sv_lst").css({"height":parseInt(dht / 10 * 5)});
		$(".service > .sv_03").css({"height":parseInt(dht / 10 * 5)});
	});
	
	
	$(".pv_cont > ul > li > a").removeClass("active");
	$(".pv_cont > ul > li > a").click(function(){
		
		//this - number
		var n = $(this).parent().index(); 
		$(".pv_cont > ul > li > a").removeClass("active"); 
		$(this).addClass("active");
		
		$(".pv_cont > .tabs").css("display","none"); 
		$(".pv_cont > .tabs").eq(n).css("display","block");
		
		if(n == 0){
			$(".pv_cont h2 span").text("LOCATION"); 
			$(".pv_cont h2 b").text("오시는길");
		}else{
			$(".pv_cont h2 span").text("TRAVEL"); 
			$(".pv_cont h2 b").text("주변여행지");
		}return false;
	});scroll("top_btn");


//reserve	
}else if($("body").is("#reserve") == true){scrolling(460);
		
	$(".pv_cont > ul > li > a").removeClass("active");
	$(".pv_cont > ul > li > a").click(function(){
		
		//this - number
		var n = $(this).parent().index(); 
		$(".pv_cont > ul > li > a").removeClass("active"); 
		
		$(this).addClass("active");
		$(".pv_cont > .tabs").css("display","none"); 
		$(".pv_cont > .tabs").eq(n).css("display","block");
		
		if(n == 0){
			$(".pv_cont h2 span").text("RESERVATION"); 
			$(".pv_cont h2 b").text("실시간예약");
		}else{
			$(".pv_cont h2 span").text("GUIDE"); 
			$(".pv_cont h2 b").text("예약안내");
		}return false;
	});reserInfo(ttl); scroll("top_btn");
	
//table
}else if($("body").is("#table") == true){scrolling(460);
	
	$(".pv_cont > ul > li > a").removeClass("active");
	$(".pv_cont > ul > li > a").click(function(){
		//this - number
		var n = $(this).parent().index(); 
		
		$(".pv_cont > ul > li > a").removeClass("active"); 
		$(this).addClass("active");
		
		if(n == 0){
			$(".pv_cont h2 span").text("NOTICE"); 
			$(".pv_cont h2 b").text("공지사항");
			$(".tabs iframe").attr("src","/board/bbs/board.php?bo_table=notice");
		}else if(n == 1){
			$(".pv_cont h2 span").text("REVIEW"); 
			$(".pv_cont h2 b").text("숙박후기"); 
			$(".tabs iframe").attr("src","/board/bbs/board.php?bo_table=review");
			
		}else{
			$(".pv_cont h2 span").text("Q&A"); 
			$(".pv_cont h2 b").text("문의사항"); 
			$(".tabs iframe").attr("src","/board/bbs/board.php?bo_table=qna");
		}
		return false;
	});scroll("top_btn");

}


//스크롤 이벤트
if($("#container > div").is("#visual") == true){
	var top = $(this).scrollTop(); $("#visual").css("top",top / -2 / 2); 	
	
	//상단배너
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if(top <= 0) $("#visual").css("top",0);
		if(top > 0) $("#visual").css("top",top / -2 / 2);
	});
}

/*------------------------------------------------------------------------------------------------*/

//리사이즈 이벤트
$(window).resize(function(){});


$(".sns_01").attr("href",plus);$(".sns_02").attr("href",insta);$(".sns_03").attr("href",facebook);
if(insta == "#"){$(".sns_01").click(function(){alert('준비중입니다.');return false;});}
if(plus == "#"){$(".sns_02").click(function(){alert('준비중입니다.');return false;});}
if(facebook == "#"){$(".sns_03").click(function(){alert('준비중입니다.');return false;});}

/*------------------------------------------------------------------------------------------------*/
//footer
	//사업자 정보
	$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/' + ttl + '/4',//사업자 정보
	function(data){
		$("#footer .inner address").append(
			
			'<a href="http://verderes.co.kr/">FAMILY SITE : VERDE restaurant</a>' +
			'<span>개인정보 처리방침| 서비스 이용약관 | 환불 및 예약</span>' +
			'<span>(주)휴네스트 ' + data.result.USER_ADDR  + ' | 대표자 : ' + data.result.BUSI_PRE_NM + ' | 전화 : ' + data.result.USER_TEL1 + ' (부재시 비상 연락처 : 010-8600-8657) 통화제한 PM 22:00 까지 | ' + data.result.USER_TEL2 + '</span>' +
			'<span>사업자등록번호 : ' + data.result.BUSI_NO + ' | 통신 판매번호: ' + data.result.COMM_SALE_NO + ' | Copyright  HAVET All rights reserved.</span>'
		);
	});	


});	

///////////////////////////////////////////////////////////////////////////////////////////
//functions
function scroll(e){
	$("." + e).click(function(){
		$("html,body").stop(true,false).animate({scrollTop:0},1000,"easeInOutQuart");return false;
	});
}


function revideo(video){
	if($(window).width() < 1200){
		var video = video;
		winHeight = $(this).height(),
		winWidth = $(this).width(),
		winOffset = winHeight / 540 < winWidth / 960 ? winWidth / 960 : winHeight / 540, 
				
		offsetWidth = 960 * winOffset,
		offsetHeight = 540 * winOffset,
		screenWidth = (winWidth - offsetWidth) / 2,
		screenHeight = (offsetHeight - winHeight) / 2;
		video.css({
			width: offsetWidth, 
			height: offsetHeight, 
			minWidth:"1200px",
			minHeight:"675px",
			marginLeft: 0, 
			marginTop: 0
		});
	}else{
		var video = video;
		winHeight = $(this).height(),
		winWidth = $(this).width(),
		winOffset = winHeight / 720 < winWidth / 1280 ? winWidth / 1280 : winHeight / 720, 
				
		offsetWidth = 1280 * winOffset,
		offsetHeight = 720 * winOffset,
		screenWidth = (winWidth - offsetWidth) / 2,
		screenHeight = (offsetHeight - winHeight) / 2;
		video.css({width: offsetWidth, height: offsetHeight, marginLeft: screenWidth, marginTop: -screenHeight })
	}
}
function scrolling(dht){
	$(window).resize(function(){dht = $(window).height();});
	$(window).scroll(function(){
		var top = $(this).scrollTop(); 
		if(top > (dht - 65)){
			$("#top").css({"top":"-100px",
				'-webkit-transition': 'top 0.3s ease-in',
				'-ms-transition': 'top 0.3s ease-in',
				'transition': 'top 0.3s ease-in'
			});
			$("#nav").css({"top":"0",
				'-webkit-transition': 'top 0.4s ease-out',
				'-ms-transition': 'top 0.4s ease-out',
				'transition': 'top 0.4s ease-out'
			});
		}else if(top < dht){
			$("#top").css({"top":"0",
				'-webkit-transition': 'top 0.3s ease',
				'-ms-transition': 'top 0.3s ease',
				'transition': 'top 0.3s ease'
			});
			$("#nav").css({"top":"-65px",
				'-webkit-transition': 'top 0.3s ease',
				'-ms-transition': 'top 0.3s ease',
				'transition': 'top 0.3s ease'
			});
		}
	});
}

function detail(dht,cbz){
	var c = 0;	
	$("#seciton").css("height",dht + 20);
	$("#slide").on('mousewheel DOMMouseScroll',function(e){
		if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) Nums = 1;
		else Nums = -1;

		if(Nums >= 0) sliding("up");
		else sliding("down");	
	});
	
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		var spt = $("#slide").offset().top;	
		if(top < 0 || top == 0) $(".visual").stop(true,false).animate({"top":0},150);
		else if(top > 0) $(".visual").css("top",top / 2 / 2);

		if(top > (dht / 10 * 2)){
			$(".details h2 span,.details .in").css({"opacity":"1",
				'-webkit-transition': 'opacity 0.7s ' + cbz,
				'-ms-transition': 'opacity 0.7s ' + cbz,
				'transition': 'opacity 0.7s ' + cbz
			});
		}
	});
	$(window).resize(function(){var dht = $(window).height(); $("#seciton").css("height",dht + 20);});
	$(".scroll a").click(function(){var dht = $(window).height(); $("html,body").stop(true,false).animate({scrollTop:dht},1000,"easeInOutQuart");return false;});
	$(".scl_slide a").click(function(){c = 1; var spt = $("#slide").offset().top; $("html,body").stop(true,false).animate({scrollTop:spt},1000,"easeInOutQuart");return false;});
	$(".top_btn").click(function(){c = 0; $("#slide").removeClass("on");});scroll("top_btn");

	function sliding(e){
		var spt = $("#slide").offset().top;
		if($('#slide').is(':animated')) return false;
		if(e == "up") if(c == 0){return false;}else{c--;}
		else if(c == 1){return false;}else{c++;}
		
		if(c == 0){
			var sld = spt - $("#slide").height();
			$("html,body").stop(true,false).animate({scrollTop:sld},1000,"easeInOutQuart");
			$("#slide").removeClass("on"); return false;
		}else if(c == 1){
			var sld = spt;
			$("html,body").stop(true,false).animate({scrollTop:sld},1000,"easeInOutQuart");
			$("#slide").addClass("on"); return false;
		} 
	}
}