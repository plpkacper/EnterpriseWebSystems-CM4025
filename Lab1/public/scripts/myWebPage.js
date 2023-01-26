
/*
This file runs the specific website code.
*/

$(document).ready(function(){
    $("#calcButton").click(function() {
        var s = $("#salary").val();
        var d = $("#days").val();
        console.log("Calculating price");
        console.log(s);
        console.log(d);
        let finalPrice = 0;
        dailyRate = s/365;
        finalPrice = dailyRate * d;
        finalPriceAdjusted = Math.round(finalPrice / 50)*50;
        $("#finalPrice").html(finalPriceAdjusted);
    })
});
    