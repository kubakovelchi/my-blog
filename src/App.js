import React from 'react'
import Header from './components/Header'
import BlogEntries from "./components/BlogEntries";
import Footer from "./components/Footer"
import Card from "./components/Card";
import PopularPost from "./components/PopularPost";
import Tags from "./components/Tags";


const App = () => {
    return (
        <div className="w3-content" style={{maxWidth: "1400px"}}>
            <Header/>
            <div className="w3-row">
                <div className="w3-col l8 s12">
                <BlogEntries/>
                </div>
                <div className="w3-col l4">
                    <Card/>
                    <PopularPost/>
                    <Tags/>
                </div>
            </div>
                <Footer/>
        </div>
)
}

export default App;



