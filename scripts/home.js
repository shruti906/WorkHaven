document.addEventListener("DOMContentLoaded", function() {
    fetch('../jsons/home.json')
        .then(response => response.json())
        .then(data => {
            // Build Navbar
            const navbar = document.querySelector('.navbar');
            navbar.innerHTML = `
                <div class="logo">${data.navbar.logo}</div>
                <nav>
                    <ul>
                        ${data.navbar.links.map(link => `
                            <li><a href="${link.href}">${link.text}</a></li>
                        `).join('')}
                    </ul>
                </nav>
                <button class="sign-in-btn" onclick="location.href='${data.navbar.signInHref}';">${data.navbar.signInText}</button>
                <button class="sign-up-btn sign-in-btn" onclick="location.href='/signup';">Sign Up</button>
            `;

            // Build Hero Section
            const hero = document.querySelector('.hero');
            hero.innerHTML = `
                <h1>${data.hero.title}</h1>
                <button class="cta-btn" onclick="location.href='${data.hero.ctaHref}';">${data.hero.ctaText}</button>
            `;

            // Build Immersive Environment Section
            const immersiveEnv = document.querySelector('.immersive-env');
            immersiveEnv.innerHTML = `
                <h2 style="color:rgb(61, 79, 87)">${data.immersiveEnv.title}</h2>
                <p style="color:rgb(42, 39, 43)">${data.immersiveEnv.description}</p>
                <div class="avatars">
                    <img src="${data.immersiveEnv.imageSrc}" alt="Avatar">
                </div>
            `;

            // Build Trending Spaces Section
            const trendingSpaces = document.querySelector('.trending-spaces');
            trendingSpaces.innerHTML = `
                <h2>${data.trendingSpaces.title}</h2>
                <div class="space-image">
                    <img src="${data.trendingSpaces.imageSrc}" alt="Trending Space">
                </div>
            `;

            // Build Productivity Widgets Section
            const productivityWidgets = document.querySelector('.productivity-widgets');
            productivityWidgets.innerHTML = `
                <h2>${data.productivityWidgets.title}</h2>
                <p>${data.productivityWidgets.description}</p>
                <div class="widget-image">
                    <img src="${data.productivityWidgets.imageSrc}" alt="Productivity Widget">
                </div>
            `;

            // Build Footer
            const footer = document.querySelector('.footer');
            footer.innerHTML = `
                <div class="footer-content">
                    <div class="logo-section">
                        <h2>${data.footer.logo}</h2>
                    </div>
                    <div class="footer-links">
                        <div class="column">
                            <h4>Product</h4>
                            <ul>
                                ${data.footer.links.product.map(link => `
                                    <li><a href="${link.href}">${link.text}</a></li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="column">
                            <h4>Company</h4>
                            <ul>
                                ${data.footer.links.company.map(link => `
                                    <li><a href="${link.href}">${link.text}</a></li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="column">
                            <h4>Contact us</h4>
                            <ul>
                                ${data.footer.links.contact.map(link => `
                                    <li><a href="${link.href}">${link.text}</a></li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="column">
                            <h4>Socials</h4>
                            <ul>
                                ${data.footer.links.socials.map(link => `
                                    <li><a href="${link.href}">${link.text}</a></li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="social-icons">
                        ${data.footer.socialIcons.map(icon => `
                            <a href="#"><img src="${icon.src}" alt="${icon.alt}"></a>
                        `).join('')}
                    </div>
                </div>
            `;
        });
});


//hi shruti