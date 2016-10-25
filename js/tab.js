(function(){
    var attr_box=document.getElementsByClassName('attr_box')[0];
    var oUl=attr_box.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('div');
    var nav_list=document.getElementsByClassName('nav_list');
    for(var i=0;i<aLi.length;i++){
        (function (index){
            aLi[index].onmouseenter=function (){
                aLi[index].style.opacity='1';
                nav_list[index].style.display='block';
            };
            aLi[index].onmouseleave=function (){
                aLi[index].style.opacity='0.9';
                nav_list[index].style.display='none';
            }
        })(i);
        (function (index){
            nav_list[index].onmouseenter=function (){
                nav_list[index].style.display='block';
            };
            nav_list[index].onmouseleave=function (){
                nav_list[index].style.display='none';
            }
        })(i);
    }
})();