class BaseError extends Error {
    constructor(name, statuseCode, description, details) {
        super(description);
        this.name = name;
        this.statuseCode = statuseCode;
        this.details = details;
    }
}


module.exports =  BaseError