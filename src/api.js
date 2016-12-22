(function(){
    var wct = window.wct = window.wct || {};
    
    wct.Api = {
        'login': '/ajax/login',
        'logout': '/ajax/logout',
        'index': '/ajax/shopInfo',
        'desk': '/ajax/desk',
        'deskInfo': '/ajax/getDeskOrder',
        'place': '/ajax/modSeat',
        'cancelDesk': '/ajax/cancelSeat',
        'clean': '/ajax/clearDesk',
        'changeDesk': '/ajax/changeDesk',
        'changePeople': '/ajax/changePeople',
        'dash': '/ajax/dish.html',
        'detail': '/ajax/menuDetail',
        'makeOrder': '/ajax/makeOrder',
        'waitOrder': '/ajax/waitOrder',
        'addOrder': '/ajax/addDish',
        'getOrder': '/ajax/getOrder',
        'statements': '/ajax/statements',
        'deleteDish': '/ajax/deleteDish',
        'addOneDish': '/ajax/addOneDish',
        'getDiscount': '/ajax/getDiscount',
        'pay': '/ajax/pay',
        'discount': '/ajax/discount',
        'orderCheck': '/ajax/orderCheck',
        'credit': '/ajax/credit',
    };

    wct.AjaxGet = function(api,callback){
    	$.ajax({
            type:"POST",
            url:api,
            dataType:"json",
            success:function(json){
            	callback && callback(json);
            }
        });
    }

    wct.AjaxPost = function(api,datas,callback){
    	$.ajax({
            type:"POST",
            url:api,
            data: datas,
            dataType:"json",
            success:function(json){
            	callback && callback(json);
            }
        });
    }

})();