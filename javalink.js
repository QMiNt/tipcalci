document.getElementById("q").addEventListener("click",calc);

function calc()
{
    let a=parseInt(document.getElementById("bill_i").value);
    let b=parseInt(document.getElementById("tipi").value);
    let c=parseInt(document.getElementById("nopi").value);
    let d=(b*a)/100;
    let e=d+a;
    document.getElementById("otip").value=(b*a)/100;
    document.getElementById("otpp").value=d/c;
    document.getElementById("totbil").value= e;
}
