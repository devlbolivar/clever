import {createContext} from 'react';
import {state} from '../utils/types';


const initialState:state = {
	events: [],
	addEvent: ()=>{},
	displayedDate: new Date(),
    onBackwardDate: ()=> {},
    onForwardDate:()=> {},
    currentDate: new Date(),
    onCurrentDate: ()=> {},
}

const CalendarCtx = createContext(initialState);

export default CalendarCtx;