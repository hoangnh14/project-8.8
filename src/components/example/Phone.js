import React from 'react';


const Phone = (props) => {
        return (
            <div>
                <h1>{props.children}</h1>
                <ul>
                    <li><b>Tên:</b> {props.name}</li>
                    <li><b>Giá:</b> {props.price}</li>
                    <li><b>Màu:</b>  {props.color}</li>
                </ul>
                <hr></hr>
            </div>
        );
}

export default Phone;

