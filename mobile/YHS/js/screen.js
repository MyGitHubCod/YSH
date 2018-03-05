$(function(){
    var SCREEN = Screen();
    document.ready = SCREEN;
})

 function Screen(){
    var Scr = {
        cor:'minColor-3',
        show_:$('.yhs-S-f-c-show').css({
            'position':'absolute',
            'z-index':'101'
        }),
        data:[
                {
                    'name':'所有产品分类',
                    'info':['不限','模切模切','铜版纸名片','不限','模切模切','铜版纸名片','不限','模切模切','铜版纸名片','不限','模切模切','铜版纸名片']
                },
                {
                    'name':'地域',
                    'info':['地域','模切模切','铜版纸名片','不限','模切模切','铜版纸名片','不限']
                },
                {
                    'name':'种类',
                    'info':['类型','模切模切','铜版纸名片','不限','模切模切','铜版纸名片','不限','模切模切','铜版纸名片','不限','模切模切','铜版纸名片']
                },
                {
                    'name':'工艺',
                    'info':['工艺','模切模切','铜版纸名片','不限','模切模切','铜版纸名片','不限']
                }
            ],
        S_:function(){
            var yhsSF_ = $('.yhs-S-f-synthesize'),
                tab = $('.y-s-f-c'),
                isShow = $('.yhs-S-f-c-show'),
                zG=$('.yhs-s-f-wrap'),
                zGheight = $('.yhs-S-factory').innerHeight();
            zG.css({
                'position':'absolute',
                'z-index':'100',
                'width':'100%',
                'background':'rgba(0,0,0,.6)',
                'display':'none'
            })
            //遮盖;
            zG.height(zGheight);          
            // 3大类切换
            yhsSF_.find('span').on('click',function(){
                $(this).addClass(Scr.cor).find('em').attr('style','border-color:#ec9d24');
                $(this).siblings().removeClass(Scr.cor).find('em').attr('style','border-color:#dedede');
            })
            // 创建数据
            function addUl(){
                for(var i=0;i<Scr.data.length;i++){
                    var $Ul = $('<ul class="font-0" style="display:none"></ul>');
                    for(var j=0;j<Scr.data[i].info.length;j++){
                        var $li = $('<li><span class="default-btn btnSzie overflow text_o">'+(Scr.data[i].info)[j]+'</span></li>');
                        $Ul.append($li);
                    }
                    isShow.append($Ul);
                }
            }
            addUl();   
            
            // 切换数据
            function _click(){
                tab.find('li').on('touchstart',function(e){
                    var _ul = isShow.find('ul');
                    var _index = $(this).index();
                    $(this).addClass(Scr.cor).siblings().removeClass(Scr.cor);
                    // open 
                    isShow.slideDown();
                    var _index = $(this).index();
                    _ul.eq(_index).attr('style','display:block').siblings().attr('style','display:none');
                    zG.css('display','block');
                    if(_index>1){
                        isShow.find()
                    }
                })
                // close ZG
                zG.on('touchstart',function(e){
                    isShow.slideUp();
                    zG.hide();
                });
                // $('.yhs-S-f-c-show ul li span').on('click',function(){
                //     isShow.slideUp();
                //     zG.hide();
                // })
                
            }
            _click();
            
        }
        
    }
    Scr.S_();
 }

