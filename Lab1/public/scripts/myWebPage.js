
/*
This file runs the specific website code.
*/

$(document).ready(function(){
    $("#calcButton").click(function() {
        var s = $("#salary").val();
        var d = $("#days").val();
        var n = $("#quoteName").val();
        console.log("Calculating price");
        console.log(s);
        console.log(d);
        console.log(n);
        let finalPrice = 0;
        dailyRate = s/365;
        finalPrice = dailyRate * d;
        finalPriceAdjusted = Math.round(finalPrice / 50)*50;
        $("#finalPrice").html(finalPriceAdjusted);
        $.post('/saveQuote', { n: $("#quoteName").val(), s: $("#salary").val(), d: $("#days").val()});
    })

});



