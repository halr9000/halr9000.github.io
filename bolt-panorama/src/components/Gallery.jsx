import React, { useState } from 'react';
    import PhotoSphereViewer from 'photo-sphere-viewer';

    const images = [
      '/images/photo1.webp',
      '/images/photo2.webp',
      '/images/photo3.webp',
      '/images/photo4.webp'
      // Add more image paths here
    ];

    function Gallery() {
      const [viewer, setViewer] = useState(null);

      const openViewer = (image) => {
        if (viewer) {
          viewer.setPanorama(image);
        } else {
          const newViewer = new PhotoSphereViewer.Viewer({
            container: document.querySelector('#viewer'),
            panorama: image,
            navbar: true,
            defaultZoomLvl: 50,
          });
          setViewer(newViewer);
        }
      };

      return (
        <div>
          <div className="gallery">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Photo ${index + 1}`}
                onClick={() => openViewer(image)}
                className="thumbnail"
              />
            ))}
          </div>
          <div id="viewer" className="viewer"></div>
        </div>
      );
    }

    export default Gallery;
