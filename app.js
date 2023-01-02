const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click",(e)=>{
    coupon.select()
    coupon.setSelectionRange(0,999999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent="คัดลอกเรียบร้อย!"
    setTimeout(()=>{
        btn.textContent="คัดลอกที่นี่"
    },3000)
})

//console.log("เริ่มต้นคัดลอกข้อความ")