import React, { useState } from 'react';

function ColorPicker() {
    const [color, setColor] = useState('#ff0000'); // Default color is red

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-5">Color Picker</h1>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="w-20 h-20 mb-4"
                />
                <p className="text-lg">Selected Color: <span className="font-bold">{color}</span></p>

                <div
                    className="w-40 h-40 mt-4 rounded-lg"
                    style={{ backgroundColor: color }}
                />
            </div>
        </div>
    );
}

export default ColorPicker;
