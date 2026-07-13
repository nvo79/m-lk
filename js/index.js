window.addEventListener('load', function () {
    var $button = this.document.querySelector('.toggle-menu-button');
    var $menu = this.document.querySelector('.header-site-menu');

    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });

    let imgLength = 4,      //画像枚数
        imgWidth = 100;     //画像の幅
        count = 0;          //表示されている画像をカウント

    this.setInterval(function(){
        if(count>=imgLength){                                           //カウントが画像の枚数を超えた場合 
            count = 0;                                                      //カウントをリセット
            $(".slide ul").animate({"left":"0"},"slow");                    //画像を初期位置に戻す
        }else{                                                          //カウントが画像の枚数を超えていない場合
            count += 1;                                                     //カウントをプラス
            $(".slide ul").animate({"left":"-="+ imgWidth +"%"},"slow");    //次の画像へスライド
        }
    },3000)
    
});
