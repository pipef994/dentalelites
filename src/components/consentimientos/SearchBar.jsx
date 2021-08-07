import React, { useState } from 'react'
import "../usuarios/usuarios.scss";
import "./SearchBar.scss";



export const SearchBar = ({ placeholder, data, handleUserAsigned }) => {
    const [filterData, setFilterData] = useState([]);
    const [selectedWord, setSelectedWord] = useState('');
    const [selectFlag, setSelectFlag] = useState(false);



    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            let word = `${value.name} ${value.FlastName} ${value.SlastName} ${value.nIdent}`;
            return word.toLowerCase().includes(searchWord.toLowerCase());
        })

        if (searchWord === "") {
           setFilterData([]);
           setSelectedWord('');
           return 
        }

        setFilterData(newFilter);
        setSelectedWord(event.target.value);
        setSelectFlag(false);
    }

    const handleSelectWord = (value) => {
        const word = `${value.name} ${value.FlastName} ${value.SlastName} ${value.nIdent}`
        setSelectedWord(word);

        const newState = {
            name: `${value.name} ${value.FlastName} ${value.SlastName}`,
            email: value.email,
            id: value.nIdent
          }

        setSelectFlag(true);
        handleUserAsigned(newState);
    }

    return (
        <>

            <div className={`form-group col-md-6`}>
                <label htmlFor="id">Usuario</label>
                <input  className={`form-control `}
                        type="text"
                        name="id"
                        id="id"
                        autocomplete="off"
                        placeholder={placeholder}
                        onChange={handleFilter}
                        value={selectedWord}
                />
                {!selectFlag && <div>
                    {filterData.length != 0  && (
                    <div className='dataResult'>
                        {filterData.slice(0,10).map((value, key) => {
                            return <div className='dataItem' onClick={() => handleSelectWord(value)}> {value.name} {value.FlastName} {value.SlastName} {value.nIdent} </div>
                        })}
                    </div>
                    )}
                </div>}
            </div>
        </>
    )
}

export default SearchBar;

