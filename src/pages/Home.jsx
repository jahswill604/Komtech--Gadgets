import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import WhyChooseUs from '../components/home/WhyChooseUs';
import LatestArrivals from '../components/home/LatestArrivals';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <Categories />
            <FeaturedProducts />
            <WhyChooseUs />
            <LatestArrivals />
            <Testimonials />
            <Newsletter />
        </div>
    );
}

export default Home;
