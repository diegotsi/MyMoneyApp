import { combineReducers } from 'redux'

import dashboard from '../dashboard/reducer'
import tab from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    dashboard,
    tab
})

export default rootReducer