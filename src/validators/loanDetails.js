import Validator from './commonValidations';

class LoanDetailsValidator extends Validator{

    static validations() {
        return {
            amount: [this.required, this.between(0, 50000)],
            purpose: [this.purpose],
            duration: [this.required, this.between(0, 5)],

        }
    }

    static purpose(value){
        const result = value !== 'Medical';
        console.log('validate purpose', value, result);
        return result;
    }
}
export default LoanDetailsValidator;