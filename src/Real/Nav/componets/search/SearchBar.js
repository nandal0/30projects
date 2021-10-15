import React,{useState} from 'react'

const SearchBar = ({onValue}) => {
    const [value,setValue] =useState('')

    const onFormSubmit=(e)=>{
        e.preventDefault();
        onValue(value)
        console.log(value);
    }
    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui from">
                <div className="field">
                    <label >Search</label>
                    <input type="text" 
                    value={value} onChange={(e) =>setValue(e.target.value)}

                    />
                </div>
            </form>
                        
        </div>
    )
}

export default SearchBar
