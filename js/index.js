var Name=document.getElementById("name");
var Price=document.getElementById("price");
var Category=document.getElementById("category");
var Desc=document.getElementById("desc");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");


    




var productContainer=[];

if(localStorage.getItem('product') !=null) {
productContainer=JSON.parse(localStorage.getItem('product'));
displayProduct();
console.log(productContainer);

}
else{
    productContainer=[]
    
}

function addProducts (){
if (validate()==true){
    var products={
        nameInput:Name.value,
        priceInput: Number(Price.value),
        CategoryInput:Category.value,
        descInput:Desc.value,
    }
    productContainer.push(products);
    
    localStorage.setItem("product", JSON.stringify( productContainer))
    
    
    clearProduct();
    console.log(productContainer);
    displayProduct ();
}else{
   window.alert("not valid")
}
}

function clearProduct(){
    Name.value="";
    Price.value="";
    Category.value="";
    Desc.value="";
}



function displayProduct (){

 
    var cartoona="";
for (var i =0 ; i<productContainer.length;i++){
   
   cartoona+=`

    <tr >
        <td>${i+1}</td>
        <td>${productContainer[i].nameInput}</td>
        <td>${productContainer[i].priceInput}</td>
        <td>${productContainer[i].CategoryInput}</td>
        <td>${productContainer[i].descInput}</td>
        <td><button onclick="setProduct(${i})" class="btn btn-success">update</button></td>
        <td><button  onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>

    </tr>
    `
}
 
document.getElementById("tr").innerHTML=cartoona;

}

function deleteProduct(index){


productContainer.splice( index,1)
localStorage.setItem("product", JSON.stringify( productContainer))
displayProduct()

}

var updateIndex=0;

function setProduct(index){

Name.value=productContainer[index].nameInput;
Price.value=productContainer[index].priceInput;
Category.value=productContainer[index].CategoryInput;
Desc.value=productContainer[index].descInput;
updateIndex=index;

btn1.classList.add("d-none")
btn2.classList.remove("d-none")


}

function updateProduct( updateIndex){

    productContainer[updateIndex].nameInput=Name.value;
    productContainer[updateIndex].priceInput=Price.value;
    productContainer[updateIndex].CategoryInput=Category.value;
    productContainer[updateIndex].descInput=Desc.value;


    

 clearProduct();
console.log(productContainer);
displayProduct ();

 btn1.classList.remove("d-none")
 btn2.classList.add("d-none")

}
function searchProduct (term){

 var cartona=``;

    for(var i=0;i< productContainer.length ;i++){

if(productContainer[i].nameInput.toLocaleLowerCase().includes(term.toLocaleLowerCase())==true){
    cartona+= `<tr >
    <td>${i+1}</td>
    <td>${productContainer[i].nameInput}</td>
    <td>${productContainer[i].priceInput}</td>
    <td>${productContainer[i].CategoryInput}</td>
    <td>${productContainer[i].descInput}</td>
    <td><button onclick="setProduct(${i})" class="btn btn-success">update</button></td>
    <td><button  onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
   
   </tr>
   `
   
}

 
    }




    document.getElementById("tr").innerHTML=cartona;
}
function validate(){
var x =  /^[A-Z][a-z]{3,7}$/;

return x.test(Name.value);

}
