import React from "react";
import Header from "../../components/Header";
import Wave from "react-wavify";
import "./Mainpage.css";
import FloatingGuy from "../../assets/floating_guy.png";
import FloatingOrb from "../../assets/floating_orb.png";
import floatingCloud from "../../assets/floating_cloud.png";
import AD from "../../assets/AD.png";
import ATL from "../../assets/ATL.png";
import VilleEdm from "../../assets/VilleEDM.png";

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
            <section className="brand">
                <div className="brandContainer">
                    <div className="brandWrapper">
                        <div>
                            <div className="kumbh-extrabold text-light brand-stroke">
                                BRAND
                            </div>
                            <p
                                style={{
                                    fontSize: "42px",
                                    position: "relative",
                                    top: "-125px",
                                    left: "35px",
                                }}
                                className="inter-bold text-light"
                            >
                                Companies I've Worked
                                <br /> With...
                            </p>
                        </div>
                        <div>
                            <p
                                style={{
                                    position: "relative",
                                    top: "-40px",
                                    lineHeight: "2",
                                }}
                                className="inter-light text-light"
                            >
                                In the course of the past four years, I've had
                                the privilege of
                                <br /> working with a diverse range of
                                companies, contributing my
                                <br /> skills and expertise to various projects.
                                Below is a snapshot of
                                <br /> some of the notable organizations I've
                                collaborated with:
                            </p>
                        </div>
                    </div>
                    <hr className="line" />
                    <div className="BrandImageWrapper">
                        <img src={AD} alt="AD Entreprise" />
                        <img src={ATL} alt="ATL Design" />
                        <img src={VilleEdm} alt="Ville d'Edmundston" />
                        <img src={AD} alt="Police Edmundston" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Mainpage;
