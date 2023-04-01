const myform=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userslist=document.querySelector('#users');
const btn=document.querySelector('.btn');

myform.addEventListener("submit",onsubmit)
function onsubmit(e)
{
    e.preventDefault();
    if(nameInput.value=== '')
    {
        msg.classList.add('error');
        msg.innerHTML="Please enter Name fields"
        setTimeout(()=>msg.remove(),3000)
    }
    else if(emailInput.value=== '')
    {
        msg.classList.add('error');
        msg.innerHTML="Please enter Email fields"
        setTimeout(()=>msg.remove(),3000)
    }
    else{
        let myObj = {
            name: nameInput.value,
            email: emailInput.value

        };
        

        let myObj_serialize=JSON.stringify(myObj);

       localStorage.setItem(emailInput.value,myObj_serialize);

        
        alert('Success');

       //clear all fields
       nameInput.value="";
       emailInput.value="";
    }
}