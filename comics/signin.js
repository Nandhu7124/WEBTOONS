function login()
{
    var uname = document.getElementById("user").value;
    var pwd = document.getElementById("pass").value;
    if(uname =='')
    {
        alert("Please Enter your username");
    }
    else if(pwd=='')
    {
        alert("Enter the password");
    }
    else if(pwd.length < 6 || pwd.length > 6)
    {
        alert("Password min and max length is 6");
    }
    else
    {
   location.replace("home.html");
    }
}