import './style.css'

const Portfolio = (props) => {
    return (
        <div className="portfolio-card">
            <div className="card-image">
                <img src="https://ua.edu.lb/contentfiles/41411Image.jpg" alt="Profile Picture" />
            </div>
            <div classNamess="card-content">
                <h2 className="profile-name">Alex Morgan</h2>
                <p classNamess="profile-title">Full Stack Developer</p>
                <p className="profile-bio">Passionate about building clean, accessible, and high-performance web applications.</p>
                <div className="social-links">
                    <a href="#" aria-label="GitHub">GitHub</a>
                    <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#" aria-label="Twitter">Twitter</a>
                </div>
                <button onClick={props.fct} className="portfolio-btn">Logout</button>
            </div>
        </div>
    )
}

export default Portfolio;