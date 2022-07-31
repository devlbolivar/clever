

export interface state{
	events: event[] | [];
	addEvent: ()=> void;
    displayedDate: Date;
    onBackwardDate: ()=> void;
    onForwardDate:()=> void;
    currentDate: Date;
    onCurrentDate: ()=> void;
}

export interface calendar {
	year?: number;
	month?: number;
	events: event[];
}

export interface event {
		id: number;
		name: string;
		dateFrom: string;
		dateTo: string;
		description: string;
		type: string;
}


export interface gridCell {
		date: { date: Date; events: event[]; };
		currentDate: Date;
		displayedDate: Date;
}

export interface eventLabel {
	event: event;
}

export interface gridCalendar{
	date: Date;
	actualDate: Date;
	setEventInModal: React.Dispatch<React.SetStateAction<event | null>>;
}

export interface calendarProvider{
	events?: event[] ;
	children: React.ReactNode;
}