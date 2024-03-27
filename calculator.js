var zero=document.getElementById("zerobtn");
var one=document.getElementById("onebtn");
var two=document.getElementById("twobtn");
var three=document.getElementById("threebtn");
var four=document.getElementById("fourbtn");
var five=document.getElementById("fivebtn");
var six=document.getElementById("sixbtn");
var seven=document.getElementById("sevenbtn");
var eight=document.getElementById("eightbtn");
var nine=document.getElementById("ninebtn");
var plus=document.getElementById("plusbtn");
var minus=document.getElementById("minusbtn");
var multiply=document.getElementById("multiplybtn");
var divide=document.getElementById("dividebtn");
var ans=document.getElementById("equalbtn");
var ac=document.getElementById("acbtn");
var display=document.getElementById("display");
var expression="";
ac.addEventListener('click',function(){
    expression="";
    display.innerText="";
    
});
ans.addEventListener('click',function(){
    
    display.innerText=eval(expression);
    
});
zero.addEventListener('click',function(){
    expression+="0";
    display.innerText=expression;
    
});
one.addEventListener('click',function(){
    expression+="1";
    display.innerText=expression;
    
});
two.addEventListener('click',function(){
    expression+="2";
    display.innerText=expression;
    
});
three.addEventListener('click',function(){
    expression+="3";
    display.innerText=expression;
    
});
four.addEventListener('click',function(){
    expression+="4";
    display.innerText=expression;
    
});
five.addEventListener('click',function(){
    expression+="5";
    display.innerText=expression;
    
});
six.addEventListener('click',function(){
    expression+="6";
    display.innerText=expression;
    
});
seven.addEventListener('click',function(){
    expression+="7";
    display.innerText=expression;
    
});
eight.addEventListener('click',function(){
    expression+="8";
    display.innerText=expression;
});
nine.addEventListener('click',function(){
    expression+="9";
    display.innerText=expression;
});
plus.addEventListener('click',function(){
    expression+=" + ";
    display.innerText=expression;
});
minus.addEventListener('click',function(){
    expression+=" - ";
    display.innerText=expression;
});
multiply.addEventListener('click',function(){
    expression+=" * ";
    display.innerText=expression;
});
divide.addEventListener('click',function(){
    expression+=" / ";
    display.innerText=expression;
});

