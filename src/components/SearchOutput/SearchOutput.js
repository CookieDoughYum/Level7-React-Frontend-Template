import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../Spinner/Spinner";
import classes from './SearchOutput.module.css';

const SearchOutput = (props) => {
    let message = null;

    if (props.term && props.results.length !== 0) {
        message = <p>Showing {props.results.length} results</p>;
    } else if (props.term) {
        message = <Spinner/>;
    } else if (props.term === null){
        message = "no results found";
    }

    let searchResults = null;
    if (props.results) {
        searchResults =
            props.results.map((results, index) => {
                return (
                    <SearchResult
                       // key={index}
                        sunrise={results.sunrise}
                        sunset={results.sunset}
                        solarNoon={results.solar_noon}
                        dayLength={results.day_length}
                        civilTwilightBegin={results.civil_twilight_begin}
                        civilTwilightEnd={results.civil_twilight_end}
                        nauticalTwilightBegin={results.nautical_twilight_begin}
                        nauticalTwilightEnd={results.nautical_twilight_end}
                        astronomicalTwilightBegin={results.astronomical_twilight_begin}
                        astronomicalTwilightEnd={results.astronomical_twilight_end}

                    />
                );
            })
    }

    return (
        <div className={classes.Result}>
            {message}
            {searchResults}
        </div>
    )
}

export default SearchOutput;