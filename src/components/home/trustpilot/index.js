import React from "react";
import Slider from 'react-slick';
import { ReviewCard } from "./reviewCard";
import { TrustPilotRating } from "./trustpilotRating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"


export const TrustPilot = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: false,
        pauseOnHover: false,
        arrows: true
      };

    return (
        <section className="trustpilot-section">
            <div className="container">
                <h2>From real customers</h2>
                <div className="truspilot-row">
                    <TrustPilotRating />
                    <Slider className="trustpilot-review-wrap" {...settings}>
                    {
                       trusPilotdata.map((item, key) =>  <ReviewCard key={key} {...item} />) 
                    }
                    </Slider>
                </div>
            </div>
        </section>
    )
}


const trusPilotdata = [
    {
        rating: 5,
        heading: "Very good site to work in",
        comment: "very good site to work in, and the support is excellent, very helpful..",
        avtar: "",
        name: "Sherine El-hakim",
        date: "December 23, 2019"
    },
    {
        rating: 5,
        heading: "Very good site to work in",
        comment: "very good site to work in, and the support is excellent, very helpful..",
        avtar: "",
        name: "Sherine El-hakim",
        date: "December 23, 2019"
    },
    {
        rating: 5,
        heading: "Very good site to work in",
        comment: "very good site to work in, and the support is excellent, very helpful..",
        avtar: "",
        name: "Sherine El-hakim",
        date: "December 23, 2019"
    },
    {
        rating: 5,
        heading: "Very good site to work in",
        comment: "very good site to work in, and the support is excellent, very helpful..",
        avtar: "",
        name: "Sherine El-hakim",
        date: "December 23, 2019"
    },
    {
        rating: 5,
        heading: "Very good site to work in",
        comment: "very good site to work in, and the support is excellent, very helpful..",
        avtar: "",
        name: "Sherine El-hakim",
        date: "December 23, 2019"
    },
]