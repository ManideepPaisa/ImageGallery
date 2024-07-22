document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    gallery.addEventListener('click', (e) => {
        if (e.target.classList.contains('gallery-image')) {
            const img = document.createElement('img');
            img.src = e.target.src;
            
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }

            lightbox.appendChild(img);
            lightbox.classList.add('active');

            const closeBtn = document.createElement('button');
            closeBtn.className = 'close';
            closeBtn.innerHTML = '&times;';
            lightbox.appendChild(closeBtn);

            closeBtn.addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
        }
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });
});