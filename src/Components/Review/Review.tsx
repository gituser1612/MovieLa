import React from "react";
import "./Review.css";
import man from "../../assets/man.avif";
import { IoMdStar, IoIosStarHalf } from "react-icons/io";

const Review: React.FC = () => {
  const date: string = new Date().toLocaleString();
  return (
    <>
      <div className="review">
        <h1>Reviews</h1>
        <p>
          See how our community feel about <br /> using our service and share
          thoughts......
        </p>
        <div className="review_card">
          <div className="review_card_star">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoIosStarHalf />
          </div>
          <div className="review_card_title">
            <p className="review_card_text">
              "This app makes finding movies so much easier! I love how quick
              the search is and how every film has detailed ratings and reviews
              from other users. The recommendations feel spot-on, and the
              interface is clean and simple to use. It’s become my go-to app for
              movie nights.”
            </p>
            <div className="user_review">
              <img src={man} alt="" className="user_image" />
              <h2>Subhash Kumar Sharma</h2>
              <h3>({date})</h3>
            </div>
          </div>
        </div>

        <div className="review_card">
          <div className="review_card_star">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoIosStarHalf />
          </div>
          <div className="review_card_title">
            <p className="review_card_text">
              "This app makes finding movies so much easier! I love how quick
              the search is and how every film has detailed ratings and reviews
              from other users. The recommendations feel spot-on, and the
              interface is clean and simple to use. It’s become my go-to app for
              movie nights.”
            </p>
            <div className="user_review">
              <img src={man} alt="" className="user_image" />
              <h2>Subham Singh</h2>
              <h3>({date})</h3>
            </div>
          </div>
        </div>

        <div className="review_card">
          <div className="review_card_star">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoIosStarHalf />
          </div>
          <div className="review_card_title">
            <p className="review_card_text">
              "This app makes finding movies so much easier! I love how quick
              the search is and how every film has detailed ratings and reviews
              from other users. The recommendations feel spot-on, and the
              interface is clean and simple to use. It’s become my go-to app for
              movie nights.”
            </p>
            <div className="user_review">
              <img src={man} alt="" className="user_image" />
              <h2>Arun Yadav</h2>
              <h3>({date})</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
