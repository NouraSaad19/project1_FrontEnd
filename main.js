


function change_img(imges){
let images = document.querySelectorAll('.imgs');

images.forEach(e=>{

    e.addEventListener("mousemove",(f)=>{

        e.src = imges
        

    })

})
}


// function change_color(color){
//     let images = document.querySelectorAll('.continer');
    
//     images.forEach(e=>{
    
//         e.addEventListener("mousemove",(f)=>{
    
//             e.style.background=color
            
    
//         })
    
//     })
//     }

//products page..
let image = ["https://www.ferra.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2021/03/01/09/4537964/bd7472c87da10190b5356e49ea1c0741652a6a9c.jpg","https://www.apple.com/newsroom/images/product/watch/standard/apple-watch-series4_09122018_LP_hero.jpg.og.jpg","https://www.evosmart.it/wp-content/uploads/2020/05/Apple-MacBook-Pro-13.jpg"];
let myImage = document.getElementById("slideshow")
i=0
function slideshow(){
    myImage.setAttribute('src',image[i])
    if (i == image.length -1){
        i = 0
    }
    else{
        i++
    }
    setTimeout(function(){
        slideshow();
    },5000)
}
slideshow()