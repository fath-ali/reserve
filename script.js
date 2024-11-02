// -----------------adding box here--------------------------------------------
const box = [
    {
        id:1,
        img:'images/bed1.jpg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now'
    },
    {
        id:2,
        img:'images/bed2.jpg',
        heading:'Double Bed',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now'
    },
    {
        id:3,
        img:'images/bed3.jpg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now'
    },
    {
        id:4,
        img:'images/bed4.jpeg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now'
    },
    {
        id:5,
        img:'images/bed5.jpg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
   
        btn4:'Book Now'
    },
    {
        id:6,
        img:'images/bed6.jpg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now'
    },
    {
        id:7,
        img:'images/bed1.jpg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now'
    },
    {
        id:8,
        img:'images/bed4.jpeg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now',
    },
    {
        id:9,
        img:'images/bed3.jpg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now'
    },
    {
        id:10,
        img:'images/bed3.jpg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now'
    },
    {
        id:11,
        img:'images/bed3.jpg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now'
    },
    {
        id:12,
        img:'images/bed3.jpg',
        heading:'VIP Rooms',
        p:'From $100',
        p2:'Single Bed',
        p3:'m12',
        btn4:'Book Now'
    }
] 
const boxes = document.querySelector('.boxes');

window.addEventListener("DOMContentLoaded", function() {
    // Assuming `box` is an array of objects with properties like `img`, `heading`, etc.
    let savbox = box.map(function(item, index2) {
        return `
        <div class="box">
            <div class="image-box">
                <img src="${item.img}" class="logo">
            </div>
            <div class="content-box">
                <h5>${item.heading}</h5>
                <p>${item.p}</p>
                <p>${item.p2}</p>
                <p>${item.p3} <sup>2</sup></p>
            </div>
            <button class="btn btn-block btn-success btn1" data-index="${index2}">${item.btn4}</button>
        </div>`;
    });    
    boxes.innerHTML = savbox.join('');
    console.log(boxes);
    
    let container20 = document.querySelector('.container20');
    // Select buttons after they have been added to the DOM
    const buttons = document.querySelectorAll('.btn1');
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const index = this.getAttribute('data-index');
            // console.log(`Button for item ${index} clicked`);
            container20.classList.add('active-show')           
            // Here you can handle the button click using the index
        });
    });
});

// ---------------------------------------adding image-------------------------------
const download = document.querySelectorAll('.icon');
const changeimages = document.querySelectorAll('.save');
const imagepreive = document.querySelectorAll(".image img");
const inputfile = document.querySelectorAll(".image input");
changeimages.forEach(function(change,index){
    change.addEventListener('click',function(){
        inputfile[index].click();
    });

    inputfile[index].addEventListener("change",function(){
        let file = inputfile[index].files[0];
         imagepreive[index].src = URL.createObjectURL(file);
         console.log(file);
    
    })
})
 
//  ------------------------------------------------finish here---------------------------------------
// ---------------------------------------------------download  start here -----------------------------
download.forEach(function(down,index){
    down.addEventListener('click',function(){
        const canvas = document.createElement('canvas');
             const ctx = canvas.getContext('2d');
             canvas.width = imagepreive[index].naturalWidth;
             canvas.height = imagepreive[index].naturalHeight
             ctx.translate(canvas.width/2,canvas.height/2);
             ctx.drawImage(imagepreive[index], -canvas.width/2,-canvas.height/2,canvas.width ,canvas.height);
        
             const linke = document.createElement('a');
             linke.download = 'image.jpg';
             linke.href = canvas.toDataURL()
             linke.click()
    });
})
// ---------------------------------------------End download ---------------------------------------------------------------
// ------------------------------------------------fORM STARGIN----------------------------------------------------------

const form = document.querySelector('.header form');
const btnbook = document.querySelector('.button1');
const close1 = document.querySelector('.hotemicon');
btnbook.addEventListener("click",function(){
    form.classList.add('active')
});
close1.addEventListener('click',function(){
    form.classList.remove('active')
})

// -----------------------------------------------Finish Here-------------------------------------------------------

