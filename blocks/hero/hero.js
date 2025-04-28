// hero.js

// Function to render the hero block
function renderHero() {
    const heroElement = document.createElement('div');
    heroElement.className = 'hero variation-three';

    const title = document.createElement('h1');
    title.className = 'hero-title';
    title.textContent = 'Hero Title';
    heroElement.appendChild(title);

    // Adding description below the title
    const description = document.createElement('p');
    description.className = 'hero-description';
    description.textContent = 'This is the description below the hero title.';
    heroElement.appendChild(description);

    // Adding a call-to-action (CTA) button
    const ctaButton = document.createElement('a');
    ctaButton.className = 'cta-button';
    ctaButton.href = '#'; // Placeholder link
    ctaButton.textContent = 'Click Here';
    heroElement.appendChild(ctaButton);

    document.body.appendChild(heroElement);

    // Debug statement to check the rendering
    console.log('Hero element rendered:', heroElement);
}

// Call the render function
renderHero();
