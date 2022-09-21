import React from "react";
import { useState } from "react";
import './App.css';
import QuestionList from "./QuestionList";

const SearchPage = () => {
    const [searchTerm, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <div className="center">
                <form>
                    <input
                        className='search-text'
                        name="search"
                        id="search"
                        onChange={handleChange}
                        value = {searchTerm}
                        placeholder="Search Question by Title/Tags/Date">
                    </input>
                </form>
            </div>

            <QuestionList
                searchQuestion = {searchTerm}
                />

        </div>
    )
}

export default SearchPage;