import React from "react";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div style={{display:"flex", justifyContent: "center", alignItems:"center", height: "50vw", flexDirection:"column"}}>
                <h1>This is the home page</h1>
                <h2>Click on the table tab to route to the table rendered using the given API end  point</h2>
            </div>
        </div>
    )
}

export default Home
