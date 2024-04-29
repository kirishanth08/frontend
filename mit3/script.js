function work(){
    var firstName = document.getElementById("firstnameb").value;
    var secondName = document.getElementById("lastnameb").value;
    var email = document.getElementById("emailb").value;
    var password = document.getElementById("passwordb").value;

    var firstNamebox = document.getElementById("firstnameb");
    var secondNamebox = document.getElementById("lastnameb");
    var emailbox = document.getElementById("emailb");
    var passwordbox = document.getElementById("passwordb");

    var resfirstName = document.getElementById("first-name");
    var ressecondName = document.getElementById("last-name");
    var resemail = document.getElementById("email");
    var respassword = document.getElementById("password");


    if(firstName == ""){
        resfirstName.innerHTML = "First Name cannot be empty"
        resfirstName.classList.add("red")        
        firstNamebox.classList.add("errorborder")
    }
    if(secondName == ""){
        ressecondName.innerHTML = "Last Name cannot be empty"
        ressecondName.classList.add("red")        
        secondNamebox.classList.add("errorborder")
    }
    if(password == ""){
        respassword.innerHTML = "Password cannot be empty"
        respassword.classList.add("red")        
        passwordbox.classList.add("errorborder")
    }
    else{      
        passwordbox.classList.remove("errorborder")
        emailbox.classList.remove("errorborder")
        secondNamebox.classList.remove("errorborder")
        firstNamebox.classList.remove("errorborder")
        resfirstName.classList.remove("red");
        ressecondName.classList.remove("red");
        resemail.classList.remove("red");
        respassword.classList.remove("red");
        resfirstName.innerHTML = ""
        ressecondName.innerHTML = ""
        resemail.innerHTML = ""
        respassword.innerHTML = "First Name cannot be empty"
    }

    if(email == ""){
        resemail.innerHTML = "Email Address cannot be empty"
        resemail.classList.add("red")        
        emailbox.classList.add("errorborder")
    }
    else if(email.slice(-10) != "@gmail.com"){
        resemail.innerHTML = "Email Address invalid"
        resemail.classList.add("red")        
        emailbox.classList.add("errorborder")
    }
    else{
        emailbox.classList.remove("errorborder")
        resemail.innerHTML = ""
    }
}






// Password and username should not be same
// Username should contain atleast 4 characters 
// Password should contain minimum 6 and maximum 16 characters 
// Password should contain atleast 1 uppercase
// Password should contain atleast 1 lowercase
// Password should contain atleast 1 number
// Password should contain atleast 1 special characters
