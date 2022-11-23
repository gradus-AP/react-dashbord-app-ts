import React, { createContext, useState, useContext, ProviderProps } from 'react';
import dayjs, { Dayjs } from 'dayjs';

type DateRange = {
    start: Dayjs | null;
    end: Dayjs | null;
}

type DateRangeContextType = {
    dateRange: DateRange;
    setStartDate: (startDate: Dayjs | null) => void;
    setEndDate: (endDate: Dayjs | null) => void;
}

export const ChartContext = createContext<DateRangeContextType>({
    dateRange: { start: null, end: null },
    setStartDate: (startDate) => { },
    setEndDate: (startDate) => { },
});

export const ChartContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [dateRange, setDateRange] = useState<DateRange>({ start: dayjs(new Date()).add(-28, 'day'), end: dayjs(new Date()) });

    const setStartDate: (startDate: Dayjs | null) => void = (startDate) => {
        const newDateRange = { ...dateRange }
        newDateRange.start = startDate
        setDateRange(newDateRange)
    }

    const setEndDate: (endDate: Dayjs | null) => void = (endDate) => {
        const newDateRange = { ...dateRange }
        newDateRange.end = endDate
        setDateRange(newDateRange)
    }

    return (
        <ChartContext.Provider value={{ dateRange, setStartDate, setEndDate }}>
            {children}
        </ChartContext.Provider>
    )
}