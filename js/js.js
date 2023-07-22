var SiteNameName =document.getElementById('pName') 

var allProduct = []

if (localStorage.getItem('product') !=null){
    allProduct=JSON.parse(localStorage.getItem('product'))
    DisplayProducts()
}
function addProduct(){
    var product={
       websiteName : SiteNameName.value
    }
allProduct.push(product)
localStorage.setItem('product' , JSON.stringify(allProduct))
    console.log(allProduct);
    clearData()
    DisplayProducts()
}
function clearData(){
    SiteNameName.value=''
  
}
function DisplayProducts(){
    var cartona = ''
    for(i=0 ; i< allProduct.length ; i++){
        cartona+=`   <tr>
        <td>${i}</td>
        <td>${allProduct[i].name}</td>
        <td><button class="btn btn-danger">Visit</button></td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-success">Delete</button></td>
      </tr>`
    }
    document.getElementById('tData').innerHTML=cartona
}
function deleteProduct(index){
allProduct.splice(index , 1)
DisplayProducts()
localStorage.setItem('product',JSON.stringify(allProduct))
}
    
