import { useState } from "react";
import avatar from '../assets/abon.jpeg'
export default function Aside(){
    const [active, setActive] = useState(false); 

    const asideClick = () => {
        setActive(prevActive => !prevActive); 
    };

    return(
        <aside className={`sidebar ${active ? 'active' : ''}`} data-sidebar>
        <div className="sidebar-info">
        <figure className="avatar-box">
            <img
            src={avatar}
            alt="Mohamed Adil "
            width="80"
            />
        </figure>

        <div className="info-content">
            <h1 className="name" title="Mohamed Adil ">Mohamed Adil</h1>

            <p className="title">Web Developer</p>
        </div>

        <button className="info_more-btn" onClick={asideClick} data-sidebar-btn>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
        </button>
        </div>

        <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
            <li className="contact-item">
            <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:aboon2001@gmail.com" className="contact-link"
                >aboon2001@gmail.com</a
                >
            </div>
            </li>

            <li className="contact-item">
            <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+201158973873" className="contact-link"
                >+201158973873</a
                >
            </div>
            </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
            <li className="social-item">
            <a
                href="https://linkedin.com/in/mohamed-adil-9a12322b4"
                className="social-link"
                target="_blank"
            >
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            </li>

            <li className="social-item">
            <a
                href=""
                className="social-link"
                target="_blank"
            >
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            </li>

            <li className="social-item">
            <a
                href=""
                className="social-link"
                target="_blank"
            >
                <ion-icon name="logo-facebook"></ion-icon>
            </a>
            </li>
            <li className="social-item">
            <a
                href=""
                className="social-link"
                target="_blank"
            >
                <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            </li>
        </ul>
        </div>
    </aside>
    );
} ;