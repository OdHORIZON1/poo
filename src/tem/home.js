import React from 'react';
import Header from "./header";
import Hero from "./hero";
import About from './about';
import Projects from './projects';
import Footer from './footer';
import Contact from './contact';
import Loading from './loading';
const Home=()=>{
    return(
        <>
        <Loading />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        </>
    );
}

export default Home;