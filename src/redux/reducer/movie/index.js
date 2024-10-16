import { ActionType } from "../../action/action-type"

const initialState = {
    movies: [
        {
            name : 'code lab'
        }
    ],
    movie : {}
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.FETCH_MOVIES:
            return { ...initialState, movies: payload };
        case ActionType.SELECT_MOVIES:
            return { ...initialState, movie: payload };
        default: return state;
    }
}