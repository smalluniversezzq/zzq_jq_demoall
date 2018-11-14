$(function(){
    $("body").delegate(".text_area","properychange input",function(){
        if($(this).val().length>0){
            console.log(1)
             $(".btn_sub").prop("disabled",false);
        }else{
             console.log(10)
             $(".btn_sub").prop("disabled",true);
        }
    })

    // $(".text_area").change(function(){
    //    if($(this).val().length>0){
    //        console.log(1)
    //         $(".btn_sub").prop("disabled",false);
    //    }else{
    //         console.log(10)
    //         $(".btn_sub").prop("disabled",true);
    //    }
    // })
    $(".btn_sub").click(function(){
        let text = $(".text_area").val()
        let $textContent = `<div class="contents">
            <div class="content_top">
                <div class="content_top_left">
                    <img src="" alt="">
                </div>
                <div class="content_text">
                    <div class="text.title">一句话情诗表白</div>
                    <div class="text_time">
                        <span>4分钟前</span>
                        <span>来自 微博 weibo.com</span>
                    </div>
                    <div class="text_body">
                        ${text}
                        ${times()}
                    </div>
                </div>
            </div>
            <div class="content_foot">
                <ul class="content_foot_list  dis_f">
                    <li>收藏</li>
                    <li>转发</li>
                    <li>评论</li>
                    <li class="remover">删除</li>
                </ul>
            </div>
        </div>
        `
        $(".ctent").prepend($textContent);
        $(".text_area").val("");
    })
    $("body").delegate(".remover","click",function(){
        $(this).parents(".contents").remove()
    })
    function times(){
        var date = new Date();
        var timearr= [date.getFullYear()+"-",
        date.getMonth() + 1 +"-",
        date.getDate() + " ",
        date.getHours() + ":",
        date.getMinutes() + ":",
        date.getSeconds()
    ]
     var dates = timearr.join("")
       return dates
    }
})