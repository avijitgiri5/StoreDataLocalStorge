
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
       const li=document.createElement('li');
       const text=document.createTextNode(`${nameInput.value} : ${emailInput.value}`);
       
    //    li.appendChild(text);
    //    li.classList.add('error')
    //    userslist.appendChild(li)

       //insert it in to the local storage
       localStorage.setItem(nameInput.value,emailInput.value);
       alert('Success');

       //clear all fields
       nameInput.value="";
       emailInput.value="";
    }
}