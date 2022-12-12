// Income today Calculation

firebase.firestore().collection("income").get().then((querySnapshot)=>{
    let income = 0;
    querySnapshot.forEach((doc)=>{

        let incomeAmount = doc.data().incAmount;
        let rnincAmount = parseInt(incomeAmount);
        let incomeDate = doc.data().incDate;

        //Get Todays Date
        let todaysDate = new Date();
        let thisMonth = todaysDate.getMonth();
        let thisYear = todaysDate.getFullYear();

        // 0-11 add
        thisMonth = thisMonth + 1;

        //Format month to 08
        if (thisMonth >10){
            thisMonth = "0" + thisMonth;
        }

        let thisDate = todaysDate.getDate();
        let todayFullDate = thisYear + "-" + thisMonth + "-" + thisDate;

        //Splitting Time from Date
        let splitDate = incomeDate.split("T");
        let firstIndex = splitDate[0];

        if(todaysFullDate == firstIndex){

            income = conAmou + income;

        }

        function toCommas(value){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    
        document.getElementById("todaysIncome").innerText = "KES." + toCommas(income);
    })
})