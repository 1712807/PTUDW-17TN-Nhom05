function Signup()
{
    var btn_signup = document.getElementById("btn-signup");
    
    btn_signup.style.visibility="hidden";

    var btn_user = document.getElementById("user");

    btn_user.style.visibility="visible";

    
}

function searchAvailableKey(id_ButtonCLicked)
{
    var btn_clicked = document.getElementById(id_ButtonCLicked);
    var textInButton = btn_clicked.textContent;

    var show_data_search = document.getElementById("keyWord");
    show_data_search.innerHTML = textInButton;
}
