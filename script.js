function addToCart(productName, price) {
    alert(`Added ${productName} to cart. Price: $${price}`);
   
}

//  form submission
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const firstName = form.elements['first-name'].value;
    const lastName = form.elements['last-name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    console.log('Form submitted:', { firstName, lastName, email, message });
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
}


function init() {
    //  "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const price = product.querySelector('.price').textContent.slice(1); // Remove $ sign
            addToCart(productName, price);
        });
    });

    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
}


document.addEventListener('DOMContentLoaded', init);