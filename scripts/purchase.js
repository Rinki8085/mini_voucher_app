// purchase

let data = JSON.parse(localStorage.getItem('purchase'));
console.log(data);
let price = JSON.parse(localStorage.getItem('price'));
console.log(price);

window.addEventListener('load',()=>{
    displayVoucher(data);
})

displayVoucher = (data) =>{
    document.querySelector('#purchased_vouchers').innerHTML = null;
    document.getElementById('wallet_balance').innerText = price;
    data.forEach((ele,index)=>{

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = ele.image;

        let p1 = document.createElement('p');
        p1.innerText = ele.name;

        let p2 = document.createElement('p');
        p2.innerText = ele.price;

        let btn = document.createElement('button');
        btn.innerText = 'Remove';
        btn.addEventListener('click',()=>{
            removeVoucher(ele,index);
            price = price+ele.price;
            document.getElementById('wallet_balance').innerText = price;
        });

        div.append(img,p1,p2,btn);
        document.querySelector('#purchased_vouchers').append(div);
    })
}

removeVoucher = (ele,index) => {
    data.splice(index,1);
    localStorage.setItem('purchase',JSON.stringify(data));
   
    displayVoucher(data);
}