
import { useState } from "react";

const ToogleImage = () => {

    const myStyle = {
        color: '#ffffff',
        backgroundColor: 'red',
    };

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h6 style={myStyle}>Event Handling & Styling</h6>

            <div>
                <button onClick={handleClick}>Toggle Image</button>
            </div>
            <br />

            <div style={{ display: isVisible ? 'block' : 'none' }}>
                <p>Look at this pretty cat</p>
                <img src='https://cataas.com/cat' alt='random cat' />
            </div>

        </div>
    );
}

export default ToogleImage;

