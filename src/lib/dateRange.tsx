import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

const getDays: (openTime: Dayjs, closeTime: Dayjs) => Dayjs[] = (openTime, closeTime) => {
    const ranges = []
    let currentDate = dayjs(openTime).startOf('date');

    while (currentDate.isBetween(openTime?.startOf('date'), closeTime?.startOf('date'), null, "[]")) {
        ranges.push(currentDate);
        currentDate = currentDate.add(1, 'day');
    }

    return ranges
}

export { isBetween, getDays }