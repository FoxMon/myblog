const ErrorUtil = {}

ErrorUtil.notImplemented = function() {
    console.log("This function is not implemented!")
    debugger
}

ErrorUtil.assert = function(command, msg) {
    if(!command || command == null) {
        console.log(`${msg} error!`)
        debugger
    }
}

ErrorUtil.invalidParameter = function(command) {
    if(!command || command == null) {
        console.log('Invalid parameter')
        debugger
    }
}

ErrorUtil.typeCheck = function(a, type) {
    if(typeof a != type) debugger
}

ErrorUtil.instanceCheck = function(a, type) {
    if(!(a instanceof type)) {
        console.log('Type check error!')
        debugger
    }
}

Object.freeze(ErrorUtil)