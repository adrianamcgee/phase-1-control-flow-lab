function scuberGreetingForFeet(rideHeight)
{ 
  let sample;
  if (rideHeight <= 400){
    sample = 'This one is on me!'
    return sample;
  } else {
    if (rideHeight <= 2000 || rideHeight >= 401){
      sample = 'That will be twenty bucks.';
      return sample;
    } else {
      if (rideHeight > 2001){
        sample = 'I will gladly take your thirty bucks.';
        return sample;
      }
    }
  }
  scuberGreetingForFeet(2002);
  // Write your code here!
}

function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
}