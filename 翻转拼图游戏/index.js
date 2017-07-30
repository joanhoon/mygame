; (function ($) {
    // 声明变量
    var num = 2;
    var sum;
    var n;

    gameStart()
    function gameStart() {
        sum = num * num;
        eleInit()
        processClick()

    }
    //循环创建
    function eleInit() {
        //清空内容
        $('#board').html('')
        //循环创建div
        for (var i = 0; i < sum; i++) {
            if (i % num == 0 && i != 0) { $('#board').append('<br/>'); }
            $('#board').append('<div class="box">' + i + '</div>');
        }

    }
    //通过事件委托给每一个div.box绑定点击事件
    function processClick() {
        //解除之前的事件绑定
        $('#board').unbind();
        //事件绑定
        $('#board').on('click', ('div.box'), function () {
            var t = $(this).context.innerText - num;
            var b = ($(this).context.innerText - 0) + num;
            $(this).toggleClass('on')
            t < 0 ? null : $('#board>div.box').eq(t).toggleClass('on')
            $('#board>div.box').eq(b).toggleClass('on')
            $(this).next().toggleClass('on')
            $(this).prev().toggleClass('on')
            judge()
        })
    }
    //判断是否胜利
    function judge() {
        n = 0;
        //循环判断每一个元素是否有on这个类
        for (var i = 0; i < sum; i++) {
            if ($('#board>div.box').eq(i).hasClass('on')) {
                n++;
            }
        }
        //判断所有拥有on类名的数量是否等于box的总数
        if (n == sum) {
            setTimeout(function () {
                resetGame()
            }, 10);
        }
    }
    //游戏结束
    function resetGame() {
        alert('胜利')
        num++;
        gameStart()
    }
    
})(jQuery)


