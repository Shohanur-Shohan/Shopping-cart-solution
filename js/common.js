// phone
// document.getElementById("phone-increase").addEventListener("click", function(){
//     handlePhoneChange(true);
// })
// document.getElementById("phone-decrease").addEventListener("click", function(){
//     handlePhoneChange(false);
// })

// function handlePhoneChange(isIncrease){
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount + 1;//
//     let phoneNewCount = phoneCount;
//     if( isIncrease == true ){
//         phoneNewCount = phoneCount + 1;
//     } 
//     if( isIncrease == false && phoneCount > 0 ){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// }

// case

// document.getElementById("case-increase").addEventListener("click", function(){
//     handleProductChange(true);

//     // const caseInput = document.getElementById("case-count");
//     // const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount + 1;
//     // caseInput.value = caseNewCount;
//     // const caseTotal = caseNewCount * 59;
//     // document.getElementById("case-total").innerText = caseTotal;
// })

// document.getElementById("case-decrease").addEventListener("click", function(){
//     handleProductChange(false);
// })

function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    // const productCount = productCount; //to work delete upper 2 lines

    // const productNewCount = productCount + 1;
    let productNewCount = productCount;
    if( isIncrease == true ){
        productNewCount = productCount + 1;
    }
    if( isIncrease == false && productCount > 0 ){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    // const productTotal = productNewCount * 59;
    let productTotal = 0;
    if( product == 'phone' ){
        productTotal = productNewCount * 1219;
    }
    if( product == 'case' ){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + "-total").innerText = productTotal;

    calculateTotal(); //added from subtotal
}

//Subtotal
function calculateTotal(){
    const phoneInput  = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);

    const subTotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById("sub-total").innerText = subTotal;

    // tax
    const tax = Math.round(subTotal * 0.1);
    document.getElementById("tax-amount").innerText = tax;

    // final-total
    const finalTotal = subTotal + tax;
    document.getElementById("final-total").innerText = finalTotal;

}

// function getInputValue(product){
//     const productInput = document.getElementById(product, "-count");
//     const productCount = parseInt(productInput.value);
//     return productCount;
// }
