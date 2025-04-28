function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        button.textContent = "Voir moins";
    } else {
        details.classList.add('hidden');
        button.textContent = "Voir plus";
    }
}