const foodbox = [
    {   id:1,
        img:'images/g-2.jpg',
        h3:'paris',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',    
    },
    {
        id:2,
        img:'images/g-3.jpg',
        h3:'Indian',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    },
    {
        id:3,
        img:'images/food4.jpg',
        h3:'Afghanistan',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    },
    {
        id:4,
        img:'images/food1.jpg',
        h3:'Iran',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    },
    {
        id:5,
        img:'images/food5.jpg',
        h3:'American',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    },
    {
        id:6,
        img:'images/p-5.jpg',
        h3:'Pakistan',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    },
    {
        id:7,
        img:'images/p-4.jpg',
        h3:'Canada',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    },
    {
        id:8,
        img:'images/p-2.jpg',
        h3:'Tajikistan',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    },
    {
        id:9,
        img:'images/food7.jpg',
        h3:'Purtagules',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    },
    {
        id:10,
        img:'images/food6.jpg',
        h3:'Haland',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    },
    {
        id:11,
        img:'images/food7.jpg',
        h3:'Arabi',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    },
    {
        id:12,
        img:'images/food7.jpg',
        h3:'Ozbakistan',
        text:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  In consequuntur illo doloribus quo qui illum 
                  suscipit accusamus blanditiis. Nemo, doloremque.`,
        button:'Show Now',
    }
]
const foodbox1 = document.querySelector('.pakaches-food');
window.addEventListener('DOMContentLoaded',function(){
    let displaybox = foodbox.map(function(item2,index3){
        return ` <div class="food-box">
                <div class="foodimage">
                  <img src=${item2.img} alt="">
                </div>

                    <h3><i class="fas fa-map-marker-alt" style="color: orange;"></i> ${item2.h3}</h3>
                 <p>${item2.text}</p>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star star1"></i>
                </div>
                <p style="padding-top: 5px;">$90  <del>$100</del></p>
                <button  class"foodbtn" data-index="${index3}">${item2.button}</button>
              </div>`
    });
    displaybox =displaybox.join('');
    foodbox1.innerHTML = displaybox;
    
    const buttons = document.querySelectorAll('.food-box button');
    buttons.forEach(function(button){
         button.addEventListener('click',function(){
            const indexButton = this.getAttribute('data-index');
            const linke1 = document.createElement('a');
            linke1.href = 'login.html';
            linke1.click();
         });
        
    });
    
});

// ---------------------------------------------------About US ----------------------------------------------
// ----------------------------------learn More button -------------------------------------------------
const learnBtn = document.querySelectorAll('.content button');
const paragraphs = document.querySelectorAll('#p1');
learnBtn.forEach(function(learnBtn1,indexlearn){
    learnBtn1.addEventListener('click',function(){
       if(paragraphs[indexlearn].classList.contains('active')){
        paragraphs[indexlearn].classList.remove('active')
       }else{
        paragraphs[indexlearn].classList.add('active')
       }
    });
    
});
// ----------------------------------------Finish Here------------------------------------------------------------
// --------------------------------------------about us start here ------------------------------------------------
const buttonscontainer =document.querySelectorAll('.tab-btn');
const about = document.querySelector('.aboutus');
const content =document.querySelectorAll('.content');
const imageabout =document.querySelectorAll('.imageabout img');
about.addEventListener('click',function(e){
    let id = e.target.dataset.id;    
    if(id){
        buttonscontainer.forEach(function(btn){
            btn.addEventListener('click',function(){
                btn.classList.remove('active');
                e.target.classList.add('active')
            });
        });

        content.forEach(function(art){
            art.classList.remove('active')
        });
        let display =document.getElementById(id);
        display.classList.add('active')
       
        if(id ==='vision'){    
            imageabout.forEach(function(it){
                it.src = 'images/room1.jpg'
            })
        }
        else if(id =='goals'){
            imageabout.forEach(function(it){
                it.src = 'images/p-3.jpg'
            })
            
        }
        else if(id=='history'){
            imageabout.forEach(function(it){
                it.src = 'images//bed1.jpg'
            })
        }
    }
  
    
})

// -------------------------------------------Finish Here--------------------------------------------------------------

// ---------------------------------------service------------------------------------------------------------------
const services = [
    {
        id:1,
        icon:`  <i class="fas fa-hotel"></i>`,
        heading:'affordable hotels',
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam at, labore provident suscipit
                    reiciendis rerum libero, quam praesentium voluptatibus, maiores ipsa eius eaque necessitatibus?`
    },
    {
        id:2,
        icon:` <i class="fas fa-spoon"></i>`,
        heading:'food and drink',
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam at, labore provident suscipit
                    reiciendis rerum libero, quam praesentium voluptatibus, maiores ipsa eius eaque necessitatibus?`
    },
    {
        id:3,
        icon:` <i class="fas fa-bullhorn"></i>`,
        heading:'safety guide',
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam at, labore provident suscipit
                    reiciendis rerum libero, quam praesentium voluptatibus, maiores ipsa eius eaque necessitatibus?`
    }
    ,{
        id:4,
        icon:`<i class="fas fa-globe-asia"></i>`,
        heading:'around the world',
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam at, labore provident suscipit
                    reiciendis rerum libero, quam praesentium voluptatibus, maiores ipsa eius eaque necessitatibus?`
    },
    {

    
    id:5,
    icon:`   <i class="fas fa-plane"></i>`,
    heading:'fast travel',
    text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam at, labore provident suscipit
                reiciendis rerum libero, quam praesentium voluptatibus, maiores ipsa eius eaque necessitatibus?`
    },
    {
    id:6,
    icon:`<i class="fas fa-hiking"></i>`,
    heading:'adventurous',
    text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam at, labore provident suscipit
                reiciendis rerum libero, quam praesentium voluptatibus, maiores ipsa eius eaque necessitatibus?`
    }
]
const boxService = document.querySelector('.service-container');
window.addEventListener('DOMContentLoaded',function(){
    let display1 = services.map(function(itemservice,indexserviec){
         
        return` <div class="box-service">
          <i class="fas fa-hotel logo" data-index"${indexserviec}" >${itemservice.icon}</i>
      <h3>${itemservice.heading}</h3>
      <p>${itemservice.text}</p>
    </div>`

    });

    display1 =display1.join('');
    boxService.innerHTML = display1;
    const hotel  = document.querySelectorAll(".box-service .logo i");    
})


//  slide show
let carousel = document.querySelector(".carousel1");
let arrowbtn = document.querySelectorAll(".wrapper .icon");
let card = carousel.querySelector('.card').offsetWidth;
    arrowbtn.forEach(function(btn){
        btn.addEventListener("click",function(){
            carousel.scrollLeft +=btn.id ==='left' ? -card : card;
        })

});


                        //  ACCOURIONS
let accordion = document.querySelectorAll('.accord-item');
accordion.forEach(function(acc){
    acc.addEventListener("click",function(){
        acc.classList.toggle('active')
    })    
})



// ----------------------------paymnet methods------------------------------------------------
let container21 = document.querySelector('.container20');
let form1 = document.querySelector('#button');
let iconContainer = document.querySelector('.icon-book');
let inputs = document.querySelectorAll('.input1 input');
let input1 = document.querySelectorAll('.input2 input');
let input2 = document.querySelectorAll('.input3 input');
let input3 = document.querySelectorAll('.input10 input');
let input4 = document.querySelectorAll('.input4 input');
let input5 = document.querySelectorAll('.input5-input input');
let input6 = document.querySelectorAll('.input6-input input');
let sub = document.querySelector('.submision');
let paypal = document.querySelector('.paypal');
let pay = document.getElementById('pay');


iconContainer.addEventListener('click',function(){
    container21.classList.remove("active-show")
})





pay.addEventListener('click',function(){
    if(pay.checked){
        paypal.classList.add("active")
    }else{
        paypal.classList.remove('active')
    }
})
form1.addEventListener('click',function(e){
    e.preventDefault();
    form1.classList.toggle("active")
    inputs.forEach(function(input){
        console.log(input);
        if(input.value ===''){
            input.classList.toggle('disactive');
        }
        else{
            input.classList.toggle('active')
            sub.classList.toggle('show')
            setTimeout(() => {
                 sub.classList.remove('show')
            },3000);
        }
        
    })
    input1.forEach(function(input2){
        if(input2.value ===''){
            input2.classList.add('disactive')
        }
        else{
            input2.classList.add('active')
            sub.classList.toggle('show')
            
        }
        
    });
    input2.forEach(function(input4){
        if(input4.value ===''){
            input4.classList.add('disactive')
        }
        else{
            input4.classList.add('active')
            sub.classList.toggle('show')
        }
    });
    input3.forEach(function(input){
        if(input.value ===''){
            input.classList.add("disactive")
        }
        else{
            input.classList.add('active')
            sub.classList.toggle('show')
        }
    });
    input4.forEach(function(input){
        if(input.value ===''){
            input.classList.add('disactive');
        }else{
            input.classList.add('active')
            sub.classList.toggle('show')
        }
    });
     
    input5.forEach(function(input5item){
        if(input5item.value ===''){
            input5item.classList.add('disactive')
        }else{
            input5item.classList.add("active")
            sub.classList.toggle('show')
        }
    })
        
    input6.forEach(function(input6item){
    
       if(input6item.value === ''){
        input6item.classList.add("disactive")
       }else{
        input6item.classList.add('active');
        sub.classList.toggle('show')
       }
    })

    
});





// --------------------------------Finished Here------------------------------------------------