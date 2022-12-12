firebase.auth().onAuthStateChanged((user)=>{
    if (user){


        // Add income
        document.getElementByid("addIncome").onclick = function (){
            let incAmount = document.getElementByid(incAmount).value;
            let incDate = document.getElementByid(incDate).value;
            let incFrom = document.getElementByid(incAmount).value;
            let incDescr = document.getElementByid(incDescr).value;
            let pMethod = document.getElementByid(pMethod).value;

            let addIncome = firebase.firestore().collection("income").doc;
            addIncome.set({
                docId:addIncome.id,
                incDate:incDate,
                incAmount:incAmount,
                incFrom:incFrom,
                incDescr:incDescr,
                pMethod:pMethod

            }).then(()=>{
                window.location.relaod();
            })
        }

        // View Income

        firebase.firestore().collection("income").get().then((querySnapshot)=>{
            let content = '';
            querySnapshot.forEach((doc)=>{

                let incDate = doc.data().incDate;
                let incAmount = doc.data().incAmount;
                let incFrom = doc.data().incFrom;
                let incDescr = doc.data().incDescr;
                let pMethod = doc.data().pMethod;
                let docId = doc.data().docId;

                content += '<tr>';
                content += '<td>' + incAmount + '</td>';
                content += '<td>' + incDate + '</td>';
                content += '<td>' + incFrom + '</td>';
                content += '<td>' + incDescr + '</td>';
                content += '<td>' + pMethod + '</td>';
                content += '<td> <button class=btn btn-primary">Edit</button> </td>';
                content += '<td><button class=btn btn-primary">Edit</button> </td>';
                content += '</tr>';
            })
            $("#incomeList").append(content);

        })

    }else{
        
    }
})