'use client';
import AboutMe from '../Components/AboutMe';
import ContactMe from '../Components/ContactMe';
import Experience from '../Components/Experience';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Intro from '../Components/Intro';
import Projects from '../Components/Projects';
import ScrollToTopButton from '../Components/ScrollToTopButton';

export default function Home() {
  return (
    <main>      
<header> <Header /></header>
<section> <Intro /> </section>
<section> <ScrollToTopButton /> </section>
<section> <AboutMe /> </section>
<section> <Projects /></section>
<section> <Experience /></section>
<section> <ContactMe /></section>
<footer> <Footer /></footer>
    </main>

    );
  }