
class Validator {

    static required(value){
        return !!value; 
    }

    static between(from, to) {
        return (value) => {
            return value >= from && value <= to;
        };
    }

    static validate(key, value){
        const validators = this.validations()[key];
        if( validators ){
            const result = validators.reduce((prev, curr) => {
                return prev && curr(value);
            }, true);
            return result;
        }
        return true;
    }
}

export default Validator;