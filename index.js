const returnFirstTwoDrivers = function (arg) {
    return [arg[0], arg[1]]
}
const returnLastTwoDrivers = function (arg) {
    const length = arg.length
    return [arg[length-2], arg[length-1]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int){
    return function (fare){ return int*fare}
}
const fareDoubler = function (fare){
    return createFareMultiplier(2)(fare)
}
const fareTripler = function (fare){
    return createFareMultiplier(3)(fare)
}
const selectDifferentDrivers = function (names, func){
    return func(names)
}