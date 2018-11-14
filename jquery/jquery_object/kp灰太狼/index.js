$(function () {
    var gameend = true;
    var inx = 0;
    //显示游戏规则
    $(".reus").click(function () {
        $(".reiu").stop().fadeIn(100);
    })
    //关闭游戏规则
    $(".remoreus").click(function (event) {
        $(".reiu").stop().fadeOut(100);
    })
    //开始游戏隐藏按钮
    $(".start").click(function () {
        $(this).stop().fadeOut(100);
        handleSpeend()
        wolfAnimation()
    })
    function handleSpeend() {
        $(".progerss").css({
            width: 180
        })
        var timer = setInterval(function () {
            var progersswid = $(".progerss").width();
            var fs = $("Fractions").text()
            var fx = 10;
           if(fs > fx){
               fx += 10;
           }
            progersswid -= 1;
            $(".progerss").css({
                width: progersswid
            })
            if (progersswid <= 0) {
                clearInterval(timer);
                $(".msk").stop().fadeIn(100);
                gameend = false;
            }
        }, 100)
    }
    // 重新开始
    $(".cxkx").click(function () {
        handleSpeend()
        $(".msk").stop().fadeOut(100);
        gameend = true;
        wolfAnimation();
        $(".Fractions").text(inx)
        console.log(inx)
    })
    //定义灰太狼动画的方法
    function wolfAnimation() {
        var wolg_1 = [
            "img/h0.png",
            "img/h1.png",
            "img/h2.png",
            "img/h3.png",
            "img/h4.png",
            "img/h5.png",
            "img/h6.png",
            "img/h7.png",
            "img/h8.png",
            "img/h9.png"]
        var wolg_2 = [
            "img/x0.png",
            "img/x1.png",
            "img/x2.png",
            "img/x3.png",
            "img/x4.png",
            "img/x5.png",
            "img/x6.png",
            "img/x7.png",
            "img/x8.png",
            "img/x9.png"]
        var posIndex = Math.round(Math.random() * 8);
        var coordinate = [
            { l: "97px", t: "115px" },
            { l: "17px", t: "159px" },
            { l: "187px", t: "142px" },
            { l: "14px", t: "220px" },
            { l: "100px", t: "192px" },
            { l: "197px", t: "213px" },
            { l: "28px", t: "293px" },
            { l: "117px", t: "276px" },
            { l: "203px", t: "296px" }];
        var $wolfimg = $("<img class='wolfimgs' src=''>");
        //取随机数组
        var posType = Math.round(Math.random() * 1) < 1 ? wolg_1 : wolg_2;
        window.wolfIndex = 0;
        window.wolfvalue = 4;
        var wolfTime = setInterval(function () {
            if( wolfIndex > wolfvalue){
                $wolfimg.remove()
                clearInterval(wolfTime);
                wolfAnimation();
            }
            $wolfimg.attr("src", posType[wolfIndex]);
            wolfIndex++;
        }, 300)
        if(gameend == false){
            $wolfimg.remove()
            clearInterval(wolfTime);
        }
        $(".container").append($wolfimg)
        $wolfimg.css({
            position: "absolute",
            left: coordinate[posIndex].l,
            top: coordinate[posIndex].t
        });
    gameRuels($wolfimg)
    }
    function gameRuels($wolfimg){
        $wolfimg.one("click",function(){
           var imgurl = $(this).attr("src")
           var ifxhhofhtl = imgurl.indexOf("x") >=0;
           wolfvalue = 9
            if(!ifxhhofhtl){
                $(".Fractions").text(parseInt($(".Fractions").text())+10)
            }else{
                $(".Fractions").text(parseInt($(".Fractions").text())-10)
            }
        })
    }
    
})