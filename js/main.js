/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-12 11:01:38
 */

'use strict';

$(function(){

	function resize(){
		
		var windowWidth = $(window).width();
		$("#main_ad .carousel-inner .item").each(function(i,item){
			var $item = $(item);
			var imgSrc = windowWidth<768 ? $item.data('image-sm') : $item.data('image-big');
			$item.css('backgroundImage', 'url("' + imgSrc + '")');

			if(windowWidth<768)
			{
				$item.html('<img src="'+ $item.data('image-sm') +'"/>');
			}
			else
			{
				$item.empty();
			}
		});

	};

	$(window).on("resize",resize).trigger('resize');

	
	  
    // 初始化tooltips插件
    $('[data-toggle="tooltip"]').tooltip();


    // 控制横向滚动
    var ulWidth = 40;

    var $ulcontainer = $("#ul-wrapper .nav-tabs");

    $ulcontainer.children().each(function(i,item){
    	ulWidth += item.clientWidth;
    });

    if($(window).width() < ulWidth)
    {
    	$ulcontainer.css("width",ulWidth).parent().css("overflow-x","scroll");
    }


    var $newsTitle = $("#news .news-title");

    $("#news .nav-pills a").on("click",function(){
    	var $this = $(this);
    	$newsTitle.text($this.data("title"));
    });



    var $carousel = $(".carousel");
    var minDistance = 50;
    var startX = 0;
    var endX = 0;
    $carousel.on("touchstart",function(e){
    	startX = e.originalEvent.touches[0].clientX;
    });
	$carousel.on("touchmove",function(e){
    	endX = e.originalEvent.touches[0].clientX;
    });
	$carousel.on("touchend",function(e){
		var distance = Math.abs(endX - startX);
    	if(distance > minDistance) 
    	{
    		$(this).carousel(startX > endX ? 'next' : 'prev')
    	}
    });

});