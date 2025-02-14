import { LuSearch } from "react-icons/lu";

import "./search-input-style.scss"

export default function SearchInput(){
    return(
        <form className="search-form">
            <input type="search" name="search" />
            <LuSearch  size={25}/>
        </form>
    )
}