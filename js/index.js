//加入购物车的加减
$(function () {
    let adds=$(".food .jj .jia");
    let jian=$(".food .jj .jians");
    let date=$(".food .jj span");
    let pics=$("footer .ads");
    let pic=$("footer .non");
    let tp=$(".ttp");
    console.log(adds, jian,date);
    let num=parseInt(date[0].innerHTML);
    adds.click(function () {
        jian.css("display","inline-block");
        date.css("display","inline");
        pics.css("display","block");
        pic.css("display","none");
        if(num>=100)return;
        num++;
        date[0].innerHTML=num;
        console.log(num);
    })
    jian.click(function () {
        if (num==0) return;
        num--;
        date[0].innerHTML=num;
    })

    //点击确认价格
    pics.click(function () {
        tp.css("display","block");
    })

})
