import React from 'react'
import useClock from "../../hooks/useClock";

export default function Clock1() {

    //Gọi custom hook để sử dụng
    const [time, ampm] = useClock();

    return (
        <div id="MyClockDisplay" className="clock">
            {time}
            <span>{ampm}</span>
        </div>
    )
}

