function validate()
{

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;


if(username=="admin" && password=="123456")
{
    alert("Login Succesfull");
    return false;
}

else
{
    alert("Login Failed");
}

}