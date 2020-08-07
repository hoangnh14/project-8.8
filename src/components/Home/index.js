import React from 'react';

export default function Home() {
    return (
        <div className="content">
            <div>
                <a href="https://www.apple.com/iphone-se/" target='blank'>
                <img src={require ("./images/iphoneSE.png")}/>
                </a>

                <a href="https://www.apple.com/iphone-11/upgrade/" target='blank'>
                    <img src={require ("./images/iphone11.png")}/>
                </a>

                <a href="https://www.apple.com/iphone-11-pro/" target='blank'>
                    <img src={require ("./images/iphone11Pro.png")}/>
                </a>
            </div>
        </div>
    )
};

