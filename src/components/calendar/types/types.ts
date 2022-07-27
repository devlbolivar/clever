export interface events {
		id: number;
		name: string;
		dateFrom: string;
		dateTo: string;
		description: string;
		type: string;
}

export interface calendarProps {
		year?: number;
		month?: number;
		events: events[];
}

export interface gridCellProps {
		date: { date: Date; events: events[]; };
		currentDate: Date;
		actualDate: Date;
}

export interface eventLabelProps {
	event: events;
}

export interface gridCalendarProps {
	date: Date;
	events: events[];
	actualDate: Date;
}