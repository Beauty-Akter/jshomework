var dbname = "beauty";
var dbpass = "1234";
var person1 = "student";
var person2 = "madam";
var person3 = "sir";


document.querySelector("#submit").addEventListener("click",function(){

inputuser = document.querySelector("#name").value;
inputpass = document.querySelector("#pass").value;
inputperson = document.querySelector("#people").value;

if(dbname ===inputuser && dbpass ===inputpass && (person1==inputperson || person2 ==inputperson || person3 ==inputperson)){
    document.querySelector("#form").style.display="none";
    document.querySelector("#welcome").innerHTML="you are register";
    if(inputperson === person1){
        document.querySelector("#welcome").innerHTML="welcome student";
    }else if(inputperson === person2){
        document.querySelector("#welcome").innerHTML="welcome madam";
    }
    else if(inputperson === person2){
        document.querySelector("#welcome").innerHTML="welcome madam";
    }
}else if(dbname !==inputuser && dbpass ===inputpass && (person1==inputperson || person2 ==inputperson || person3 ==inputperson)){
    document.querySelector("#welcome").innerHTML="wrong user name"; 
}else if(dbname ===inputuser && dbpass !==inputpass && (person1==inputperson || person2 ==inputperson || person3 ==inputperson)){
    document.querySelector("#welcome").innerHTML="wrong user pass"; 
}else if(inputuser === "" || inputpass === "" && (person1==inputperson || person2 ==inputperson || person3 ==inputperson)){
    document.querySelector("#welcome").innerHTML="all field must fill"; 
}else{
    document.querySelector("#welcome").innerHTML="you are not allowed";
}






})
