import moment from "moment";
import { useState } from "react";
import { useEffectOnce } from "react-unique-hooks";
import useInterval from "./useInterval";

function useCalendar(): Calendar {

    const [calendar, setCalendar] = useState<Calendar>({ weeks: [], month: "", year: 0, });

    function update() {
        const today = moment();

        const res: Calendar = { weeks: [], month: today.format("MMMM"), year: today.year() };

        let index = 1;

        while (index < 32) {

            const dt = moment(`${index++}-${today.month() + 1}-${today.year()}`, "D-M-YYYY");

            if (!dt.isValid()) break;

            const weekIndex = res.weeks.findIndex(w => w.week === dt.week());

            const week: CalendarWeek = res.weeks[weekIndex] || {
                week: dt.week(),
                days: new Array(7).fill(null).map((_, i) => ({ day: null, key: `${dt.year()}-${dt.month()}-${dt.week()}-${i}`, now: false } as CalendarDay)),
            };

            week.days[dt.weekday()] = { day: dt.date(), key: `${dt.week()}-${dt.weekday()}`, now: (dt.date() <= today.date()) };

            if (weekIndex === -1) res.weeks.push(week);

        }
        setCalendar(res);
    }

    useInterval(update, 1000);
    useEffectOnce(update);

    return calendar;
}

export default useCalendar




export type Calendar = {
    month: string;
    year: number;
    weeks: CalendarWeek[];
}

export type CalendarWeek = {
    week: number;
    days: CalendarDay[];
}

export type CalendarDay = {
    day: number | null;
    key: string;
    now: boolean;
}