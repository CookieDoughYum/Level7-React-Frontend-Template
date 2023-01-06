import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log("props",props);
    return (
        <article className={classes.Results}>
           <h1>sunrise: {props.sunrise}</h1>
           <h1>sunset: {props.sunset}</h1>
           <h1>solarNoon: {props.solarNoon}</h1>
           <h1>dayLength: {props.dayLength}</h1>
           <h1>civilTwilightBegin: {props.civilTwilightBegin}</h1>
           <h1>civilTwilightEnd: {props.civilTwilightEnd}</h1>
           <h1>nauticalTwilightBegin: {props.nauticalTwilightBegin}</h1>
           <h1>nauticalTwilightEnd: {props.nauticalTwilightEnd}</h1>
           <h1>astronomicalTwilightBegin: {props.astronomicalTwilightBegin}</h1>
           <h1>astronomicalTwilightEnd: {props.astronomicalTwilightEnd}</h1>
        </article>
    );
}

export default SearchResult;