const login = document.querySelector('#h2')
const inpuser = document.querySelector("#user")
const check1 = document.querySelector('.bi-check2')
const check2 = document.querySelector('.check2')
const check3 = document.querySelector('.check3')
const eye = document.querySelector('.bi-eye-fill')
const inpEmail = document.querySelector("#email")
const inpass = document.querySelector("#pass")
const user2 = document.querySelector('#user2')
const email2 = document.querySelector('#email2')



login.addEventListener('click', () => {

    login.parentElement.classList.toggle("close")



})

inpuser.addEventListener('input', (e) => {

    const uservalue = inpuser.value




    if (uservalue.search(/[a-z0-9_-]/) >= 0) {

            
        if (uservalue.search(/[ا-ی]/) >= 0) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1)
            console.log(uservalue);
            

        }

        if (uservalue.length > 5) {



            check1.style.opacity = '1'




        } else if (uservalue.length <= 5) {



            check1.style.opacity = '0'




        }


    } else {

        e.target.value = e.target.value.slice(0, e.target.value.length - 1)



    }





})

inpEmail.addEventListener('input', (e) => {

    // const uservalue = inpuser.value

    // console.log(uservalue);

    const userEmail = inpEmail.value

    if (e.target.value.search(/[a-z0-9@._-]/) >= 0) {
        if (userEmail.search(/[ا-ی]/) >= 0) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1)
      
            

        }




        if (userEmail.search(/[@]/) >= 0 && userEmail.search(/[.]/) >= 0) {
            console.log(inpEmail);


            check2.style.opacity = '1'




        } else if (userEmail.search(/[.]/) == -1) {



            check2.style.opacity = '0'




        }


    } else {

        e.target.value = e.target.value.slice(0, e.target.value.length - 1)



    }





})


/////////////////password//////////////////


inpass.addEventListener('input', (e) => {
    
    
    
    const userPass = inpass.value
    if (userPass.search(/[a-z]/) >= 0) {
    if (userPass.search(/[ا-ی]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    
    }
    if (userPass.search(/[A-Z]/) >= 0 && userPass.search(/[0-9]/) >= 0 && userPass.search(/[!@#$%^&*]/) >= 0 && userPass.length >= 8 ) {
         check3.style.opacity = '1'
        
    
    }else{
        check3.style.opacity = '0'
    }

    }
       
        
      
        
        

     


     else {

        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
        console.log(false);
        


    }





})



flag=0
eye.addEventListener('click' , ()=>{
    if (flag%2==0) {
        eye.classList.add('bi-eye-slash-fill')
        eye.classList.remove('bi-eye-fill')
       inpass.getAttribute('type','password')
        inpass.setAttribute('type','text')
        

    }else{
        eye.classList.remove('bi-eye-slash-fill')
    eye.classList.add('bi-eye-fill')
    inpass.setAttribute('type','password')
        inpass.getAttribute('type','text')
    }
    console.log(flag);
    flag++
})

user2.addEventListener('input', (e) => {

    const uservalue = user2.value




    if (uservalue.search(/[a-z0-9_-]/) >= 0) {

            
        if (uservalue.search(/[ا-ی]/) >= 0) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1)
            console.log(uservalue);
            

        }

        if (uservalue.length > 5) {



            check1.style.opacity = '1'




        } else if (uservalue.length <= 5) {



            check1.style.opacity = '0'




        }


    } else {

        e.target.value = e.target.value.slice(0, e.target.value.length - 1)



    }





})
email2.addEventListener('input', (e) => {

    // const uservalue = inpuser.value

    // console.log(uservalue);

    const userEmail = email2.value

    if (e.target.value.search(/[a-z0-9@._-]/) >= 0) {
        if (userEmail.search(/[ا-ی]/) >= 0) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1)
      
            

        }




        if (userEmail.search(/[@]/) >= 0 && userEmail.search(/[.]/) >= 0) {
            console.log(inpEmail);


            check2.style.opacity = '1'




        } else if (userEmail.search(/[.]/) == -1) {



            check2.style.opacity = '0'




        }


    } else {

        e.target.value = e.target.value.slice(0, e.target.value.length - 1)



    }





})
