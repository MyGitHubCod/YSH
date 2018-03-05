(function (doc, win) {
    // html 
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', 
   
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        clientWidth = (clientWidth > 750 ) ? 750: clientWidth ; 
        docEl.style.fontSize = clientWidth/18.75+ 'px';
    };

    if (!doc.addEventListener) return;

    win.addEventListener(resizeEvt, recalc, false);
        recalc();
})(document, window);

function CMN(){
    var common = {
        // sreach
            // input
        getFocus:function(){
            // focus
            $('.yhs-serach').find('input').focus(function(){
                $(this).prop('placeholder','');
                $(this).siblings('.icon-Magnifier').hide();
            });
            // blur
            $('.yhs-serach').find('input').blur(function(){
                $(this).prop('placeholder','搜索你要输入的产片');
                $(this).siblings('.icon-Magnifier').show();
            });
        }
    }
    common.getFocus();
}

window.onload = function(){
    var C_ = CMN();
    document.ready = C_;
};