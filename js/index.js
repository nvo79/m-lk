window.addEventListener('load', function () {
    var $button = this.document.querySelector('.toggle-menu-button');
    var $menu = this.document.querySelector('.header-site-menu');

    $(function(){

        // メニューボタンをクリック
        $(".toggle-menu-button").click(function(e){

            e.stopPropagation();

            $(".site-menu").slideToggle(300);
            $(".cover").fadeToggle(300);

        });


        // coverをクリックしたら閉じる
        $(".cover").click(function(){

            $(".site-menu").slideUp(300);
            $(".cover").fadeOut(300);

        });


        // nav内をクリックしても閉じない
        $(".site-menu").click(function(e){

            e.stopPropagation();

        });

        $(window).resize(function(){

        if(window.innerWidth > 800){

            $(".site-menu").removeAttr("style");
            $(".cover").removeAttr("style");

        }

    });

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
