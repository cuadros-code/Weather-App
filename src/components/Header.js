import React, { useState } from 'react'
import { getWeather } from '../helpers/getWeather'
import { Form } from './Form'
import { Weather } from './Weather';

export const Header = () => {

    const [result, setResult] = useState({});


    const callGetWeather = async (city, country) => {

        const data = await getWeather(city, country);

        if(data.main){
            setResult(data);
        }else{
            setResult({});
        }
    }

    return (
        <nav className="nav-wrapper light-blue darken-2" >

            <a href="#!" className="brand-logo" > React Weather </a>

            <div className="contenedor-form" >

                <div className="container">

                    <div className="row">

                        <div className="col m6 s12">
                            <Form
                                callGetWeather={callGetWeather}
                            />
                        </div>

                        <div className="col m6 s12">
                            <Weather result={result} />
                        </div>

                    </div>

                </div>

            </div>
        </nav>
    )
}
