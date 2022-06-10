import BaseName from '@/util/BaseName'
import ErrorUtil from '@/util/ErrorUtil'

class BoardCategory extends BaseName {
    constructor(name) {
        super(name)
        BaseName.freezeObject(this, BoardCategory)
    }
}

BoardCategory.createCategory = function(category) {
    ErrorUtil.typeCheck(category, 'string')
    return new BoardCategory(category)
}

Object.freeze(BoardCategory)
export default BoardCategory