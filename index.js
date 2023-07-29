//distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.
const distanceFromHqInBlocks = function(pickup) {
  return Math.abs(pickup - 42);
}
//distanceFromHqInBlocks(43);


//distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location. 
const distanceFromHqInFeet = function(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}


//distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and an ending block.
const distanceTravelledInFeet = function(start, destination) {
  return Math.abs(start - destination) * 264;
}


//calculatesFarePrice: Given the same starting and ending block, it returns the fare for the customer.
function calculatesFarePrice(start, destination) {
  //each one dollar is 100 cents, we will need that in the second condition
  let feetNumber = distanceTravelledInFeet(start, destination);
  if (feetNumber <= 400) {
      return 0;
  } else if (feetNumber > 400 && feetNumber <= 2000) {
      return (feetNumber - 400) * 2 / 100;
  } else if (feetNumber > 2000 && feetNumber <= 2500) {
      return 25;
  } else if (feetNumber > 2500) {
      return 'cannot travel that far';
  }
}