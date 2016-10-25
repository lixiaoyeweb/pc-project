(function(){
    var box = document.getElementById('search');
    var oSpan = box.getElementsByTagName('span');
    for(var i=0;i<oSpan.length;i++){
        oSpan[i].name = i;
        oSpan[i].onclick = function(){
            for(var j=0;j<oSpan.length;j++){
                oSpan[j].className = '';
                oSpan[j].className = '';
            }
            this.className = 'active';
            oSpan[this.name].className ='active';
        }
    }
})();