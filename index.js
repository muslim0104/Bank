let btn=document.querySelector('.b')
let inp2=document.querySelector('.anp')
const add=[]


function addUser(){
    let inp=document.querySelector('.anp').value

    let pass=document.querySelector('.pass').value

   
   


    
    


    

if (inp!=='' && pass!=='' ) {

  btn.setAttribute('href',"https://ru.stackoverflow.com/questions/829115/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-%D0%B2-local-storage")
  

   }
    
  
    
else{
  inp2.classList.add('red')  
  inp2.setAttribute('placeholder','Введите ваше имя!')
}
    
    
}





btn.addEventListener('click',addUser)
