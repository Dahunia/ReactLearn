import { 
    CREATE_EVENT, 
    UPDATE_EVENT, 
    DELETE_EVENT, 
    FETCH_EVENTS, 
    LISTEN_TO_EVENT_CHAT, 
    CLEAR_COMMENTS,
    LISTEN_TO_SELECTED_EVENT,
    CLEAR_EVENTS,
    SET_FILTER,
    SET_START_DATE,
    RETAIN_STATE,
    CLEAR_SELECTED_EVENT} from "./eventConstants";

//const { sampleData } = require("../../app/api/sampleData");

const initialState = {
    events: [],
    comments: [],
    moreEvents: false,
    selectedEvent: null,
    lastVisible: null,
    filter: 'all',
    startDate: new Date(),
    retainState: false
};

export default function eventReducer(state = initialState, { type, payload }) {
    switch(type) {
        case CREATE_EVENT: 
            return {
                ...state,
                events: [...state.events, payload]
            };

        case UPDATE_EVENT: 
            return {
                ...state,
                events: [...state.events.filter(event => event.id !== payload.id), payload]
            };
            
        case DELETE_EVENT: 
            return {
                ...state,
                events: [...state.events.filter(event => event.id !== payload)]
            };

        case FETCH_EVENTS: 
            return {
                ...state,
                events: [...state.events, ...payload.events], // accumulate 
                moreEvents: payload.moreEvents,
                lastVisible: payload.lastVisible
            };
        /* case FETCH_EVENTS: 
            return {
                ...state,
                events: payload
            }; */
            
        case LISTEN_TO_EVENT_CHAT:
            return {
                ...state,
                comments: payload
            };

        case CLEAR_COMMENTS:
            return {
                ...state,
                comments: []
            };

        case LISTEN_TO_SELECTED_EVENT:
            return {
                ...state,
                selectedEvent: payload
            };

        case CLEAR_SELECTED_EVENT:
            return {
                ...state,
                selectedEvent: null
            }

        case CLEAR_EVENTS: 
            return {
                ...state,
                events: [],
                moreEvents: true   
            };

        case SET_FILTER: 
            return {
                ...state,
                retainState: false,
                moreEvents: true,
                filter: payload
            };

        case SET_START_DATE:
            return {
                ...state,
                retainState: false,  
                moreEvents: true,
                startDate: payload 
            };

        case RETAIN_STATE:
            return {
                ...state,
                retainState: true
            };

        default: return state;
    }
}