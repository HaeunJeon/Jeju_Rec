/*현재 페이지의 vheight가 대략 977*/ 
/*
function scrollUp(){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight) - 1) * vheight)
        }, 500);
}

function scrollDown(top){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight) + 1) * vheight)
        }, 500);
}*/

/*$(this)는 클릭 이벤트가 발생한 요소(다음버튼)
  $(this).parent()는 그 요소를 감싸고 있는 div태그*/ 
  /*
$(function(){
    $('.next_btn').click(function(e){
        let divs = $(this).parent().prev().children();
        let inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        
        e.preventDefault();
        scrollDown();
    });

    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollUp();
    });

    $('#form').submit(function(e){
        let radios = $('input[type=radio]:checked');
        if(radios.length < 3) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        return true;
    });

    $('html, body').animate({scrollTop: (1000)}, 500);

});*/

function scrollUp(top) {
    const vheight = $('.test').height();
    const margin_top = parseInt($('#survey').css('margin-top'), 10);
    $('html, body').animate({
        scrollTop: top - vheight - margin_top
    }, 500);
};

function scrollDown(top) {
    const vheight = $('.test').height();
    const margin_top = parseInt($('#survey').css('margin-top'), 10);
    $('html, body').animate({
        scrollTop: vheight + top - margin_top
    }, 500);
}

$(function(){
    $('.next_btn').click(function(e){
        let divs = $(this).parent().prev().children();
        let present_top = $(this).parent().parent()[0].offsetTop;
        let inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        e.preventDefault();
        scrollDown(present_top);
    });

    $('.prev_btn').click(function(e){
        let present_top = $(this).parent().parent()[0].offsetTop;
        e.preventDefault();
        scrollUp(present_top);
    });

    $("#form").submit(function() {
        let radios = $('input[type=radio]:checked');
        if(radios.length < 7) {
            alert("문항이 선택되지 않았습니다.");
            return false;
        }
        return true;
    });

    $("html, body").animate({
        scrollTop: 0
    }, 500);
});