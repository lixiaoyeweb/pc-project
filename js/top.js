(function(){
    var oDiv=document.getElementById('top');
    var timer=null;
    var bOk=false; //false��������û���һֱ�ߣ�
    window.onscroll=function(){//��������+�ֶ�������
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
        var interval=30; //��:��Ϊ��ʱ��ԽСԽ��׼ȷ���������30ms���£����ߵĺܿ��ʱ������ֹͣ���ˣ����ԣ�����������ڿ����˶��Ĺ������ܼ�ʱֹͣ��һ��Ҫ�Ѷ�ʱ����ʱ������30ms���ϣ�
        var step=target/duration*interval;
        timer=setInterval(function(){ //������������
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