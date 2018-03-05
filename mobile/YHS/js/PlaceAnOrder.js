function PAO(){
    var pAO = {
        cor:'minColor-1',
        payMent:(function(){
            var _payment = $('.payment');
            _payment.find('dd span').on('click',function(){
                $(this).find('a').addClass(pAO.cor);
                $(this).siblings().find('a').removeClass(pAO.cor);
            })
        })()
    };
}
PAO();

$(function(){
    var _pao = PAO();
    document.ready = _pao;
})