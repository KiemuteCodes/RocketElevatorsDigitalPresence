var standard = 0.1;
var premium = 0.13;
var excelium = 0.16; 
var standardP = parseFloat(document.getElementById('standard').value);
var premiumP = parseFloat(document.getElementById('premium').value);
var exceliumP = parseFloat(document.getElementById('excelium').value);

function calculate(){
    if( $('#type').val() == 'Residential'){
        residential();
    }
    else if($('#type').val() == 'Commercial'){
        commercial();
    }
    else if($('#type').val() == 'Corporate'){
        corporate();
    }
    else if($('#type').val() == 'Hybrid'){
        hybrid();
    }
}

function residential(){
    var Napp = parseFloat(document.getElementById('residentialQuote1').value); //number of appartment
    var Nfloor = parseFloat(document.getElementById('residentialQuote2').value); //number of floor
    var DPF = Math.ceil(Napp/Nfloor); //average doors per floors
    var EN = Math.ceil(DPF/6); //elevators needed
    var TC = Math.ceil(Nfloor/20); //number of column

    console.log(Napp);
    console.log(Nfloor);
    console.log('door per floor', DPF);
    console.log('elevator needed', EN);
    console.log('number of column', TC);

    if(document.getElementById("standard").checked){
        console.log("quality is standard");
        if(Nfloor > 20){
            EN * 2;
        }
        var PE = standardP; //price for each elevator
        var EP = parseFloat(EN * standardP); //total price for all elevators
        var IF = EP * standard; //install fees
        var FP = EP + IF; //final price   
        console.log('final price for residential', FP);
    }
    else if(document.getElementById("premium").checked){
        console.log("quality is premium");
        if(Nfloor > 20){
            EN * 2;
        }
        var PE = premiumP; //price for each elevator
        var EP = parseFloat(EN * premiumP); //total price for all elevators
        var IF = EP * premium; //install fees
        var FP = EP + IF; //final price   
        console.log('final price for residential', FP);
    }
    else if(document.getElementById("excelium").checked){
        console.log("quality is excelium");
        if(TC > 20){
            EN * 2;
        }

        var PE = exceliumP; //price for each elevator 
        var EP = parseFloat(EN * exceliumP); //total price for all elevators
        var IF = EP * excelium; //install fees
        var FP = EP + IF; //final price   
        console.log('final price for residential', FP);
    }
    document.getElementById('EachElevatorPrice').value = PE;
    document.getElementById('install').value = IF;
    document.getElementById('cage').value = EP;
    document.getElementById('bigtotal').value = FP;
    document.getElementById('elevatorNeeded').value = EN;
    // document.getElementById('EachElevatorPrice').value = ;
}

function commercial(){
    var cage = parseFloat(document.getElementById('commercialQuote5').value);

    if(document.getElementById("standard").checked){
        console.log("quality is standard");
        var EN = cage; //elevator needed
        var PE = standardP; //price for each elevator
        var EP = parseFloat(cage * standardP); //total price for all elevators
        var IF = EP * standard; //install fees
        var FP = EP + IF; //final price   
        console.log('final price for commercial', FP);

        document.getElementById('install').value = IF;
        document.getElementById('cage').value = EP;
        document.getElementById('bigtotal').value = FP;
        document.getElementById('elevatorNeeded').value = EN;
        document.getElementById('EachElevatorPrice').value = PE;
    }
    else if(document.getElementById("premium").checked){
        console.log("quality is premium");
        var EN = cage; //elevator needed
        var PE = premiumP; //price for each elevator
        var EP = parseFloat(cage * premiumP); //total price for all elevators
        var IF = EP * premium; //install fees
        var FP = EP + IF; //final price   
        console.log('final price for commercial', FP);

        document.getElementById('install').value = IF;
        document.getElementById('cage').value = EP;
        document.getElementById('bigtotal').value = FP;
        document.getElementById('elevatorNeeded').value = EN;
        document.getElementById('EachElevatorPrice').value = PE;
    }
    else if(document.getElementById("excelium").checked){
        console.log("quality is excelium");
        var EN = cage; //elevator needed
        var PE = exceliumP; //price for each elevator
        var EP = parseFloat(cage * exceliumP); //total price for all elevators
        var IF = EP * excelium; //install fees
        var FP = EP + IF; //final price   
        console.log('Total Price for Commercial Elevator', FP);

        document.getElementById('install').value = IF;
        document.getElementById('cage').value = EP;
        document.getElementById('bigtotal').value = FP;
        document.getElementById('elevatorNeeded').value = EN;
        document.getElementById('EachElevatorPrice').value = PE;
    }
}    


