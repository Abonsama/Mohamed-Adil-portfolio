import PropTypes from 'prop-types';
import { useState } from 'react';
import OpenPreview from './OpenPreview';
import './PreviewOverlay.css';

import c1 from '../assets/Coursera introduction to frontend.pdf';
import c2 from '../assets/Coursera html and css in depth.pdf';
import c3 from '../assets/Coursera vc.pdf';
import c4 from '../assets/Coursera javascript.pdf';
import c5 from '../assets/Coursera react basics.pdf';
import c6 from '../assets/Coursera advanced react.pdf';
import c7 from '../assets/Coursera principles of ui and ux.pdf';

export default function ResumeSec({ classN }) {
    const [previewFile, setPreviewFile] = useState(null);

    const certificates = [
        { title: 'introduction to frontend development', institution: 'coursera', year: '', file: c1 },
        { title: 'html and css in depth', institution: 'coursera', year: '', file: c2 },
        { title: 'version control', institution: 'coursera', year: '', file: c3 },
        { title: 'javascript', institution: 'coursera', year: '', file: c4 },
        { title: 'react basics', institution: 'coursera', year: '', file: c5},
        { title: 'advanced react', institution: 'coursera', year: '', file: c6},
        { title: 'principles of ui and ux', institution: 'coursera', year: '', file: c7},
    ];

    const handleDownload = (file, fileName) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = fileName;
        link.click();
    };

    return (
        <article className={`resume ${classN}`} data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Future University</h4>
                        <span>2019-ongoing</span>
                        <p className="timeline-text">
                            Despite challenging circumstances, I pursued self-study in Web Development.
                        </p>
                    </li>
                </ol>
            </section>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="briefcase-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Certificates</h3>
                </div>
                <ol className="timeline-list">
                    {certificates.map((cert, index) => (
                        <li key={index} className="timeline-item">
                            <h4
                                className="h4 timeline-item-title"
                                onClick={() => setPreviewFile(cert.file)}
                                style={{ cursor: 'pointer'}}
                            >
                                {cert.title}
                            </h4>
                            <span>{cert.institution}</span>
                            <span>{cert.year}</span>
                            <button
                                onClick={() => handleDownload(cert.file, cert.fileName)}
                                className="download-button"
                            >
                                Download
                            </button>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Conditionally render OpenPreview for previewed file inside preview overlay */}
            {previewFile && (
                <div className="preview-overlay">
                    <div className="preview-modal">
                        <button onClick={() => setPreviewFile(null)} className="close-button">Close</button>
                        <OpenPreview file={previewFile} />
                    </div>
                </div>
            )}
        </article>
    );
}

ResumeSec.propTypes = {
    classN: PropTypes.string,
};
