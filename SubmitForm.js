
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
        // create li tag ,add text in li from input element,show this value
        
        //    const li=document.createElement('li');
        //    const text=document.createTextNode(`${nameInput.value} : ${emailInput.value}`);
        
        //    li.appendChild(text);
        //    li.classList.add('error')
        //    userslist.appendChild(li)


            //insert input value in to localstorage

            //    localStorage.setItem("name",nameInput.value);
            //    localStorage.setItem('email',emailInput.value)


       //insert it in to the local storage using object
        let myObj = {
            name: nameInput.value,
            email: emailInput.value

        };
        //convert object into the string 
        //make a object readable this is called serialize

        let myObj_serialize=JSON.stringify(myObj);
        //console.log(myObj_serialize);

       localStorage.setItem("MyobjKey",myObj_serialize);

        //convert string to normal object
        let myObj_desirialize=JSON.parse(localStorage.getItem('MyobjKey'));
        console.log(myObj_desirialize.name)




    
       alert('Success');

       //clear all fields
       nameInput.value="";
       emailInput.value="";
    }
}