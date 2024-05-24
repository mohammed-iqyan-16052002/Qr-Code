let text=document.getElementById('text')
let btn=document.getElementById('generate')
let code=document.getElementById('qrcode')
let img=document.getElementById('img')


btn.addEventListener('click',()=>{
    if(text.value ==""){
        text.style.boxShadow="0px 0px 3px 3px red"
        img.style.display='none'
    }
    else{
        img.style.display='block'
    }
    
    img.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+text.value;
    code.appendChild(img)
    text.value=""
    
})
