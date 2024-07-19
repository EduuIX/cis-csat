// components/toggleButton/toggleButton.tsx
import { useState } from 'react';
import './toggleButton.css';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <div className={`toggle-button ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
            <div className="toggle-thumb"></div>
        </div>
    );
}

export default ToggleButton;
