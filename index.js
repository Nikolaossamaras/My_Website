// Stagger the appearance of the page's text and images.
(() => {
	const revealPageContent = () => {
		const style = document.createElement('style');
		style.textContent = `
			@keyframes pageContentReveal {
				from { opacity: 0; transform: translateY(10px); }
				to { opacity: 1; transform: translateY(0); }
			}
			.page-content-reveal {
				opacity: 0;
				animation: pageContentReveal 600ms ease forwards;
			}
			@media (prefers-reduced-motion: reduce) {
				.page-content-reveal { opacity: 1; animation: none; transform: none; }
			}
		`;
		document.head.appendChild(style);

		const elements = Array.from(document.body.querySelectorAll('*')).filter(element => {
			if (element.matches('script, style, noscript')) return false;
			return element.tagName === 'IMG' || Array.from(element.childNodes).some(
				node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
			);
		});

		// Increase this value (in milliseconds) to slow down the conversation-style reveal.
		const revealIntervalMs = 1200;
		elements.forEach((element, index) => {
			element.classList.add('page-content-reveal');
			element.style.animationDelay = `${index * revealIntervalMs}ms`;
		});
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', revealPageContent, { once: true });
	} else {
		revealPageContent();
	}
})();

const button = document.getElementById("myButton");

if (button) {
	button.addEventListener("click", () => {
		window.location.href = "page1.html";
	});
}

const button2 = document.getElementById("btn2");

if (button2) {
	button2.addEventListener("click", () => {
		window.location.href = "page2.html";
	});
}

const button3 = document.getElementById("btn3");

if (button3) {
	button3.addEventListener("click", () => {
		window.location.href = "page1.html";
	});
}
