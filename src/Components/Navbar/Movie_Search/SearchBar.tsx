import React, {useState} from 'react'
import  './SearchBar.css'
import {FaSearch}  from 'react-icons/fa'


interface SearchBarProps{
  setSearchText:React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar:React.FC<SearchBarProps> = ({setSearchText}) => {
    const [input, setInput] = useState<string>("");
    const handleChange =(value:string)=>{
        setInput(value);
        setSearchText(value);
    };
   return (
    <div className='input'>
        <FaSearch id='search_icon'/>
        <input placeholder='find movies...' value= {input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar