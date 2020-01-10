import { RECIEVE_DATA } from '../action'


const reducer = (state = {}, { type, data }) => {
    switch (type) {
        case RECIEVE_DATA:
            return { ...state, weather: data.weather, main: data.main };
        default:
            return state;
    }
}
export default reducer;