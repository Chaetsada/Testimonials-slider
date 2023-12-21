import React from "react";
import tanya from "../assets/image-tanya.jpg";
import patternBg from "../assets/pattern-bg.svg";
import quote from "../assets/pattern-quotes.svg";
import next from "../assets/icon-next.svg";
import prev from "../assets/icon-prev.svg";

const TestimonialOne = ({ handleToggle }) => {
    return (
        <>
            <div className="flex-1 flex justify-center items-center p-5 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 ">
                <div className="relative flex justify-center items-center">
                    <img
                        className="absolute rounded-md w-[280px] lg:absolute md:w-[500px] lg:w-[700px] shadow-2xl"
                        src={tanya}
                        alt="person-image"
                    />
                    <img className="lg:w-[900px]" src={patternBg} alt="" />
                    <button className="absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-14 lg:bottom-12 lg:left-48 flex bg-white shadow-xl border rounded-l-xl rounded-r-xl">
                        <img
                            className="px-4 py-3 lg:px-6 lg:py-4 rounded-l-xl hover:opacity-50"
                            onClick={handleToggle}
                            src={prev}
                            alt="prev-icon"
                        />
                        <img
                            className="px-4 py-3 lg:px-6 lg:py-4 rounded-r-xl hover:opacity-50"
                            onClick={handleToggle}
                            src={next}
                            alt="next-icon"
                        />
                    </button>
                </div>
            </div>
            <div className="flex-1 relative mt-10 px-2 lg:absolute lg:left-32 lg:max-w-[740px] lg:top-1/2 lg:-translate-y-1/2 ">
                <h2 className="text-primary text-center text-xl lg:text-4xl lg:text-left font-light">
                    “ I’ve been interested in coding for a while but never taken the jump,
                    until now. I couldn’t recommend this course enough. I’m now in the job
                    of my dreams and so excited about the future. ”
                </h2>
                <div className="mt-5 space-x-2 flex flex-col items-center lg:flex-row">
                    <strong className="text-primary lg:text-2xl lg:text-left ">
                        Tanya Sinclair
                    </strong>
                    <span className="text-secondary lg:text-2xl lg:text-left ">
                        UX Engineer
                    </span>
                </div>
                <img
                    className="absolute top-0 left-1/2 w-[80px] -translate-x-1/2 -translate-y-1/2 lg:-top-[65px] lg:left-[110px] lg:translate-x-0 lg:translate-y-0 lg:w-auto"
                    src={quote}
                    alt="quote-icon"
                />
            </div>
        </>
    );
};

export default TestimonialOne;
