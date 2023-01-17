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
const clear = document.querySelector("#clear");
const eliminar = document.querySelectorAll(".eliminar");

function updateTable(){
    let procDate = new Date(processDate.value);
    let cancDate = new Date(cancellationDate.value);
    let resMat = Math.round((cancDate.getTime() - procDate.getTime())/315360000.0)/100.0;
    let lgd = .72;
    let ECLStage1 = 0;
    let ECLStage2 = 0;


    alasql.promise('select MODEL from XLSX("data/industry.xlsx") where Local_Code = ? ', parseInt(indCode.value ))
        .then((res1) => {
            if (res1.length == 0){
                alert("invalid Industy Code");
            };
            let model = res1[0].MODEL;
            alasql.promise('select PD_0, PD_1, PD_2, PD_3,PD_4, PD_5, PD_6, PD_7, PD_8, PD_9, PD_10, PD_11, PD_12, PD_13, PD_14 from XLSX("data/pds.xlsx") where MODEL = "' + model  + '" and CRR2 = "' + crr.value + '"')
                .then((res2) => {
                    if (resMat >= 1) {
                        ECLStage1 = res2[0].PD_0.toFixed(4) * lgd * parseFloat(ead1.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -0.5);
                        ECLStage2 = ECLStage1;
                        if (resMat >= 2) {
                            ECLStage2 = ECLStage2 + res2[0].PD_1.toFixed(4) * lgd * parseFloat(ead2.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -1.5);
                            if (resMat >=3) {
                                ECLStage2 = ECLStage2 + res2[0].PD_2.toFixed(4) * lgd * parseFloat(ead3.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -2.5);
                                if (resMat >=4) {
                                    ECLStage2 = ECLStage2 + res2[0].PD_3.toFixed(4) * lgd * parseFloat(ead4.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -3.5);
                                    if (resMat >=5) {
                                        ECLStage2 = ECLStage2 + res2[0].PD_4.toFixed(4) * lgd * parseFloat(ead5.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -4.5);
                                        if (resMat >=6) {
                                            ECLStage2 = ECLStage2 + res2[0].PD_5.toFixed(4) * lgd * parseFloat(ead6.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -5.5);
                                            if (resMat >=7) {
                                                ECLStage2 = ECLStage2 + res2[0].PD_6.toFixed(4) * lgd * parseFloat(ead7.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -6.5);
                                                if (resMat >=8) {
                                                    ECLStage2 = ECLStage2 + res2[0].PD_7.toFixed(4) * lgd * parseFloat(ead8.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -7.5);
                                                    if (resMat >=9) {
                                                        ECLStage2 = ECLStage2 + res2[0].PD_8.toFixed(4) * lgd * parseFloat(ead9.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -8.5);
                                                        if (resMat >=10) {
                                                            ECLStage2 = ECLStage2 + res2[0].PD_9.toFixed(4) * lgd * parseFloat(ead10.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -9.5);
                                                            if (resMat >=11) {
                                                                ECLStage2 = ECLStage2 + res2[0].PD_10.toFixed(4) * lgd * parseFloat(ead11.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -10.5);
                                                                if (resMat >=12) {
                                                                    ECLStage2 = ECLStage2 + res2[0].PD_11.toFixed(4) * lgd * parseFloat(ead12.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -11.5);
                                                                    if (resMat >=13) {
                                                                        ECLStage2 = ECLStage2 + res2[0].PD_12.toFixed(4) * lgd * parseFloat(ead13.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -12.5);
                                                                        if (resMat >=14) {
                                                                            ECLStage2 = ECLStage2 + res2[0].PD_13.toFixed(4) * lgd * parseFloat(ead14.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -13.5);
                                                                            if (resMat >=15) {
                                                                                ECLStage2 = ECLStage2 + res2[0].PD_14.toFixed(4) * lgd * parseFloat(ead15.value) * Math.pow(1 + parseFloat(intRate.value)/100.0, -15)*(1-Math.pow((1+parseFloat(intRate.value)/100.0),-(resMat-15)))/parseFloat(intRate.value);

                                                                            } else {
                                                                                ECLStage2 = ECLStage2 + res2[0].PD_14.toFixed(4) * lgd * parseFloat(ead15.value) * (resMat - 14) * Math.pow(1 + parseFloat(intRate.value)/100.0, -15)*(1-Math.pow((1+parseFloat(intRate.value)/100.0),-(resMat-15)))/parseFloat(intRate.value);
                                                                            }
                                                                        } else {
                                                                        ECLStage2 = ECLStage2 + res2[0].PD_13.toFixed(4) * lgd * parseFloat(ead14.value) * (resMat - 13) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(13+(resMat-13)/2.0));
                                                                        }
                                                                    } else {
                                                                    ECLStage2 = ECLStage2 + res2[0].PD_12.toFixed(4) * lgd * parseFloat(ead13.value) * (resMat - 12) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(12+(resMat-12)/2.0));
                                                                    }
                                                                } else {
                                                                ECLStage2 = ECLStage2 + res2[0].PD_11.toFixed(4) * lgd * parseFloat(ead12.value) * (resMat - 11) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(11+(resMat-11)/2.0));
                                                                }
                                                            } else {
                                                            ECLStage2 = ECLStage2 + res2[0].PD_10.toFixed(4) * lgd * parseFloat(ead11.value) * (resMat - 10) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(10+(resMat-10)/2.0));
                                                            }
                                                        } else {
                                                        ECLStage2 = ECLStage2 + res2[0].PD_9.toFixed(4) * lgd * parseFloat(ead10.value) * (resMat - 9) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(9+(resMat-9)/2.0));
                                                        }
                                                    } else {
                                                    ECLStage2 = ECLStage2 + res2[0].PD_8.toFixed(4) * lgd * parseFloat(ead9.value) * (resMat - 8) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(8+(resMat-8)/2.0));
                                                    }
                                                } else {
                                                ECLStage2 = ECLStage2 + res2[0].PD_7.toFixed(4) * lgd * parseFloat(ead8.value) * (resMat - 7) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(7+(resMat-7)/2.0));
                                                }

                                            } else {
                                            ECLStage2 = ECLStage2 + res2[0].PD_6.toFixed(4) * lgd * parseFloat(ead7.value) * (resMat - 6) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(6+(resMat-6)/2.0));
                                            }
                                        } else {
                                        ECLStage2 = ECLStage2 + res2[0].PD_5.toFixed(4) * lgd * parseFloat(ead6.value) * (resMat - 5) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(5+(resMat-5)/2.0));
                                        }
                                    } else {
                                    ECLStage2 = ECLStage2 + res2[0].PD_4.toFixed(4) * lgd * parseFloat(ead5.value) * (resMat - 4) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(4+(resMat-4)/2.0));
                                    }
                                } else {
                                ECLStage2 = ECLStage2 + res2[0].PD_3.toFixed(4) * lgd * parseFloat(ead4.value) * (resMat - 3) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(3+(resMat-3)/2.0));
                                }
                            } else {
                            ECLStage2 = ECLStage2 + res2[0].PD_2.toFixed(4) * lgd * parseFloat(ead3.value) * (resMat - 2) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(2+(resMat-2)/2.0));
                            }
                        } else {
                            ECLStage2 = ECLStage2 + res2[0].PD_1.toFixed(4) * lgd * parseFloat(ead2.value) * (resMat - 1) * Math.pow(1 + parseFloat(intRate.value)/100.0, -(1+(resMat-1)/2.0));
                        }
                    } else {
                        ECLStage1 = res2[0].PD_0.toFixed(4) * lgd * parseFloat(ead1.value) * resMat * Math.pow(1 + parseFloat(intRate.value)/100.0, -resMat/2.0);
                        ECLStage2 = ECLStage1;
                    }
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
clear.addEventListener("click", () => {
    results.innerHTML = "";
})
let tabla = document.querySelector("#results");

tabla.addEventListener("dblclick", function (event) {
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function (){
		event.target.parentNode.remove();
	},500)	
});
