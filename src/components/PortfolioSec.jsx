import PropTypes from 'prop-types';
import './PreviewOverlay.css';
import i1 from '../assets/Screenshot from 2024-12-11 13-38-36.png';
import i2 from '../assets/recipe.webp';
import i3 from '../assets/jessica.webp';
import i4 from '../assets/faq.webp';
import i5 from '../assets/rating.webp';
import i6 from '../assets/blog.webp';
import i7 from '../assets/3column.webp';
import i8 from '../assets/results summary component.webp';
import i9 from '../assets/article preview component.webp';
import i10 from '../assets/launch-countdown-timer-main.webp';
import i11 from '../assets/albayda.png';
import i12 from '../assets/the gamer.png';

export default function PortfolioSec({ classN }) {
    const projects = [
        { title: 'the gamer', category: 'cloning project', url: 'https://abonsama.github.io/the_gamers.com/', image: i12 },
        { title: 'launch-countdown-timer-main', category: 'front end mentor', url: 'https://abonsama.github.io/launch-countdown-timer-main/', image: i10 },
        { title: 'albaydha', category: 'cloning project', url: 'https://abonsama.github.io/albaydha/', image: i11 },
        { title: 'FAQ', category: 'front end mentor', url: 'https://abonsama.github.io/faq-page/', image: i4 },
        { title: 'rating component', category: 'front end mentor', url: 'https://abonsama.github.io/rating-page/', image: i5 },
        { title: 'blog preview card', category: 'front end mentor', url: 'https://abonsama.github.io/Frontend-Mentor-Blog-preview-card/', image: i6 },
        { title: '3-column-preview-card', category: 'front end mentor', url: 'https://abonsama.github.io/3-column-preview-card/', image: i7 },
        { title: 'results summary component', category: 'front end mentor', url: 'https://abonsama.github.io/result-summary-/', image: i8 },
        { title: 'article preview component', category: 'front end mentor', url: 'https://abonsama.github.io/fem-apc/', image: i9 },
        { title: 'leon', category: 'cloning project', url: 'https://abonsama.github.io/temp/', image: i1 },
        { title: 'jessica profile', category: 'front end mentor', url: 'https://abonsama.github.io/jessica-profile/', image: i3 },
        { title: 'recipe', category: 'front end mentor', url: 'https://abonsama.github.io/recipe/', image: i2 },
    ];

    return (
        <article className={`portfolio ${classN}`} data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
                <ul className="project-list">
                    {projects.map((project, index) => (
                        <li key={index} className="project-item active" data-filter-item data-category={project.category}>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="open-outline"></ion-icon>
                                    </div>
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}

PortfolioSec.propTypes = {
    classN: PropTypes.string,
};
