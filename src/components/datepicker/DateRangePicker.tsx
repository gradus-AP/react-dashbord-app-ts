import { FC, useContext } from 'react'
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { ChartContext } from '../../contexts/ChartContextProvider';

const DateRangePicker: FC = () => {

    const { dateRange, setStartDate, setEndDate } = useContext(ChartContext);

    return (<>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
                <DesktopDatePicker
                    label="start date"
                    inputFormat="YYYY-MM-DD"
                    value={dateRange.start}
                    onChange={(newValue: Dayjs | null) => {
                        setStartDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                    label="end date"
                    inputFormat="YYYY-MM-DD"
                    value={dateRange.end}
                    onChange={(newValue: Dayjs | null) => {
                        setEndDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    </>)

}

export default DateRangePicker