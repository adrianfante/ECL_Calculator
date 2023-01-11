const run = document.querySelector("#run");
const custName = document.querySelector("#custName");
const intRate = document.querySelector("#intRate");
const processDate = document.querySelector("#processDate");
const cancellationDate= document.querySelector("#cancellationDate");
const crr = document.querySelector("#crr");
const indCode = document.querySelector("#indCode");
const ead1 = document.querySelector("#ead1");
const ead2 = document.querySelector("#ead2");
const ead3 = document.querySelector("#ead3");
const ead4 = document.querySelector("#ead4");
const ead5 = document.querySelector("#ead5");
const ead6 = document.querySelector("#ead6");
const ead7 = document.querySelector("#ead7");
const ead8 = document.querySelector("#ead8");
const ead9 = document.querySelector("#ead9");
const ead10 = document.querySelector("#ead10");
const ead11 = document.querySelector("#ead11");
const ead12 = document.querySelector("#ead12");
const ead13 = document.querySelector("#ead13");
const ead14 = document.querySelector("#ead14");
const ead15 = document.querySelector("#ead15");
const results = document.querySelector("#results");

function updateTable(){
    let procDate = new Date(processDate.value);
    let cancDate = new Date(cancellationDate.value);
    let resMat = (cancDate.getTime() - procDate.getTime())/31536000000.0;
    let lgd = .72;
    let ECLStage1 = 0;
    let ECLStage2 = 0;

    console.log("actualizamos la tabla");

    alasql.promise('select MODEL from XLSX("data/industry.xlsx") where Local_Code = ? ', parseInt(indCode.value ))
        .then((res1) => {
            let model = res1[0].MODEL
            alasql.promise('select PD_0, PD_1, PD_2, PD_3,PD_4, PD_5, PD_6, PD_7, PD_8, PD_9, PD_10, PD_11, PD_12, PD_13, PD_14 from XLSX("data/pds.xlsx") where MODEL = "' + model  + '" and CRR2 = "' + crr.value + '"')
                .then((res2) => {
                    if (resMat >= 1) {
                        ECLStage1 = res2[0].PD_0.toFixed(4)* lgd * parseFloat(ead1.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -0.5);
                    } else {
                        ECLStage1 = res2[0].PD_0.toFixed(4) * lgd * parseFloat(ead1.value) * resMat * Math.pow(1 + parseFloat(intRate.value)/100.0, -resMat/2.0);
                    }
                    ECLStage1.toFixed(2);
                    console.log(ECLStage1);
                    console.log(crr.value);
                    console.log(model);
                    console.log(res2[0].PD_0);
                    const fila = "<td>" + custName.value + "</td><td>" + intRate.value + "</td><td>" + processDate.value + "</td><td>" + cancellationDate.value  + "</td><td>" + crr.value + "</td><td>" + indCode.value + "</td><td>" + ead1.value + "</td><td>" + ead2.value + "</td><td>" + ead3.value + "</td><td>" + ead4.value + "</td><td>" + ead5.value + "</td><td>" + ead6.value + "</td><td>" + ead7.value + "</td><td>" + ead8.value + "</td><td>" + ead9.value + "</td><td>" + ead10.value + "</td><td>" + ead11.value + "</td><td>" + ead12.value + "</td><td>" + ead13.value + "</td><td>" + ead14.value + "</td><td>" + ead15.value + "</td><td>" + lgd + "</td><td>" + resMat.toFixed(2) + "</td><td>" + model + "</td><td>" + res2[0].PD_0.toFixed(4) + "</td><td>" + res2[0].PD_1.toFixed(4) + "</td><td>" + res2[0].PD_2.toFixed(4) + "</td><td>" + res2[0].PD_3.toFixed(4) + "</td><td>" + res2[0].PD_4.toFixed(4) + "</td><td>" + res2[0].PD_5.toFixed(4) + "</td><td>" + res2[0].PD_6.toFixed(4) + "</td><td>" + res2[0].PD_7.toFixed(4) + "</td><td>" + res2[0].PD_8.toFixed(4) + "</td><td>" + res2[0].PD_9.toFixed(4) + "</td><td>" + res2[0].PD_10.toFixed(4) + "</td><td>" + res2[0].PD_11.toFixed(4) + "</td><td>" + res2[0].PD_12.toFixed(4) + "</td><td>" + res2[0].PD_13.toFixed(4) + "</td><td>" + res2[0].PD_14.toFixed(4) + "</td><td>" + ECLStage1.toFixed(2) + "</td><td>" + ECLStage2.toFixed(2) + "</td>"
                    const fila2 = document.createElement("tr");
                    fila2.innerHTML = fila;
                    results.appendChild(fila2);

                })    
        })


}

run.addEventListener("click", (e) =>{
    e.preventDefault();
    updateTable();
})
