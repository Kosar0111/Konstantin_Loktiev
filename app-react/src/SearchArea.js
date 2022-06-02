import React from 'react';
import { options } from 'superagent';

const SearchArea = (props) => {
    return (
        <div className="search-area">
            <form onSubmit={props.searchBook} action="" placeholder='Search book'>
                <input placeholder='Search book' onChange={props.handleSearch} type="text" />
                <button type='submit'>Search</button>
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option value="Sort">Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default SearchArea