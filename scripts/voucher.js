// voucher page
let data = JSON.parse(localStorage.getItem('user'));
let total = data[0].wallet;
console.log(total);
document.getElementById('wallet_balance').innerText = total;

async function getVoucher(){
    let url = 'https://masai-vouchers-api.herokuapp.com/api/vouchers';

    let res = await fetch(url);
    let data = await res.json();

    displayData(data[0].vouchers);
    
    // console.log(data[0].vouchers);
}

displayData = (data) => {

    data.forEach((ele)=>{
        let div = document.createElement('div');
        div.setAttribute('id','voucher');
    
        let img = document.createElement('img');
        img.src = ele.image;

        let p1 = document.createElement('p');
        p1.innerText = ele.name;

        let p2 = document.createElement('p');
        p2.innerText =ele.price;

        let btn = document.createElement('button');
        btn.setAttribute('class','buy_voucher');
        btn.innerText = "Buy Voucher"
        btn.addEventListener('click',()=>{
            buy_vouchers(ele);
        })

        div.append(img,p1,p2,btn);
        document.querySelector('.voucher_list').append(div);
    })
    
}

let voucher = [];

buy_vouchers = (ele) => {
    total = total-ele.price;
    if(total>0){
        alert('Hurray! purchase successful');
        document.getElementById('wallet_balance').innerText = total;
        voucher.push(ele);
        localStorage.setItem('purchase',JSON.stringify(voucher));
        localStorage.setItem('price',JSON.stringify(total));
    }else{
        alert('Sorry! insufficient balance');
    }
}

getVoucher();