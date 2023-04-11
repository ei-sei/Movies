import React, { useEffect, useState } from 'react';
import { SearchForm, ShowList, FilterSelection } from '../';

export default function SearchWidget() {
    const [searchString, setSearchString] = useState("Batman");
    const [shows, setShows] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    async function searchAPI(searchString) {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
        const rawData = await response.json();
        const data = rawData.map(s => s.show);
        setShows(data)
    }

    useEffect(() => {
        searchAPI(searchString);
    }, [searchString])

    function handleSortOrder(selectedValue) {
        setSortOrder(selectedValue);
    }

    function sortShowsByRating() {
        const sortedShows = shows.sort((a, b) => {
            if (sortOrder === "asc") {
                return a.rating.average - b.rating.average;
            } else {
                return b.rating.average - a.rating.average;
            }
        });
        setShows([...sortedShows]);
    }

    useEffect(() => {
        sortShowsByRating();
    }, [sortOrder])

    return (
        <>
            <SearchForm onSubmit={setSearchString} />
            <FilterSelection onSort={handleSortOrder} />
            <ShowList shows={shows} />
        </>
    )
}