function corporate(){
    var Nfloor = parseFloat(document.getElementById('corporateQuote2').value);
    var Nbas = parseFloat(document.getElementById('corporateQuote3').value);
    var PPF = parseFloat(document.getElementById('corporateQuote5').value); //people per floor
    var TF = Nfloor + Nbas; //total of floor
    var MaxP = PPF * TF; //total of people
    var NE = MaxP / 1000; //number of elevator
    var NC = TF / 20; //number of column
    var EPC = NE / NC; //number of elevator per column
    var TNE = EPC * NC; //total number of elevator

    console.log(Nfloor);

    if(document.getElementById("standard").checked){
        console.log("quality is standard");
        var TEP = standardP * TNE; //total price for all elevator
        var IF = TEP * standard; //install fees
        var TP = TEP + IF; //final price
        var PE = standardP; //price for each elevator
        console.log('final price for corporate', TP);
    }
    else if(document.getElementById("premium").checked){
        console.log("quality is premium");
        var TEP = premiumP * TNE; //total price for all elevator
        var IF = TEP * premium; //install fees
        var TP = TEP + IF; //final price
        var PE = premiumP; // price for each elevator
        console.log('final price for corporate', TP);
    }
    else if(document.getElementById("excelium").checked){
        console.log("quality is excelium");
        var TEP = exceliumP * TNE; //total price for all elevator
        var IF = TEP * excelium; //install fees
        var TP = TEP + IF; //final price
        var PE = exceliumP; // price for each elevator
        console.log('final price for corporate', TP);
    }
    console.log('number of column', NC);
    console.log('elevator per column', EPC);

    document.getElementById('elevatorNeeded').value = NE;
    document.getElementById('EachElevatorPrice').value = PE;
    document.getElementById('install').value = IF;
    document.getElementById('cage').value = TEP;
    document.getElementById('bigtotal').value = TP;
}

function hybrid(){
    var Nfloor = parseFloat(document.getElementById('hybridQuote2').value);
    var Nbas = parseFloat(document.getElementById('hybridQuote3').value);
    var PPF = parseFloat(document.getElementById('hybridQuote5').value); //people per floor
    var TF = Nfloor + Nbas; //total of floor
    var MaxP = PPF * TF; //total of people
    var NE = MaxP / 1000; //number of elevator
    var NC = TF / 20; //number of column
    var EPC = NE / NC; //number of elevator per column
    var TNE = EPC * NC; //total number of elevator

    console.log(Nfloor);

    if(document.getElementById("standard").checked){
        console.log("quality is standard");
        var TEP = standardP * TNE; //total price for all elevator
        var IF = TEP * standard; //install fees
        var TP = TEP + IF; //final price
        var PE = standardP; //price for each elevator
        console.log('final price for hybrid', TP);
    }
    else if(document.getElementById("premium").checked){
        console.log("quality is premium");
        var TEP = premiumP * TNE; //total price for all elevator
        var IF = TEP * premium; //install fees
        var TP = TEP + IF; //final price
        var PE = premiumP; //price for each elevator
        console.log('final price for hybrid', TP);
    }
    else if(document.getElementById("excelium").checked){
        console.log("quality is excelium");
        var TEP = exceliumP * TNE; //total price for all elevator
        var IF = TEP * excelium; //install fees
        var TP = TEP + IF; //final price
        var PE = exceliumP; //price for each elevator
        console.log('final price for hybrid', TP);
    }
    console.log('number of column', NC);
    console.log('elevator per column', EPC);

    document.getElementById('elevatorNeeded').value = NE;
    document.getElementById('EachElevatorPrice').value = PE;
    document.getElementById('install').value = IF;
    document.getElementById('cage').value = TEP;
    document.getElementById('bigtotal').value = TP;
}

$(document).ready(function(){
    $('.input1').hide();

    $('#type').change(function () {
        $('.input1').hide();
        $('#'+$(this).val()).show();
    });

    $('input:radio').change(function(){
        var value = $("input[type='radio']:checked").val();
        console.log("Value of Changed Radio is : " +value);
    })
});

