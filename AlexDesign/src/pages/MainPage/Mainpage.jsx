import React from "react";
import Header from "../../components/Header";
import Wave from "react-wavify";
import "./Mainpage.css";
import FloatingGuy from "../../assets/floating_guy.png";
import FloatingOrb from "../../assets/floating_orb.png";
import floatingCloud from "../../assets/floating_cloud.png";

const Mainpage = () => {
    return (
        <>
            <div className="background">
                <Header />
                <div className="Wrapper">
                    <div className="container">
                        <div className="textWrapper">
                            <div className="clouds">
                                <img
                                    className="moveCloud"
                                    src={floatingCloud}
                                    alt="floating Cloud"
                                    height={400}
                                />
                            </div>
                            <h1 className="inter-bold text-light">
                                {"Hey There,"}
                                <br />
                                {" I'm Alex"}
                            </h1>
                            <p className="inter-light text-light">
                                {"a creative mind and graphic designer"}
                                <br />
                                {"dedicated to bringing visions to life"}
                                <br />
                                {"through compelling visual experiences."}
                            </p>
                        </div>
                        <div className="imageWrapper">
                            <img
                                className="moveSpace"
                                src={FloatingGuy}
                                alt="Floating Person"
                            />
                            <img
                                className="moveSpace"
                                src={FloatingOrb}
                                alt="Floating Person"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave">
                <Wave
                    fill="#000A1F"
                    paused={false}
                    style={{ display: "flex" }}
                    options={{
                        height: 20,
                        amplitude: 50,
                        speed: 0.25,
                        points: 7,
                    }}
                />
            </div>
            <section className="brand"></section>
        </>
    );
};

export default Mainpage;
