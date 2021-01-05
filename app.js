const imgContainer = document.getElementById("img-container");
const btn = document.querySelectorAll('.btn');
const left = document.getElementById("left");
const right = document.getElementById("right");
const pictures=['img-1','img-2','img-3','img-4','img-5']
let counter=0;
imgContainer.style.backgroundImage = `url('./imgs/${pictures[counter]}.jpg')`;
btn.forEach((a)=>{
    a.addEventListener('click',(e)=>{
        if(a.classList.contains("left"))
        {
            counter--;
            if(counter<0){
                counter=pictures.length-1;
            }
            imgContainer.style.backgroundImage = `url('./imgs/${pictures[counter]}.jpg')`;
        }
        if(a.classList.contains("right"))
        {
            counter++;
            if(counter==pictures.length){
                counter=0;
            }
            imgContainer.style.backgroundImage = `url('./imgs/${pictures[counter]}.jpg')`;
            
        }
    })
});