//=========valide==========;

//name;
var fname = document.getElementById('fname');
var fnameErr = document.getElementById('fnameErr');

//==department;
var dprtmnt = document.getElementById('dprtmnt');
var dprtmntErr = document.getElementById('dprtmntErr');

//==email;
var email = document.getElementById('email');
var emailErr = document.getElementById('emailErr');

//==phone;
var phn = document.getElementById('phn');
var phnErr = document.getElementById('phnErr');

//==addres;
var adrs = document.getElementById('adrs');
var adrsErr = document.getElementById('adrsErr');

//==nationality;
var nation = document.getElementById('nation');
var nationErr = document.getElementById('nationErr');

//==pass;
var pass = document.getElementById('pass');
var passErr = document.getElementById('passErr');


//== c pass;
var rePass = document.getElementById('rePass');
var rePassErr = document.getElementById('rePassErr');







// submit button function;
function subm(){
// name;
if(fname.value == ""){
    fnameErr.innerHTML = " * enter your Name";
    fname.focus();
    return false;
}

// dprtmnt;
if(dprtmnt.value == ""){
    dprtmntErr.innerHTML = " * enter your Department";
    dprtmnt.focus();
    return false;
}

// email;
if(email.value == ""){
    emailErr.innerHTML = " * enter your E-mail";
    email.focus();
    return false;
}


// phn;
if(phn.value == ""){
    phnErr.innerHTML = " * enter your Phone";
    phn.focus();
    return false;
}

// adrs;
if(adrs.value == ""){
    adrsErr.innerHTML = " * enter your Address";
    adrs.focus();
    return false;
}

// nation;
if(nation.value == ""){
    nationErr.innerHTML = " * enter your Nationality";
    nation.focus();
    return false;
}

// password;
    if(pass.value == ""){
        passErr.innerHTML = " * enter your Password";
        pass.focus();
        return false;
    }

    if(pass.value.length <= 7 ){
        passErr.innerHTML = " * enter atlist 8 Characters";
        pass.focus();
        return false;
    }
   

    // rePass;
if(rePass.value == ""){
    rePassErr.innerHTML = " * confirm your Password";
    rePass.focus();
    return false;
}

if(rePass.value != pass.value ){
    rePassErr.innerHTML = " *recheck your password";
    rePass.focus();
    return false;
}

}

// to remove error after intup in intupbox;
 
function errValid()
{
    //name;
    if(fname.value != '')
    {
        fname.style.border = 'none';
        fnameErr.innerHTML = "";
    }

     //dprtmnt;
     if(dprtmnt.value != '')
     {
         dprtmnt.style.border = 'none';
         dprtmntErr.innerHTML = "";
     }

      //email;
    if(email.value != '')
    {
        email.style.border = 'none';
        emailErr.innerHTML = "";
    }

     //phn;
     if(phn.value != '')
     {
         phn.style.border = 'none';
         phnErr.innerHTML = "";
     }

      //adrs;
    if(adrs.value != '')
    {
        adrs.style.border = 'none';
        adrsErr.innerHTML = "";
    }

     //nation;
     if(nation.value != '')
     {
         nation.style.border = 'none';
         nationErr.innerHTML = "";
     }

      //pass;
    if(pass.value != '')
    {
        pass.style.border = 'none';
        passErr.innerHTML = "";
    }

     //rePass;
     if(rePass.value != '')
     {
         rePass.style.border = 'none';
         rePassErr.innerHTML = "";
     }
}


//=====event add;
fname.addEventListener('blur', errValid)
dprtmnt.addEventListener('blur', errValid)
email.addEventListener('blur', errValid)
phn.addEventListener('blur', errValid)
adrs.addEventListener('blur', errValid)
nation.addEventListener('blur', errValid)
pass.addEventListener('blur', errValid)
rePass.addEventListener('blur', errValid)


//modal;

var trigger = document.getElementById('trigger');

trigger.addEventListener('click', function(){
    modal.style.display = "flex";
})

var close = document.getElementById('close');

close.addEventListener('click', function(){
    modal.style.display = "none";
})














