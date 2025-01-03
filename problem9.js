function monthlySaving(array, number) {
    if (typeof array == "object") {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            var value = array[i];
            
            if (value >= 3000) {
                let temp = value - value*20/100;
                sum += temp;
            } else {
                sum += value;
            }  
        }
    
        let ans = sum - number;

        if (ans < 0) {
            console.log("earn more");
        } else {
            console.log(ans);
        }
    } else {
        console.log("invalid inuput");
    }
    
}



var Array = [1000, 2000, 3000];
number = 5400;

monthlySaving(Array, number);

