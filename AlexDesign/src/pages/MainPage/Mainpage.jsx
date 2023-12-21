import React from "react";
import Header from "../../components/Header";
import "./Mainpage.css";

const Mainpage = () => {
    return (
        <div className="background">
            <Header />
            <div className="leftGrid"></div>
            <div className="rightGrid"></div>
        </div>
    );
};

export default Mainpage;
