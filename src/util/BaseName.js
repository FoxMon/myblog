import ErrorUtil from "./ErrorUtil"

class BaseName {
    constructor(name) {
        ErrorUtil.invalidParameter(typeof name === 'string')
        this.name = name
    }
}

BaseName.freezeObject = function(obj, thisObj) {
    if(obj.contructor == thisObj) {
        Object.freeze(obj)
    }
}

Object.freeze(BaseName)
export default BaseName