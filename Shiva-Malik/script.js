var code=document.getElementById("code").contentWindow.document;
var text= document.querySelector('#css');
var btn=document.querySelector('.btn');
btn.addEventListener("click",function(){

    text.select();
    document.execCommand('copy');
    if(text.value<1){
   
    }else{
        alert('copy');
    }
});

var textjs= document.querySelector('#js');
var jsbtn=document.querySelector('.jsbtn');
jsbtn.addEventListener("click",function(){

    textjs.select();
    document.execCommand('copy');
    if(textjs.value<1){
   
    }else{
        alert('copy');
    }
});
var texthtml= document.querySelector('#html');
var htmlbtn=document.querySelector('.htmlbtn');
htmlbtn.addEventListener("click",function(){

    texthtml.select();
    document.execCommand('copy');
    if(texthtml.value<1){
   
    }else{
        alert('copy');
    }
});
 function clear(){
    texthtml.value='';
  code.body.innerHTML='';
};

var btnclear=document.querySelector('.clearhtml');
btnclear.addEventListener('click',clear);
  
var clearcss=document.querySelector('.clearcss');
clearcss.addEventListener('click',()=>{
text.value='';
	if(js.value==''){
    code.body.innerHTML=html.value;  
}
});
var clearjs=document.querySelector('.clearjs');
clearjs.addEventListener('click',()=>{
textjs.value='';
code.body.innerHTML=html.value+"<style>"+text.value+"</style>";	
});
    
  
   







function initialise(){
			 
    var html=document.getElementById("html");
    var css=document.getElementById("css");
    var js=document.getElementById("js");
    
    
     
    document.body.onkeyup=function(){
        code.open();
      var content=html.value+
        "<style>"+css.value+"</style><script>"+js.value+"<\/script>";
        code.write(content);
        code.close();
    }
}
initialise();
