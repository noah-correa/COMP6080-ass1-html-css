const bachelorContent = document.getElementById('bachelor');
const mastersContent = document.getElementById('masters');
const doctorateContent = document.getElementById('doctorate');
const tabLinks = document.querySelectorAll('.tab');
const tabsContent = document.getElementById('tabs-content');
console.log(tabsContent);

const setupTabs = () => {
    // Loop through tab buttons
    const tabs = document.querySelectorAll('.tab').forEach (tab => {
        // Add event listeners to each button
        tab.addEventListener('click', () => {
            const tabNumber = tab.dataset.forTab;
            const tabToActivate = tabsContent.querySelector(`.tab-content[data-tab="${tabNumber}"]`);
            console.log(tabToActivate);

            // Remove active class from all tab buttons and content
            tabLinks.forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });

            // Add active to new tab button and content
            tab.classList.add('active');
            tabToActivate.classList.add('active');
        });
    });
}

// Run function on page load
document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
});