import { createStore } from "vuex";
import UserModule from './user.module'
import AirportsModule from './airports.module'
// Create store for Manage the favorite list
export default createStore({
    modules:{
        user:UserModule,
        airports: AirportsModule
    }
})