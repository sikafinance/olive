const bill_Amount = document.querySelector("#bill_Amount");
const tip_Percentage = document.querySelector("#tip_Percentage");
const tip_Amount = document.querySelector("#tip_Amount");
const total_Amount = document.querySelector("#total_Amount");
const calculate = document.querySelector("#calculate");

calculate.addEventListener("click" , ()=>{
    if(bill_Amount.value > "100"){
        tip_Percentage.value = "10%";

        tip_Amount.value = Number(bill_Amount.value) / 10;
        total_Amount.value=Number(bill_Amount.value) + Number(tip_Amount.value)
    }
    else
        {
            confirm("please Enter Correct Value");
        }
})

calculate.addEventListener("click" , ()=>{
    if(bill_Amount.value > "300"){
        tip_Percentage.value = "5%";

        tip_Amount.value = Number(bill_Amount.value)* 5 / 100;
        total_Amount.value=Number(bill_Amount.value) + Number(tip_Amount.value)
        
    }
    else
        {
            confirm("please Enter Correct Value");
        }
})


calculate.addEventListener("click" , ()=>{
    if(bill_Amount.value > "500"){
        tip_Percentage.value = "3%";

        tip_Amount.value = Number(bill_Amount.value)* 3 / 100;
        total_Amount.value=Number(bill_Amount.value) + Number(tip_Amount.value)
        
    }
    else
        {
            confirm("please Enter Correct Value");
        }
})







