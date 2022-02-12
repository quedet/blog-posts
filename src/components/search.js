import React from 'react'
import * as SearchStyle from '../styles/search.module.scss'

function Search() {
    const [searchInput, setSearchInput] = React.useState('')

    const handleChange = (evt) => {
        setSearchInput(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        console.log(searchInput);
    }

    return (
        <form className={SearchStyle.searchForm} onSubmit={handleSubmit}>
            <div className={SearchStyle.searchFormItems}>
                <div className={SearchStyle.searchFormItem}>
                    <input type="search" placeholder='Search...' id="search" name="search" onChange={handleChange}/>
                </div>
                <div className={SearchStyle.searchFormItem}>
                    <input type="submit" value="search" className={SearchStyle.searchButton} />
                </div>
            </div>
        </form>
    )
}

export default Search