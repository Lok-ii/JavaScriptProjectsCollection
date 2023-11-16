function initialise(){
			 
    var html=document.getElementById("html");
    var css=document.getElementById("css");
    var js=document.getElementById("js");
    var code=document.getElementById("code").contentWindow.document;
    
     
    document.body.onkeyup=function(){
        code.open();
        var content=html.value+"<stle>"+css.value+"</style><script>"+js.value+"<\/script>";
        code.write(content);
        code.close();
    }
}
initialise();