
export interface calendar {
	year?: number;
	month?: number;
	events: event[] | null;
}

export interface event {
		id: number;
		name: string;
		dateFrom: string;
		dateTo: string;
		description: string;
		type: string;
}


export interface gridCellProps {
		date: { date: Date; events: event[]; };
		currentDate: Date;
		actualDate: Date;
}

export interface eventLabelProps {
	event: event;
}

export interface gridCalendarProps {
	date: Date;
	actualDate: Date;
	setEventInModal: React.Dispatch<React.SetStateAction<event | null>>;
}