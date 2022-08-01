import {createContext} from 'react';
import {state, event} from '../utils/types';


const initialState:state = {
	events: [],
	addEvent: ()=>{},
	displayedDate: new Date(),
    onBackwardDate: ()=> {},
    onForwardDate:()=> {},
    currentDate: new Date(),
    onCurrentDate: ()=> {},
    eventDisplayed: undefined,
    handleEventDisplayed:(event:event)=> {},
    isModalOpen: false,
    handleModalOpenClose: ()=> {},
}

const CalendarCtx = createContext(initialState);

export default CalendarCtx;