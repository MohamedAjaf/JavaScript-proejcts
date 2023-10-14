const form=document.querySelector('#form')
const username=document.querySelector("#username")
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    if(!validateinputs()){
        e.preventDefault();  //shows if error is found
    }
})

function validateinputs(){
    const usernameval=username.value.trim()
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword.value.trim()
    let success=true;
    if(usernameval===''){
        success=false;
        setError(username,'Username is required');  
    }
    else{
        setsuccess(username);
    }

    if(emailval===''){
        success=false;
        setError(email,'Email is required');  
    }
    else if(!validateemail(emailval)){
        success=false;
        setError(email,'Please enter valid email')
    }
    else{
        setsuccess(email);
    }

    if(passwordval===''){
        success=false;
        setError(password,'Password is required and must be 8 characters long');  
    }
    else if(passwordval.length<8){
        success=false;
        setError(password,'Password entered is less than 8 characters');
    }
    else{
        setsuccess(password);
    }

    if(cpasswordval===''){
        success=false;
        setError(cpassword,'Password must be 8 characters long');  
    }
    else if(cpasswordval!=passwordval){
        success=false;
        setError(cpassword,'Password does not match');
    }
    else{
        setsuccess(cpassword);
    }
    
    return success;
}

function setError(element,message){
    const input_group=element.parentElement;
    const errorElement=input_group.querySelector(".error")
    errorElement.innerText=message;
    input_group.classList.add('.error')
    input_group.classList.remove('success')
}

function setsuccess(element){
    const input_group=element.parentElement;
    const errorElement=input_group.querySelector(".error")
    errorElement.innerText='';
    input_group.classList.add('success')
    input_group.classList.remove('.error')
}

const validateemail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}