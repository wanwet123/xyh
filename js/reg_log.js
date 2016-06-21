var log = {};
log.togglePsd = function(){

  var $hide_show = $('#hide_show'),
      $psd = $('#psd_text');
  $hide_show.on('click',function(){
    if($psd[0].type == 'password'){
        $psd[0].type = '123';
        $(this).find('img').attr('src','images/log_show.png');
    }else{
        $psd[0].type = 'password';
        $(this).find('img').attr('src','images/log_hide.png');
    }
  });
};
log.togglePsd();

log.secondCount = function(){
      var $second = $('#yan_btn');
      var countdown = 120;
      function settime(val){
        if(countdown == 0){
          countdown = 120;
          val.removeAttribute('disabled');
          val.value = '重新发送';
          val.style.color = '#FFF';
          val.style.backgroundColor = 'rgba(236,105,69,1)';
          
        }else{
            val.setAttribute('disabled',true);
            val.value = countdown + ' s';
            countdown--;
            val.style.color = '#FFF';
            val.style.backgroundColor = 'rgba(236,105,69,.5)';
        }
        setTimeout(function(){
          settime(val);
        },1000);
               
      }
      if($second.length>0){
        $second[0].onclick = function(){
          settime(this);
          var oCode = document.getElementById('code');
          var tt1 = setTimeout(function(){  
                  oCode.style.display = 'block'; 
          },1000);
          var tt2 = setTimeout(function(){
                  oCode.style.display = 'none'; 
                  clearTimeout(tt1);
          },2666);
        }
      }
};
log.secondCount();