export class FizzBuzz {
    answerFor(arg0: number): string | number {

        const contient3=this.contientChiffre(arg0,3);

        const contient5=this.contientChiffre(arg0,5);

       const isFizzNumber=isFizz (arg0)|| contient3 ;
       
        const isBuzzNumber=isBuzz(arg0) || contient5;
 
        if (isFizzNumber && isBuzzNumber) {
            return "FizzBuzz"; 
        }
        if (isFizzNumber) {
            return "Fizz"; 
        }
        if (isBuzzNumber) {
            return "Buzz";
        }
        return arg0; 
    }



private contientChiffre(number: number, chiffre: number): boolean {
    return number.toString().includes(chiffre.toString());
}
}
function isFizz(arg0: number){
    return arg0 % 3 === 0;
}

function isBuzz(arg0: number){
    return arg0 % 5 === 0;
}