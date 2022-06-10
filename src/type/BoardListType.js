import ErrorUtil from '@/util/ErrorUtil'
import ArrayUtil from '@/util/ArrayUtil'
import BoardType from './BoardType'

class _BoardListType {
    constructor(_boardListTypeArray) {
        this._boardListTypeArray = _boardListTypeArray
    }

    asBoardListTypeObject() {
        const obj = {}
        this._boardListTypeArray.forEach(b => {
            obj[b.uuid] = {
                name: b.name,
                category: b.category,
                createAt: b.createAt,
            }
        })
        return obj
    }

    boardListTypeArray() {
        return this._boardListTypeArray
    }
}

const BoardListType = {}

BoardListType.createBoardListType = function(_boardTypeArray) {
    const boardTypeArray = ArrayUtil.prepareArr(_boardTypeArray, BoardType)
    ErrorUtil.assert(boardTypeArray.length > 1, 'Array length error')
    return _BoardListType(boardTypeArray)
}

BoardListType.createBoardListTypeAsName = function(_boardTypeArray) {
    const arr = _boardTypeArray.map(b => b.name)
    return arr
}

Object.freeze(BoardListType)
export default BoardListType