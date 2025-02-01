//1 productlarni yig'ib olish
//2 savatga qushish funksiyasi
//3 show selected funksiyasi
//4 show discount funksiyasi
//5 remove funksiyasi
//6 count funksiyasi
const count=document.getElementById("count")

const products={
    productArr:[
        
        {
            id:1,
            productname:"Iphone 13",
            price:4000,
        },
        {
            id:2,
            productname:"Iphone 13 pro",
            price:4500,
        },
        {
            id:3,
            productname:"Iphone 14",
            price:5000,
        },
        {
            id:4,
            productname:"Iphone 15",
            price:6000,
        },
        {
            id:5,
            productname:"Iphone 16",
            price:7000,
        },
        {
            id:6,
            productname:"Toys Bear",
            price:200,
        },
        {
            id:7,
            productname:"Toys Kukla",
            price:450,
        },
        {
            id:8,
            productname:"Toys lego",
            price:1000,
        },
        {
            id:9,
            productname:"Toys collection 1",
            price:1500,
        },
        {
            id:10,
            productname:"Toys collection 2",
            price:2000,
        },
        {
            id:11,
            productname:"Sumsung S19",
            price:5200,
        },
        {
            id:12,
            productname:"Sumsung S20",
            price:6400,
        },
        {
            id:13,
            productname:"Sumsung S21",
            price:7100,
        },
        {
            id:14,
            productname:"Sumsung S22",
            price:8000,
        },
        {
            id:15,
            productname:"Sumsung S23",
            price:10000,
        },
    ],
    productType:[
        {
            id:1,
            type:"All"
        },
        {
            id:2,
            type:"Iphone"
        },
        {
            id:3,
            type:"Toys"
        },
        {
            id:4,
            type:"Sumsung"
        },
    ],
    basketProduct:[],
    totalPrice:0,
    discount:10000,
    bought(id){
        const slectedProduct=this.productArr.find((productID)=>{
            return productID.id===id
        })
        if(slectedProduct){
            
            this.basketProduct.push(slectedProduct)
            this.totalPrice+=slectedProduct.price
            count.textContent++
            setTimeout(()=>{
                alert(`${slectedProduct.productname} mahsuloti savatga qo'shildi Narxi: ${slectedProduct.price}$`)
            },200)
        }else{
            alert(`Bunaqa mahsulot mavjud emas!`)
        }
    },
    showSelected(){
        const iteration_product=this.basketProduct.map((product, index)=>{
            return `${index+1}) ${product.productname}. Narxi ${product.price}$\n`
        })
        if(this.basketProduct.length>0){
            alert(iteration_product.join(""));
            alert(`Jami narx: ${this.totalPrice}$`);
        }else{
            alert(`Savatda mahsulot yuq`)
        }
    },
    showDiscount(){
        if(this.totalPrice>this.discount){
            const confirmed=confirm("Siz 10%lik chegirmaga ega buldingiz ishlatasizmi?")
            if(confirmed){
                alert(`Sizning mahsulotlaringiz chegirma narxi ${this.totalPrice-(this.totalPrice*0.1)}$`)
            }   
        }else{
            alert("Siz chegirmaga ega bo'lishingiz uchun 10000$dan ko'proq mahsulot xarid qilshingiz kerak!")
        }
    },
    delete(id) {
        const del = this.basketProduct.findIndex(product => product.id === id);
        if (del !== -1) {
            const delProduct = this.basketProduct[del];
            this.totalPrice -= delProduct.price;
            this.basketProduct.splice(del, 1);
            count.textContent = Math.max(0, parseInt(count.textContent) - 1); 
            setTimeout(() => {
                alert(`${delProduct.productname} mahsuloti savatdan o'chirildi`);
            }, 200);
        } else {
            alert(`Bunday mahsulot savatda mavjud emas!`);
        }
    },
    
    filterByCategory(type) {
        if (type === "All") {
            alert("All: \n" + this.productArr.map(p => `${p.productname} - ${p.price}$`).join("\n"));
            return;
        }
    
        const filteredProducts = this.productArr.filter(product => product.productname.toLowerCase().includes(type.toLowerCase()));
    
        if (filteredProducts.length > 0) {
            alert(`"${type}" turidagi mahsulotlar:\n` + filteredProducts.map(p => `${p.productname} - ${p.price}$`).join("\n"));
        } else {
            alert(`"${type}" turidagi mahsulotlar topilmadi!`);
        }
    },
    
    
    

    remove(){
        count.textContent=0
        this.basketProduct=[]
        this.totalPrice=0
    }
    
}

  
