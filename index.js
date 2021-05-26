// Code your solution in this file!

/*
const arrayToCut = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const n = 5 //get the first 5 items
const newArray = arrayToCut.slice(0, n) 
*/
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers){

drivers = drivers.slice (0, 2)
   
return drivers
}
function returnLastTwoDrivers(drivers){

drivers = drivers.slice(-2)
    
return drivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){

    return totalFare => totalFare * integer
    
}
function fareDoubler(fare){
    return (fare) * 2;

}
function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers( firstNamesArray ,driverFunction){
    return driverFunction(firstNamesArray) 
}
