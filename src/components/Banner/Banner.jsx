import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-section">
            <h2 className="title">Discover an exceptional cooking class tailored for you!</h2>
            <p className='description'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="button-position">
                <button className='btn-exploreNow'>Explore Now</button>
                <button className='btn-ourFeedback'>Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;