import React from 'react'

export const Weather = ({ result }) => {

    const { name, main } = result;

    if (!name) return null

    main.temp = (main.temp - 273.15).toFixed(2);

    main.temp_min = (main.temp_min - 273.15).toFixed(2);
    main.temp_max = (main.temp_max - 273.15).toFixed(2);

    return (
        <>
            <div className="card-panel while col s12" >
                <div className="black-text">
                    <h2>Weather of {name}</h2>
                    <p className="temperatura">
                        {main.temp} &ordm;
                    </p>
                    <p>Min Temperature: <span> {main.temp_min} &ordm;</span>  </p>

                    <p>Max Temperature: <span> {main.temp_max} &ordm;</span>  </p>
                </div>
            </div>
        </>
    )
}
