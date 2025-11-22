// Small UI helpers: mobile nav toggle and subtle element reveals
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.getElementById('nav');
	const toggle = document.getElementById('navToggle');

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
		});
	}

	// Simple intersection reveal for cards

	// reveal hero overlay
	const heroOverlay = document.querySelector('.hero-overlay');
	if (heroOverlay) {
		setTimeout(()=> heroOverlay.classList.add('in-view'), 340);
	}

	// reveal page hero(s)
	document.querySelectorAll('.page-hero-inner').forEach(ph => {
		setTimeout(()=> ph.style.opacity = '1', 300);
		setTimeout(()=> ph.style.transform = 'none', 300);
	});
	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) entry.target.classList.add('in-view');
		}
	}, {threshold: 0.15});

	document.querySelectorAll('.card, .resource-card, .quote blockquote').forEach(el => observer.observe(el));
	console.debug('Mentalhealth UI loaded');

	/* subtle hero parallax for mouse movement on larger screens */
	const heroImage = document.getElementById('heroImage');
	const heroOverlay = document.querySelector('.hero-overlay');
	if (heroImage && heroOverlay && window.matchMedia('(min-width: 880px)').matches) {
		const strength = 12; // px of movement
		document.addEventListener('mousemove', (e) => {
			const rect = heroImage.getBoundingClientRect();
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;
			const dx = (e.clientX - cx) / rect.width;
			const dy = (e.clientY - cy) / rect.height;
			heroImage.style.transform = `translate(${dx * strength}px, ${dy * strength * -1}px) scale(1.01)`;
			heroOverlay.style.transform = `translate(-50%,-50%) translate(${dx * strength * -0.6}px, ${dy * strength * 0.6}px)`;
		});
		// return to neutral on mouseleave
		heroImage.addEventListener('mouseleave', () => {
			heroImage.style.transform = '';
			heroOverlay.style.transform = '';
		});
	}
});
