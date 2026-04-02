import { incrementCart } from './cart.js';

let totalItems = 0;

document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('mainSearch');
    const cards = document.querySelectorAll('.card');
    const display = document.getElementById('cart-count');

    // Add to Cart Interaction
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            totalItems = incrementCart(totalItems);
            display.innerText = totalItems;
            btn.innerText = "✓ Added";
            setTimeout(() => btn.innerText = "Add to Cart", 800);
        });
    });

    // Search Logic
    search.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        cards.forEach(card => {
            const name = card.querySelector('h3').innerText.toLowerCase();
            card.style.display = name.includes(val) ? 'block' : 'none';
        });
    });
});