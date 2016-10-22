// JavaScript Document
$(function(){
	//header部分
	(function(){
		var aNavl = $('.Navl');
		aNavl.each(function(index) {
            $(this).hover(function(){
				$(this).find('.block').show();
				$(this).find('.block').prev().addClass('up');
				}, function(){
					aNavl.find('.block').hide();
					aNavl.find('.block').prev().removeClass('up');
					});
        	});
		
		})();
	//search部分
	(function(){
		var oShop = $('#search').find('.shop');
		var oDivide = $('#search').find('.divide');
		var oCart = $('#search').find('.cart');
		var oText = $('#search :text');
		var oSpan = $('#adWrap').find('a');
		var oImg = $('#adWrap')
		oSpan.click(function(){
			oImg.hide();
			});
		oShop.hover(function(){
			oDivide.show();
			oCart.show();
			}, function(){
					oDivide.hide();
					oCart.hide();
				});
		oText.focus(function(){
			if(this.value =='手环'){
			$(this).val('');}
			});
		oText.blur(function(){
			if(this.value ==''){
			oText.val('手环');}
			});
		})();
	//nav部分
	(function(){
		var aWareFl = $('.wareLis');
		var aWareH = $('.wareHid');
		aWareFl.each(function(index) {
            $(this).hover(function(){
				aWareH.eq(index).show();
				$(this).find('a').addClass('active');
				aWareH.eq(index).mouseover(function(){
					 $(this).show();
					 aWareFl.eq(index).find('a').addClass('active');
					});
				}, function(){
						aWareFl.find('a').removeClass('active');
						aWareH.hide();
						aWareH.eq(index).mouseout(function(){
					 		$(this).hide();
							aWareFl.find('a').removeClass('active');
					});
					});
        	});
		})();
	//淡入淡出
	(function(){
		var oMd = $('#wareMd');
		var aA = oMd.find('a');
		var aLi = oMd.find('li');
		var oPrev = oMd.find('.prev');
		var oNext = oMd.find('.next');			
		var num = 0; 
		var timer=null;
		function autoPlay(){
		 timer = setInterval(function(){ 
    		if(num < aA.length-1){ 
      			num ++; 
    		}else{ 
      			num = 0;
    			}
    		changeTo(num); 
  			},2500);
		}
		autoPlay();
		oPrev.click(function(){ 
    		num = (num> 0) ? (--num) : (aA.length - 1);
    		changeTo(num);
  		});
  		oNext.click(function(){ 
   		num = (num < aA.length - 1) ? (++num) : 0;
    	changeTo(num);
  		});
		oMd.hover(function(iNow){
			oPrev.show();
			oNext.show();
			clearInterval(timer);
			aLi.each(function(item){ 
    			$(this).mouseover(function(){      			
      				changeTo(item);
      			 	num = item;  			
    				});			
 		 		});	
			},function(){
				oPrev.hide();
				oNext.hide();
				autoPlay();
				});
			
  		
  function changeTo(i){ 
    aA.hide().eq(i).fadeIn();
    aLi.removeClass("active").eq(i).addClass("active");
  }
		
		})();
	//4图轮播图
	(function(){
		var num=0;
		var i=4;
		var oRec = $('#recommend');
		var oRun= oRec.find('.run');
		var oRunWrap= oRec.find('.runWrap');
		var oPrev = oRec.find('.prevRun');
		var oNext = oRec.find('.nextRun');
		var len = oRun.find('a').length;
		var oWidth = oRunWrap.width();
		var page = Math.ceil(len / i) ;
		oNext.click(function(){
			if( !oRun.is(":animated") ){   
				if( num == page-1){  
			    	num = -1;	
			  		}
				num++;
				oRun.animate({ left : -oWidth*num}, "slow");				
		 		}
			})
		oPrev.click(function(){
			if( !oRun.is(":animated") ){   
				if( num == 0){  
			    	num = page;	
			  		}
				num--;
				oRun.animate({ left : -oWidth*num}, "slow");  
		 		}
			})

		})();
	//轮播图
	(function(){
		fn($('#sport'));
		fn($('#food'));
		function fn(sp){
			var num=0;
			var i=4;
			var oSport = sp;
			var aLi= oSport.find('.circle li');
			var oList= oSport.find('.slideList');
			var oO2= oSport.find('.o2');
			var oBack = oSport.find('.back');
			var oGo = oSport.find('.go');
			var oWidth = oO2.width();
			oGo.click(function(){
				 if( !oList.is(":animated") ){  
					if( num == i-1){  
						num = -1;	
						}
					num++;
					oList.animate({ left : -oWidth*num}, "slow");
					aLi.eq(num).addClass("active").siblings().removeClass("active");
				 }
				})
			oBack.click(function(){
				if( !oList.is(":animated") ){   
					if( num == 0){  
						num = i;	
						}
					num--;
					oList.animate({ left : -oWidth*num}, "slow");
					aLi.eq(num).addClass("active").siblings().removeClass("active");  
					}
				})
			aLi.each(function(item){ 
				$(this).mouseover(function(){      			
					oList.animate({ left : -oWidth*item}, "slow");
					aLi.eq(item).addClass("active").siblings().removeClass("active");  
					num = item;  			
					});			
				});	
		}
		})();
	//导航右侧小图标隐藏内容
	(function(){
		var aPull = $('.pull');
		var oFrshow = $('#frShow');
		var aCon = $('#frShow').find('.con');
		var aLi = $('.frShowNav').find('li');
		var aDele = $('.dele');
			aDele.click(function(){
			oFrshow.animate({top: '286px'},300);
			})
		aPull.each(function(index) {			
        	$(this).mouseover(function(){
				if(!$('#frShow').is(':animated')){
		    		oFrshow.animate({top: 0},300);
				}
			    aLi.removeClass('active').eq(index).addClass('active');
			    aCon.hide().eq(index).show();			  
 				aLi.each(function(index) {
					$(this).mouseover(function(){
					  aLi.removeClass('active').eq(index).addClass('active');
					  aCon.hide().eq(index).show();	  
						});
					var aListLi = aCon.eq(index).find('.list li');
					var aListWrap = aCon.eq(index).find('.listWrap');					
					aListLi.each(function(index) {
						   $(this).mouseover(function(){
							   aListLi.removeClass('active');
							   $(this).addClass('active');
							   aListWrap.hide().eq(index).show();
							   })
                    	});			   
            		});		               	   
		   		})
        	});
		})();
	//滚动条
	(function(){
		var oBar = $('#bar');
		var aTor = $('#bar').find('.elevator');
		var oMbg = $('.mbg2');
		var Ocart = $('#cartWrap');
		var onOff = true;
		var oSpan = $('.cartTop span')
		oMbg.click(function(){	
			if(onOff){
				Ocart.css('right',0)
			}else{
				Ocart.css('right',-286)
				}
				onOff = !onOff;			
			})
		oSpan.click(function(){
				Ocart.css('right',-286)
				onOff = !onOff;
				})
		$(window).bind("scroll", function () {  
                var sTop = $(window).scrollTop();  
                var sTop = parseInt(sTop);  
				  if (sTop < 1217) { 
					oBar.hide();
					   }else if(sTop >2846){
						   oBar.hide();
						   }else{oBar.show();}
				})
		aTor.each(function(index) {
			$(this).hover(function(){
				$(this).find('.up').hide();
				$(this).find('.down').show();
				aTor.eq(0).click(function(){
					$(window).scrollTop(1803);
					})
				aTor.eq(1).click(function(){
					$(window).scrollTop(2334);
					})
				},function(){
					$(this).find('.down').hide();
					$(this).find('.up').show();
					})
           
        });
		
		})();
	//内容部分选项卡
	(function(){
		fnTab($('.spList2'), $('.pag2'));
		fnTab($('.spList1'), $('.pag1'));
		function fnTab( oSpl, aPag ) {
		var aElem = oSpl.find('li');
		aElem.each(function(index){
			$(this).mouseover(function(){
				aElem.removeClass('active').eq(index).addClass('active')
				aPag.hide().eq( index ).show();
				})
			
			});
		}
		})()
	
	
	});