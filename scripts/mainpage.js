document.addEventListener("DOMContentLoaded", function() {
    fetch('../jsons/mainpage.json')
        .then(response => response.json())
        .then(data => {
            // Build Focus Container
            const focusContainer = document.querySelector('.focus-container');
            focusContainer.innerHTML = `
                <i class="fas ${data.focusContainer.icon}"></i>
                <span class="text">${data.focusContainer.text}</span>
                <input type="checkbox" id="dropdown-toggle">
                <label for="dropdown-toggle" class="dropdown-arrow">
                    <i class="fas fa-chevron-down"></i>
                </label>
                <div class="divider"></div>
                <span class="number">${data.focusContainer.number}</span>
                <i class="fas ${data.focusContainer.fireIcon}"></i>
                <div class="dropdown-content">
                    ${data.focusContainer.dropdownOptions.map(option => `
                        <div>
                            <i class="fas ${option.icon}"></i> ${option.text}
                        </div>
                    `).join('')}
                </div>
            `;

            // Build Room Container
            const roomContainer = document.querySelector('.room-container');
            roomContainer.innerHTML = `
                <div class="circle">${data.roomContainer.circleText}</div>
                <i class="fas ${data.roomContainer.videoIcon}" style="margin-right: 10px;"></i>
                <div class="divider"></div>
                <span>${data.roomContainer.roomText}</span>
                <input type="checkbox" id="room-dropdown-toggle">
                <label for="room-dropdown-toggle" class="dropdown-arrow">
                    <i class="fas fa-chevron-down"></i>
                </label>
            `;

            // Build Top Right Container
            const topRightContainer = document.querySelector('.top-right-container');
            topRightContainer.innerHTML = `
                <input type="checkbox" id="speaker-toggle">
                <label for="speaker-toggle">
                    <i class="fas ${data.topRightContainer.speakerIcons[0]}"></i>
                    <i class="fas ${data.topRightContainer.speakerIcons[1]}"></i>
                </label>
                <i class="fas ${data.topRightContainer.minimizeIcon}" style="margin-left: 10px;"></i>
                <div class="divider"></div>
                <i class="fas ${data.topRightContainer.profileIcon}"></i>
                <input type="checkbox" id="profile-dropdown-toggle">
                <label for="profile-dropdown-toggle" class="profile-arrow">
                    <i class="fas fa-chevron-down"></i>
                </label>
                <div class="profile-dropdown-content">
                    ${data.topRightContainer.profileOptions.map(option => `
                        <div>
                            <i class="fas ${option.icon}"></i> ${option.text}
                        </div>
                    `).join('')}
                </div>
            `;

            // Build Sidebar
            const sidebar = document.getElementById('sidebar');
            sidebar.innerHTML = data.sidebarIcons.map((icon, index) => `
                <div id="icon${index + 1}">
                    <img src="${icon}" alt="" style="height: 45px; margin-top: 2px;">
                </div>
            `).join('');

            // Build Footer
            const footer = document.getElementById('footer');
            footer.innerHTML = `
                <img src="${data.footerIcons[0]}" alt="" height="100px">
                <div id="white">
                    <img src="${data.footerIcons[1]}" alt="" style="height: 70px; text-align: center; margin-left: 10px;">
                </div>
            `;

            // Handle responsive content adjustments
            window.addEventListener('resize', function() {
                const windowWidth = window.innerWidth;

                // Adjust focus container icon size on smaller screens
                const focusIcon = focusContainer.querySelector('i');
                if (windowWidth <= 768) {
                    focusIcon.style.fontSize = '18px';  // smaller icons for smaller screens
                } else {
                    focusIcon.style.fontSize = '24px';
                }

                // Adjust the sidebar icon sizes on mobile
                const sidebarIcons = document.querySelectorAll('#sidebar div img');
                sidebarIcons.forEach(icon => {
                    if (windowWidth <= 768) {
                        icon.style.height = '40px';  // smaller icons
                    } else {
                        icon.style.height = '50px';
                    }
                });
            });

            // Initialize resize event on load
            window.dispatchEvent(new Event('resize'));
        });
});
