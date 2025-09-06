export const loveStory = () => {
    // Add interactive hover effects
    document.querySelectorAll('.timeline-content').forEach(content => {
        content.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        content.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effects for timeline icons
    document.querySelectorAll('.timeline-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
};