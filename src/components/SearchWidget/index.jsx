import React, { useEffect, useState, useMemo } from 'react';
import { SearchForm, ShowList, FilterSelection } from '../';

export default function SearchWidget() {
    const [searchString, setSearchString] = useState("Batman");
    const [shows, setShows] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    // API call to fetch TV show data based on search query
    async function searchAPI(searchString) {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
        const rawData = await response.json();
        const data = rawData.map(s => s.show);
        setShows(data)
    }
    // useEffect hook to call searchAPI function when the search query changes
    useEffect(() => {
        searchAPI(searchString);
    }, [searchString])

    // Handler function for updating the sort order state variable based on user selection
    function handleSortOrder(selectedValue) {
        setSortOrder(selectedValue);
    }
    // Function to sort the list of TV shows based on rating and sort order
    const sortedShows = useMemo(() => {
        const sorted = [...shows].sort((ascend, descend) => {
            if (sortOrder === "asc") {
                return ascend.rating.average - descend.rating.average;
            } else {
                return descend.rating.average - ascend.rating.average;
            }
        });
        return sorted;
    }, [shows, sortOrder]);

    return (
        <>
            <SearchForm onSubmit={setSearchString} />
            <FilterSelection onSort={handleSortOrder} />
            <ShowList shows={sortedShows} />
        </>
    );
}
