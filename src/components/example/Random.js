import React, { useState } from "react";

export default function Random(props) {
    const [number, setNumber] = useState(0)

    return (
        <div style={{ padding: "10%" }}>
            <b>{number}</b> <hr />
            <button onClick={() => {
                setNumber(Math.round(Math.random() * 100))
            }}>Random</button>
        </div>
    );
}