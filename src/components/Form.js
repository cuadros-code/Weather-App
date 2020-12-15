import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'
export const Form = ( { callGetWeather } ) => {

    const { valueForm: { city, country }, handleChange, reset } = useForm({
        city: '',
        country: ''
    })

    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }

        callGetWeather(city, country);

        setError(false);

        reset();
        
    }




    return (
        <>
            <form onSubmit={ handleSubmit } >

                {
                    error && 
                    <p className="red darken-4 error" >Insert all Input</p>
                }
                <div className="input-field col s12" >
                    <input
                        autoComplete="off"
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        onChange={handleChange}

                    />
                    <label htmlFor="city" >City: </label>
                </div>

                <div className="input-field col s12" >
                    <select
                        name="country"
                        id="country"
                        value={country}
                        onChange={handleChange}
                    >
                        <option value="" >-----Select-----</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>

                    </select>

                </div>

                <div className="input-field col s12">
                    <button
                        type="submit"
                        className="waves-effect waves-light btn-large btn-block yellow accent-4"
                        
                    >
                        Submit
                    </button>

                </div>

            </form>
        </>
    )
}
