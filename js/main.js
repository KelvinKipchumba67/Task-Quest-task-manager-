// Smooth scroll for navigation links
document.querySelectorAll('.navbar a').forEach(function(link) {
	link.addEventListener('click', function(e) {
		const href = link.getAttribute('href');
		if (href && href.startsWith('#')) {
			e.preventDefault();
			document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
		}
	});
});

// Call-to-action button scroll to signup section
document.querySelectorAll('.btn').forEach(function(btn) {
	btn.addEventListener('click', function() {
		if (btn.textContent.includes('Create Your Account')) {
			window.location.href = 'signup.html';
		} else if (btn.textContent.includes('Get Started')) {
			window.location.href = 'signup.html';
		} else {
			btn.classList.add('clicked');
			setTimeout(function() { btn.classList.remove('clicked'); }, 300);
		}
	});
});
