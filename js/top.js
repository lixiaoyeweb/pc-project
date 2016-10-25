(function(){
    var oDiv=document.getElementById('top');
    var timer=null;
    var bOk=false; //false代表可以让机器一直走；
    window.onscroll=function(){//机器操作+手动操作；
        if(bOk){
            clearInterval(timer);
        }
        bOk=true;
        if(utils.win('scrollTop')>utils.win('clientHeight')){
            oDiv.style.display='block';
        }else{
            oDiv.style.display='none';
        }
    };
    oDiv.onclick=function(){
        var target=utils.win('scrollTop');
        var duration=1000;
        var interval=30; //坑:因为定时器越小越不准确，如果设置30ms以下，当走的很快的时候，我们停止不了；所以，建议如果想在快速运动的过程中能及时停止，一定要把定时器的时间设置30ms以上；
        var step=target/duration*interval;
        timer=setInterval(function(){ //纯机器操作；
            var curTop=utils.win('scrollTop');
            if(curTop<=0){
                clearInterval(timer);
                return;
            }
            curTop-=step;
            utils.win('scrollTop',curTop);
            bOk=false;
        },interval)
    }
})();