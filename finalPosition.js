const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] ;

function finalPosition(moves){
  const currentPosition = [0,0];
  for(move of moves){
    if(move ==='north'){
      currentPosition[1]++
    }
    if(move === 'west'){
      currentPosition[0]--
    }
    if(move === 'east'){
      currentPosition[0]++
    }
    if(move === 'south'){
      currentPosition[1]--
    }
  }
  console.log(currentPosition);
}

finalPosition(moves);
