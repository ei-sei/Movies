import React, { useEffect, useState } from 'react';
import { SearchForm, ShowList } from '../';

export default function SearchWidget() {
    const [searchString, setSearchString] = useState("Married at first sight");
    const [shows, setShows] = useState([]);

    async function searchAPI(searchString) {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
        const rawData = await response.json();
        const data = rawData.map(s => s.show);
        setShows(data)
    }

    useEffect(() => {
        searchAPI(searchString);
    }, [searchString])

    return (
        <>
            <SearchForm onSubmit={setSearchString} />
            <ShowList shows={shows} />
        </>
    )
}
