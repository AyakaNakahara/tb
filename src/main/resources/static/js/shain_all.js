var mdl;
var code;

// $(function() {
//     mdl = $('.modal').modaal({type:'ajax'});
// });
$(function(){
    $('.modal').modaal({type:'ajax'});
});

$(function(){
    $('#sales').on("click",function(){
        if($("#sales .fas").hasClass("opened")){
            $("#sales .fas").removeClass("opened");
          }else{
            $("#sales .fas").addClass("opened");
        }
        $('#sales_cards').slideToggle(600);
    });
    $('#engineer').on("click",function(){
        if($("#enginner .fas").hasClass("opened")){
            $("#enginner .fas").removeClass("opened");
          }else{
            $("#enginner .fas").addClass("opened");
        }
        $('#engineer_cards').slideToggle(600);
    });
    $('#leap').on("click",function(){
        if($("#leap .fas").hasClass("opened")){
            $("#leap .fas").removeClass("opened");
          }else{
            $("#leap .fas").addClass("opened");
        }
        $('#leap_cards').slideToggle(600);
    });
    $('#management').on("click",function(){
        if($("#management .fas").hasClass("opened")){
            $("#management .fas").removeClass("opened");
          }else{
            $("#management .fas").addClass("opened");
        }
        $('#management_cards').slideToggle(600);
    });
});
