const searchInput=document.getElementById("search-input");
const products=document.querySelectorAll(".product-item");
const buttons=document.querySelectorAll(".filter");
const priceInput=document.getElementById("price-range");

products.forEach(product => {
    
 const price = product.children[2].innerText.split(" ");
 console.log(price[1]);
 });

const changeClass = ( filter=>{
    buttons.forEach(button => {
        if(button.dataset.filter===filter){
            button.classList.add('selected')
        }else{
            button.classList.remove('selected')
        }
        
    });
}) 

const searchHandler= ((event)=>{
    event.preventDefault();  //to prevent page
    const searchValue=event.target.value.toLowerCase().trim();
   products.forEach(product => {
    const productName=product.children[1].innerText.toLowerCase();
     if(!productName.includes(searchValue)){
         product.style.display="block";
     }else{
        product.style.display="none"
     }
   })
});

const priceHandler = ((event) => {
 const searchedPrice = event.target.value;
 console.log(searchedPrice);
    products.forEach(product => {
        const price = product.children[2].innerText.split(" ");
        if(price === searchedPrice){
     
            product.style.display="blcok";
        }else{
            product.style.display ="none";
        }
    });



    })

const buttonFilterHandler = ((event) => {

    const filter=event.target.dataset.filter;
    console.log(filter);
    products.forEach(product=>{
        changeClass(filter);

        const  productCategory=product.dataset.category;
        if(filter ==="all"){
            product.style.display="block";
        }else{
            productCategory===filter ? (product.style.display="blocsk") 
            : (product.style.display="none")
        }
    })
    
})




searchInput.addEventListener("keyup" , searchHandler );
priceInput.addEventListener("keyup",priceHandler);
buttons.forEach(button =>{
    button.addEventListener('click' , buttonFilterHandler)
})
