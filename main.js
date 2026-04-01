// === MODAL HELPERS ===
const showModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('animate-fade');
    }
};

const hideModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none';
};

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(m => {
            if (m.style.display === 'flex') m.style.display = 'none';
        });
    }
});

// === PLATE SEARCH ===
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('plateSearch') || document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const val = this.value.toUpperCase();
            document.querySelectorAll('.vehicle-row').forEach(row => {
                const plate = row.getAttribute('data-plate') || '';
                row.style.display = plate.includes(val) ? '' : 'none';
            });
        });
    }
});

// === AUTO-UPPERCASE PLATE INPUT ===
document.addEventListener('DOMContentLoaded', () => {
    const placaInput = document.getElementById('placa');
    if (placaInput) {
        placaInput.addEventListener('input', function() {
            this.value = this.value.toUpperCase();
        });
    }
});
