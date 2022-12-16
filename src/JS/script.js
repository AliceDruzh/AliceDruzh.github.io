$(document).ready(function(){
    $("#phone_1").mask("+7(999) 999-9999");
    
    
    let options = {threshold: [1]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);
    });

    
    $(".o").css("display", "none");
    
    function calculate(){
        let sum = parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
        let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));
        $(".item_container .digit1").text(days);
        $(".item_container .digit2").text(sum);
    }
    
    $(".mySelect").on("change", function(){
        calculate();
    });
    calculate();
    
    
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        
        $('.section').each((i, el) => {
            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });
                
                $('nav li:eq(' + i +')').find('a').addClass('active');
                               
            }
        });
    });
   
});

$('.test-popup-link').magnificPopup({
  type: 'image'

});



function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
}



















                 