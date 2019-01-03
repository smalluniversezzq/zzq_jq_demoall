window.onload = function(){
    //console.log("ctx: " + "${ctx}");
    var name = getCookie("loginUserName");
    document.getElementById("passWord").value="";
    if(name != null && name != "") {
     document.getElementById("userName").value = name;      
     document.getElementById("passWord").focus();
    } else {  document.getElementById("userName").focus();
    }
}
   function checkform(){
    var isChecked = document.getElementById("saveUserName").checked;
        if(isChecked){
        setCookie("loginUserName",userName);
    } 
   }