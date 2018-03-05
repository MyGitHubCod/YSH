$(function(){
    var index = in_dex();
    document.ready = index;
})

function in_dex(){
    var ActiveColor = {
        cor:'minColor-3',
        addCls:function(){
            //menu click addClass 
           $('.yhsC-menu').each(function(){
               // tab产品种类切换
                    // 根据li的长度追加相同个article
                    var yhsContent = $('.yhs-content'),
                    ARTICLE = '<article class="None"></article>',
                    liLength = $(this).find('li').length;
                for(var i = 0;i<liLength;i++){
                    yhsContent.append(ARTICLE);
                    $('article').eq(0).addClass('Block');
                    $('article').eq(i).attr('tab','list'+i);
                }
                // ActiveColor.th_is()
                $(this).find('li h6.publicName').eq(0).addClass(ActiveColor.cor)

                $(this).find('li').on('click',function(){
                    var thisIndex = $(this).index();
                    $(this).siblings().find('h6.publicName').removeClass(ActiveColor.cor);
                    $(this).find('h6.publicName').addClass(ActiveColor.cor);
                    $('article').eq(thisIndex).show().siblings('article').hide();
                });

           });
           //public-row>a click addClass
           $('.public-row a').on('click',function(){
                $(this).addClass(ActiveColor.cor).siblings().removeClass(ActiveColor.cor);
           })
           //bar-nav>a click addClass
          $('.bar-nav a').on('click',function(){
              $(this).addClass(ActiveColor.cor).siblings().removeClass(ActiveColor.cor);
          })
        },
        // 最新动态显示
        textShow:function(){
            var textBox = $('.y-n-textBox');//父级元素
            function scroll(){
                textBox.find('p:first').animate({  //找到第一个子元素设置marginTop负值
                    'margin-top':'-0.6rem'
                },
                1000,
                function(){//切记 这个函数还是在animate对象里面，将当前第一个子元素appendTo最后，实现循环
                    $(this).css("margin-top",'0rem').appendTo(".y-n-textBox");
                }
                )
            }
            var time = setInterval(scroll,2000);
        }
        
    }
    ActiveColor.textShow();
    ActiveColor.addCls();
}