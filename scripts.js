document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckboxes = document.querySelectorAll('.toggle-checkbox');
    toggleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const status = this.parentNode.nextElementSibling;
            if (this.checked) {
                status.textContent = 'Available';
            } else {
                status.textContent = 'Not Available';
            }
        });
    });
});
