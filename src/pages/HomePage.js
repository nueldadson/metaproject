import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Interior from '../components/Interior';
import LandingSection from '../components/LandingSection';
import SpecialsSection from '../components/SpecialsSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {

    return (
      <>
        <Header />
        <LandingSection />
        <SpecialsSection />
        <TestimonialsSection />
        <About />
        <Interior />
        <Footer />
      </>
    );

};

export default HomePage;