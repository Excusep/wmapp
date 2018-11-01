//加入购物车的加减
$(function () {
    let adds=$(".food .jj .jia");
    let jian=$(".food .jj .jians");
    let date=$(".food .jj span");
    let pics=$("footer .ads");
    let pic=$("footer .non");
    let tot=$(".ads span>i");
    let tp=$(".ttp");

    let sum=date.html();
    let math=tot.html();
    adds.click(function () {
        jian.css("display","inline-block");
        date.css("display","inline");
        pic.css("display","none");
        pics.css("display","block");

        sum++;
        date.html(sum);

        tot.html(math*sum);

    });
    jian.click(function () {
        if (sum==1){
            pic.css("display","block");
            pics.css("display","none");
            jian.css("display","none");
            date.css("display","none");
            return;
        }

        sum--;
        date.html(sum);
        tot.html(math*sum);
    });

    //点击确认价格
    pics.click(function () {
        tp.css("display","block");
    })

});
