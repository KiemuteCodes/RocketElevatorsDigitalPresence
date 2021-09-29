//declare constants
const values = {
    numberOfApartments:0,
    numberOfFloors:0,
    numberOfBasements:0,
    numberOfElevators:0,
    maximumOccupantsPerFloor:0,
    elevatorTotal:0,
    unitPriceElevator:0,
    installationFees:0,


}
//declare variables for Sections
let buildingType = document.getElemantById("buildingType");
let residential = document.getElementById("residential");
let commercial = document.getElementById("commercial");
let corporate = document.getElementById("corporate");
let hybrid = document.getElementById("hybrid");

//variables for product lines
let standard = document.getElementById("standard");
let premium = document.getElementById("premium");
let excelium = document.getElementById("excelium");
//variables for sections
let numberOfApartments = document.getElementById("numberOfApartments");
let numberOfFloors = document.getElementById("numberOfFloors");
let numberOfBasements = document.getElementById("numberOfBasements");
let numberOfBusinesses = document.getElementById("numberOfBusinesses");
let numberOfParkingSpaces = document.getElementById("numberOfParkingSpaces");
let maximumOccupantsPerFloor = document.getElementById("maxOccupantsPerFloor");
let hoursOfActivity = document.getElementById("hoursOfActivity");
let elevatorTotal = document.getElementById("elevatorTotal");
let unitPriceElevator = document.getElementById("unitPriceElevator");
let elevatorTotalPrice = document.getElementById("elevatorTotalPrice");
let installationFees = document.getElementById("installationFees");
let finalPrice = document.getElementById("finalPrice");

//hide each selection
residential.hidden = true;
commercial.hidden = true;
corporate.hidden= true;
hybrid.hidden = true;

//when a selection is made, other building types remain hidden

buildingType.onchange = changeBuilding;
residential.oninput = calculateResidential;
commercial.oninput = calculateCommercial;
corporate.oninput = calculateCorporate;
hybrid.oninput = calculateHybrid;

function changeBuilding() {
    if (RESIDENTIAL === true) {
        residential.hidden = false;
        commercial.hidden = true;
        corporate.hidden = true;
        hybrid.hidden = true;
    } else if (COMMERCIAL === true) {
        commercial.hidden = false;
        residential.hidden = true;
        corporate.hidden = true;
        hybrid.hidden = true; 
    }  else if (CORPORATE === true) {
        corporate.hidden = false;
        residential.hidden = true;
        commercial.hidden = true;
        hybrid.hidden = true;
}   else if (HYBRID === true) {
    hybrid.hidden = false;
    residential.hidden = true;
    commercial.hidden = true;
    corporate.hidden = true;
}
}
changeBuilding();