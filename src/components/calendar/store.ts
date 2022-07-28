import {createContext} from 'react';
import {events} from './types/types';
interface state{
	events: events[] | null;
}

const initialState:state = {
		events: null,
}


const CalendarContext = createContext(initialState);

export default CalendarContext;