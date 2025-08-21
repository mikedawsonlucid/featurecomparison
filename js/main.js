const activeCategories = new Set(['security', 'cost']);

const categoryStyles = {
    security: {
        active: 'bg-red-50 border-red-200 text-red-800',
        inactive: 'bg-gray-50 border-gray-200 text-gray-600'
    },
    cost: {
        active: 'bg-green-50 border-green-200 text-green-800',
        inactive: 'bg-gray-50 border-gray-200 text-gray-600'
    },
    control: {
        active: 'bg-blue-50 border-blue-200 text-blue-800',
        inactive: 'bg-gray-50 border-gray-200 text-gray-600'
    },
    collaboration: {
        active: 'bg-purple-50 border-purple-200 text-purple-800',
        inactive: 'bg-gray-50 border-gray-200 text-gray-600'
    },
    enterprise: {
        active: 'bg-orange-50 border-orange-200 text-orange-800',
        inactive: 'bg-gray-50 border-gray-200 text-gray-600'
    }
};

function toggleCategory(category) {
    const btn = document.getElementById(category + '-btn');
    
    if (activeCategories.has(category)) {
        activeCategories.delete(category);
        btn.className = btn.className.replace(categoryStyles[category].active, categoryStyles[category].inactive);
    } else {
        activeCategories.add(category);
        btn.className = btn.className.replace(categoryStyles[category].inactive, categoryStyles[category].active);
    }
    
    updateDisplay();
}

function updateDisplay() {
    // Show/hide cost banner
    const costBanner = document.getElementById('cost-banner');
    costBanner.style.display = activeCategories.has('cost') ? 'block' : 'none';
    
    // Show/hide feature rows with animation
    const allCategories = ['security', 'cost', 'control', 'collaboration', 'enterprise'];
    allCategories.forEach(category => {
        const features = document.querySelectorAll('.' + category + '-feature');
        features.forEach(feature => {
            if (activeCategories.has(category)) {
                feature.style.display = 'grid';
                feature.classList.add('fade-in');
            } else {
                feature.style.display = 'none';
                feature.classList.remove('fade-in');
            }
        });
    });
}

// Initialize display on page load
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
});


