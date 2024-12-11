import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry'; // Ensures the worker is bundled

export default function OpenPreview({ file }) {
    const [images, setImages] = useState([]);
    const isPdf = file.toLowerCase().endsWith('.pdf');

    useEffect(() => {
        if (isPdf) {
            const loadPdfAsImages = async () => {
                try {
                    const pdf = await pdfjsLib.getDocument(file).promise;
                    const imagePromises = [];

                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const scale = 1.5;
                        const viewport = page.getViewport({ scale });

                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        canvas.width = viewport.width;
                        canvas.height = viewport.height;

                        await page.render({ canvasContext: context, viewport }).promise;
                        imagePromises.push(canvas.toDataURL('image/png'));
                    }

                    const images = await Promise.all(imagePromises);
                    setImages(images);
                } catch (error) {
                    console.error('Error loading PDF:', error);
                }
            };

            loadPdfAsImages();
        }
    }, [file, isPdf]);

    return (
        <div>
            {isPdf ? (
                images.length > 0 ? (
                    <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                        {images.map((imgSrc, index) => (
                            <img 
                                key={index} 
                                src={imgSrc} 
                                alt={`Page ${index + 1}`} 
                                style={{ width: '100%', height: 'auto', marginBottom: '10px' }} 
                            />
                        ))}
                    </div>
                ) : (
                    <p>Loading PDF...</p>
                )
            ) : (
                <img 
                    src={file} 
                    alt="Preview" 
                    style={{ width: '100%', height: 'auto', maxHeight: '600px' }} 
                />
            )}
        </div>
    );
}

// PropTypes validation
OpenPreview.propTypes = {
    file: PropTypes.string.isRequired,
};
