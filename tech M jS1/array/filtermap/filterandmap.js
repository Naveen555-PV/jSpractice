//filter method

 var numbers = [400,500,600,700];

 var afterfilter = numbers.filter(function(value,index){
    if(value > 500){
        return true;
    }
    else {
       return false;
    }
})

 console.log('Before filter',numbers);//400 500 600 700
 console.log('After filter',afterfilter); //600 700



 
 //using arrow function (single line)
 //js engine adds the return statement

var valueafterFilter = numbers.filter(val => val>200);
 console.log(valueafterFilter);
