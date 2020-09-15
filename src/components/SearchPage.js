import React from "react";
import SearchResult from "./SearchResult";
import { Button } from "@material-ui/core";
import "./SearchPage.css";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays • 26 August to 30 August • 2 Guest(s)</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
                {/* <h3>Loading... </h3> */}
            </div>
            <SearchResult
                img="http://cdn.home-designing.com/wp-content/uploads/2018/05/Dark-Green-Rustic-Living-Room.jpg"
                location="Private room in the center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star="4.73"
                price="100"
                total="400"
            />

            <SearchResult
                img="http://cdn.home-designing.com/wp-content/uploads/2018/05/Dark-Green-Rustic-Living-Room.jpg"
                location="Private room in the center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star="4.73"
                price="100"
                total="400"
            />
        </div>
    );
}

export default SearchPage;
