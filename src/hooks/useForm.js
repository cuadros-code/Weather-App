import { useState } from "react"

export const useForm = (state = {}) => {

    const [valueForm, setValueForm] = useState(state);


    const handleChange = ({ target }) => {
        setValueForm({
            ...valueForm,
            [target.name]: target.value
        })
    }

    const reset = () => {
        setValueForm({
            city: '',
            country: ''
        })
    }

    return {

        valueForm,
        handleChange,
        reset,

    }

}