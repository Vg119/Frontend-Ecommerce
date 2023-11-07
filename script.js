const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');

// when u click on out-indent the navbar comes out by changing the right space from -300 to 0
bar.addEventListener('click',()=>{

    navbar.classList.add('active');

})

const cross = document.getElementById('cross');
//when u click on cross , the navbar again goes back to right:-300px and hence vanishes
cross.addEventListener('click',()=>
{
    navbar.classList.remove('active');
})



const mainimg = document.getElementById('MainImg');
const smallimg = document.getElementsByClassName('SmallImg');

for(let i = 0;i<=3;i++)
{
    let str = mainimg.src;
    
   
   smallimg[i].onmouseover = function(){
        mainimg.src = smallimg[i].src;
    }


    smallimg[i].onmouseleave = function(){
        mainimg.src = str;
    }


  



}





