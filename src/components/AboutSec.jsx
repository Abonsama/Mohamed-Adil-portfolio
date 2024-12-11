import image1 from '../assets/web-programming.png'
import image2 from '../assets/front-development.png'
import PropTypes from 'prop-types'
export default function AboutSec({classN}){
    return(
        <article className={`about active ${classN}`} data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                I am a front-end developer focused on crafting responsive, interactive web applications using React. My goal is to deliver clean and efficient code that enhances user experience.
                </p>

                <p>Constantly learning and adapting, I strive to stay updated with the latest web technologies to create innovative solutions that meet both user and business needs.</p>
            </section>
            <section className="service">
                <h3 className="h3 service-title">What i&apos;m doing</h3>
                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src={image1}
                                alt="design icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web Development</h4>

                            <p className="service-item-text">
                            I turn ideas into responsive and functional web applications, ensuring seamless user experiences.
                            </p>
                        </div>
                    </li>

                <li className="service-item">
                    <div className="service-icon-box">
                        
                        <img
                            src={image2}
                            alt="Web development icon"
                            width="40"
                        />
                    </div>

                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Web Design</h4>

                        <p className="service-item-text">
                        I create visually appealing and user-friendly web designs that bring ideas to life.
                        </p>
                    </div>
                </li>
                </ul>
            </section>

            <div className="modal-container" data-modal-container>
                <div className="overlay" data-overlay></div>
                    <section className="testimonials-modal">
                        <button className="modal-close-btn" data-modal-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </section>
            </div>
        </article>
    )
}
AboutSec.propTypes = {
    classN: PropTypes.string, 
};
