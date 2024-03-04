function solve(array){
   let result = array.split(/(?=[A-Z])/);
    return console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');