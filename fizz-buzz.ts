interface FizzBuzz{

    go(num: number): string
}

export function createFizzBuzz(): FizzBuzz{

    function isPrime(num: number): boolean{
        if(num === 1) return false;
        for(let factor = 2; factor <= Math.sqrt(num); factor += 1){
            if(num % factor === 0 && num > factor) return false;
        }
        return true;

    }
    return{
        go: function(num: number): string {
            
            if(num === 3) return "FizzWhiz";
            if(num === 5) return "BuzzWhiz";
            if(num % 15 === 0) return "FizzBuzz";
            if(num % 5 === 0) return "Buzz";
            if(num % 3 === 0) return "Fizz";
            if(isPrime(num)) return "Whiz";
            return num.toString();
        }
    }
}