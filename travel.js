$(document).ready(function(){
  $("#email").keyup(function(){
        var email = $("#email").val();
        
    var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     var emailaddressVal = $("#email").val();
  if(!regex.test(emailaddressVal)) {
    $("#check_email").html("enter proper email id");
  }else{

$("#check_email").html("");
     
     }
  });



  $("#phone").keyup(function(){
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      var phoneVal = $("#phone").val();
  if(!phoneno.test(phoneVal)) {
    $("#check_phone").html("enter valid phone number");
  }else{

$("#check_phone").html("");
     
     }
  });


   });


function verify()
{
  var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
email=document.getElementById("email").value;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var phoneVal = document.getElementById("phone").value;
var f_name=document.getElementById("f_name").value;
var l_name=document.getElementById("l_name").value;
var from=document.getElementById("from").value;
var to=document.getElementById("to").value;
var travel_date=document.getElementById("date").value;
var destination=document.getElementById("destination").value;
if(!(regex.test(email) && phoneno.test(phoneVal)))
{
  alert("check all data is entered properly");
  return false;

  }
  else if(f_name,l_name,from,to,destination=="")
  {
alert("check all data is filled");
   return false;

  }
  alert("form submitted successfully");
  return true;}

  

