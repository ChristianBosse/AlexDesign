import React from "react";
import Header from "../../components/Header";
import Wave from "react-wavify";
import "./Contactpage.css";
import floatingCloud from "../../assets/floating_cloud.png";
import Footer from "../../components/Footer";

const Contactpage = () => {
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
                                {"Ready to Talk About"}
                                <br />
                                {"Your Project?"}
                            </h1>
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
            <Footer />
        </>
    );
};

export default Contactpage;
