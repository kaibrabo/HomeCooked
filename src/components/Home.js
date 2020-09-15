import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card
                    src="https://www.jablawllc.com/wp-content/uploads/2019/07/boating-accidents.jpg"
                    title="Online Experiences"
                    description="Comfortable, private places, with room for friends or family."
                    price=""
                />{" "}
                <Card
                    src="https://images.squarespace-cdn.com/content/v1/582e2259ff7c50aa807a56dc/1531235575945-HZM4UU0N3Q6S07SYGF2Q/ke17ZwdGBToddI8pDm48kHH9S2ID7_bpupQnTdrPcoF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nQwvinDXPV4EYh2MRzm-RRB5rUELEv7EY2n0AZOrEupxpSyqbqKSgmzcCPWV5WMiQ/Blogger+Gracefully+Taylored+with+Under+Canvas+Moab%2817%29.jpg"
                    title="Unique Stays"
                    description="Comfortable, private places, with room for friends or family."
                    price=""
                />{" "}
                <Card
                    src="https://www.architectureholic.com/wp-content/uploads/2018/11/Contemporary-home-architecture-exterior.jpg"
                    title="Entire Homes"
                    description="Comfortable, private places, with room for friends or family."
                    price=""
                />
            </div>

            <div className="home__section">
                <Card
                    src="https://www.architectureholic.com/wp-content/uploads/2018/11/Contemporary-home-architecture-exterior.jpg"
                    title="Entire Homes"
                    description="Comfortable, private places, with room for friends or family."
                    price="$300/night"
                />{" "}
                <Card
                    src="https://www.architectureholic.com/wp-content/uploads/2018/11/Contemporary-home-architecture-exterior.jpg"
                    title="Entire Homes"
                    description="Comfortable, private places, with room for friends or family."
                    price="$300/night"
                />{" "}
                <Card
                    src="https://www.architectureholic.com/wp-content/uploads/2018/11/Contemporary-home-architecture-exterior.jpg"
                    title="Entire Homes"
                    description="Comfortable, private places, with room for friends or family."
                    price="$300/night"
                />
            </div>
        </div>
    );
}

export default Home;
