const extraMemory = document.getElementById('extra-memory');
const bestPrice = document.getElementById('best-price');
const extraStorage = document.getElementById('extra-storage');
const extraDeliveryCharge = document.getElementById('extra-delivery-charge');
const totalPrice = document.getElementById('total-price');
const footerTotalInfo = document.getElementById('footer-total-info');

// this function for Total Price
function updateTotalPrice(){
    const totalExtraMemory = Number(extraMemory.innerText);
    const totalExtraStorage = Number(extraStorage.innerText);
    const totalExtraDeliveryCharge = Number(extraDeliveryCharge.innerText);
    const totalBestPrice = Number(bestPrice.innerText)

    const total = totalExtraMemory + totalExtraStorage + totalExtraDeliveryCharge + totalBestPrice;

    totalPrice.innerText = total;
    footerTotalInfo.innerText = total;
    return total;
}

// this function for pomo code
function updatePomoCode(){
    const pomo = document.getElementById('pomo-code');
    const pomoCode = pomo.value;

        // Pomo Code stevekaku
    if(pomoCode == 'stevekaku'){

       const usePomo = updateTotalPrice() - (updateTotalPrice()*20 / 100) ;
       footerTotalInfo.innerText = usePomo;
       totalPrice.innerText = usePomo;
    }
    pomo.value = '';
}

// extra memory section
document.getElementById('memory-8GB').addEventListener('click', function(){
    extraMemory.innerText = 0;
    updateTotalPrice()
});
document.getElementById('memory-16GB').addEventListener('click', function(){
    extraMemory.innerText = 180;
    updateTotalPrice()
});
// extra storage section
document.getElementById('storage-256GB').addEventListener('click', function(){
    extraStorage.innerText = 0;
    updateTotalPrice()
});
document.getElementById('storage-512GB').addEventListener('click', function(){
    extraStorage.innerText = 100;
    updateTotalPrice()
});
document.getElementById('storage-1TB').addEventListener('click', function(){
    extraStorage.innerText = 180;
    updateTotalPrice()
});
// Extra Delivery charge section
document.getElementById('normal-delivery').addEventListener('click', function(){
    extraDeliveryCharge.innerText = 0;
    updateTotalPrice()
});
document.getElementById('fast-delivery').addEventListener('click', function(){
    extraDeliveryCharge.innerText = 20;
    updateTotalPrice()
});

// pomo code apply 
document.getElementById('pomo-code-apply').addEventListener('click', function(){
    updatePomoCode();
});
