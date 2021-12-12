import React, {useEffect, useState} from 'react';

export const useSelect = (initialState, label, options, index, handleInputChange, category) => {
    const [state, setState] = useState(initialState);
    useEffect(() => {
        console.log(state)
        setState(category);
    }, [handleInputChange]);

    const Selection = () => (

        <div className={"row"}>
            {
                label ? <label>{label}</label> : null
            }
            <select
                className={"form-control"}
                onChange={handleInputChange}
                value={state}
            >
                <option value="">--Select a Category--</option>
                {options.map(option => (
                    <option key={option[index]} value={option[index]}>{option[index]}</option>
                ))}
            </select>
        </div>
    )

    return [Selection, state, setState];
};