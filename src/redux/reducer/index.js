import { combineReducers } from "redux";
import ProfilePicReducer from "./ProfilePicReducer";
import MobileNumReducer from "./MobileNumReducer";
import UpdateCartReducer from "./UpdateCartReducer";


const appReducer = combineReducers({
    ProfilePicReducer,
    MobileNumReducer,
    UpdateCartReducer
})

export default appReducer;