function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;    
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;    
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseInt(principal) + interest
    if ((principal == "") || (principal <= 0)){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }  

    document.getElementById("res").innerHTML= "If you deposit " +
                                              "<span class=nhighlight>"+principal+ "</span>" + 
                                               ",<br>" +
                                               "at an interest rate of" +
                                               " <span class=nhighlight>" + rate +"%</span>"+ 
                                               "<br>" +
                                               "You will receive an amount of " +
                                               "<span class=nhighlight>"+interest+ " </span>" +
                                               ",<br>in the year" +
                                               " <span class=nhighlight>"+year+"</span>"
                                               "<br>"     
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}        
