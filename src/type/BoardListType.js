import BoardType from './BoardType'
import BaseName from '@/util/BaseName'
import ErrorUtil from '@/util/ErrorUtil'
import ArrayUtil from '@/util/ArrayUtil'

class _BoardListType extends BaseName {
    constructor(_boardListTypeArray) {
        super("BoardListType")
        this._boardListTypeArray = _boardListTypeArray
        BaseName.freezeObject(this, _BoardListType)
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

    boardListtypeArrayOfNames() {
        return this._boardListTypeArray.map(b => b.name)
    }
}

const BoardListType = {}

BoardListType.createBoardListType = function(_boardTypeArray) {
    const boardTypeArray = ArrayUtil.prepareArr(_boardTypeArray, BoardType)
    ErrorUtil.assert(boardTypeArray.length > 1, 'Array length error')

    const btCateogry = boardTypeArray[0].category
    boardTypeArray.forEach(b => {
        // category check
        ErrorUtil.invalidParameter(b.category == btCateogry)
    })
    return _BoardListType(boardTypeArray)
}

Object.freeze(BoardListType)
export default BoardListType