
const mortAmount = document.getElementById('mortAmount');
const mortTerm = document.getElementById('numOfYears');
const interestRate = document.getElementById('percentOfRate');
const repaymentSelect = document.getElementById('repayment');
const interestSelect = document.getElementById('interestOnly');
const repaymentBox = document.getElementById('repaymentContainer');
const interestBox = document.getElementById('interestOnlyContainer');
const preDisplay = document.getElementsByClassName('preResult');
const postDisplay = document.getElementsByClassName('postResult');
const preDisplay0 = preDisplay[0];
const postDisplay0 = postDisplay[0];
const dollarsOutline = document.getElementsByClassName('dollars')
const dollarsOutline0 = dollarsOutline[0];


function clearAll() {
   location.reload();
}

 function mTypeSelect(){
    
    repaymentBox.style.borderColor = "black";
        repaymentBox.style.backgroundColor = "white";
        interestBox.style.borderColor = "black";
        interestBox.style.backgroundColor = "white";

    if (repaymentSelect.checked){
        repaymentBox.style.borderColor = "hsl(61, 70%, 52%)";
        repaymentBox.style.backgroundColor = "hsl(61, 70%, 52%, 0.3)";
        interestSelect.checked = false;
        interestBox.style.borderColor = "black";
        interestBox.style.backgroundColor = "white";
    }
    else if (interestSelect.checked) {
        interestBox.style.borderColor = "hsl(61, 70%, 52%)";
        interestBox.style.backgroundColor = "hsl(61, 70%, 52%, 0.3)";
        repaymentSelect.checked = false;
        repaymentBox.style.borderColor = "black";
        repaymentBox.style.backgroundColor = "white";
    }
}

function calculate(){
    const inputsE = document.querySelectorAll('.radioBtnS');
    const dollarE = document.getElementById('requiredMessageDollar');
    const yearsE = document.getElementById('requiredMessageYears');
    const rateE = document.getElementById('requiredMessageRate');
    const typeE = document.getElementById('requiredMessageType');
    const yearsBoxE = document.getElementById('yearsBox');
    const dollarSymbolE = document.getElementById('dollarSymbol');
    const rateBoxE = document.getElementById('rateBox');
   const mortAmountValue = parseFloat(document.getElementById('mortAmount').value);
   const mortTermValue = parseFloat(document.getElementById('numOfYears').value);
   const interestRateValue = parseFloat(document.getElementById('percentOfRate').value) / 100;
   const paymentsF = document.getElementById('payments');
   const repayF = document.getElementById('totalRepay');
   const mortgageTypeValue = document.querySelector('input[name="payType"]:checked');
   
   

    let isValid = true
    

    inputsE.forEach((inputs , index) =>{
        if (inputs.value.trim() === "" || isNaN(Number(inputs.value))) {
            isValid = false

            switch(index){
                case 0:
                    dollarE.style.display = "block";
                    dollarSymbolE.style.backgroundColor = "red";
                    dollarsOutline0.style.borderColor = "red";
                break;

                case 1:
                    yearsE.style.display =  "block";
                    yearsBoxE.style.backgroundColor = "red";
                    mortTerm.style.borderColor = "red";
                break;

                case 2: 
                    rateE.style.display = "block";
                    rateBoxE.style.backgroundColor = "red";
                    interestRate.style.borderColor = "red";
                break;

            }
         } else{
            isValid = true
            switch(index){
                case 0:
                    dollarE.style.display = "none";
                    dollarSymbolE.style.backgroundColor = "hsl(202, 86%, 94%)";
                    
                break;

                case 1:
                    yearsE.style.display =  "none";
                    yearsBoxE.style.backgroundColor = "hsl(202, 86%, 94%)";
                break;

                case 2: 
                    rateE.style.display = "none";
                    rateBoxE.style.backgroundColor = "hsl(202, 86%, 94%)";
                break;                
            }            
        }
       console.log(isValid);
    });

        if (mortgageTypeValue) {
            isValid = true;
            typeE.style.display = "none";
            console.log(mortgageTypeValue);
        }
        else  {
            isValid = false;
            typeE.style.display = "block";
            
        }

        if(isValid){
          let monthlyPayment = 0
          let totalPayment = 0

          preDisplay0.style.display = "none";
          postDisplay0.style.display = "flex";

            if(repaymentSelect.checked){
              const monthlyRate = interestRateValue / 12
              const n = mortTermValue * 12
              

              monthlyPayment = (mortAmountValue * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -n));
              totalPayment = monthlyPayment * n;          
              paymentsF.value = "$" + monthlyPayment.toFixed(2);
              repayF.value = "$" + totalPayment.toFixed(2);
        }
            else if(interestSelect.checked){
              monthlyPayment = (mortAmountValue * interestRateValue) / 12;
              totalPayment = monthlyPayment * mortTermValue * 12;

              paymentsF.value = "$" + monthlyPayment.toFixed(2);
              repayF.value = "$" + totalPayment.toFixed(2);
              
         }
              
        }    
}




repaymentSelect.addEventListener('change', mTypeSelect);
interestSelect.addEventListener('change', mTypeSelect);





mTypeSelect();























