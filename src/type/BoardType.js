import BaseName from '@/util/BaseName'
import BoardCategory from './BoardCategory'

class BoardType extends BaseName {
    constructor(uuid, name, category, createdAt) {
        super(name)
        this.uuid = uuid
        this.category = BoardCategory.createCategory(category)
        this.createdAt = createdAt
    }
}

Object.freeze(BoardType)
export default BoardType