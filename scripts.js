function calculateTip(event) {
    event.preventDefault(); 
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('servicequal').value;
    let numPeople = document.getElementById('people').value;

    
    if(bill == '' | serviceQual == 0){
        alert("por favor, preencha os valores")
        return;
    }

    if(numPeople == "" | numPeople <= 1){
        numPeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQual) / numPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);