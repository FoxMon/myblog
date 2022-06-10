import ErrorUtil from './ErrorUtil'
import _ from 'lodash'

const ArrayUtil = {}

ArrayUtil.removeDuplicate = function(array) {
    // remove duplicate & prepare array
    return [ ...new Set(array) ]
}

ArrayUtil.prepareArr = function(array, type) {
    // not array? -> cast to array & prepare array
    const arr = ArrayUtil.removeDuplicate(_.castArray(array))
    // every elemenet of array must be same
    arr.forEach(a => ErrorUtil.instanceCheck(a, type))
    return arr
}

ArrayUtil.isEmpty = function(a) {
    return _.isEmpty(a)
}

Object.freeze(ArrayUtil)
export default ArrayUtil