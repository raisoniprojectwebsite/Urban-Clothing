
function redirectToCheckout() {
  window.location.href = 'checkout.html';
}

// Show all sections when 'Shop' is clicked
document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetCategory = e.target.getAttribute('href').slice(1); // Get the category ID

    const sections = document.querySelectorAll('.product-list');
    sections.forEach(section => {
      section.style.display = section.id === targetCategory ? 'block' : 'none';
    });

    // Reset Search Filter
    document.getElementById('search-input').value = '';
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => product.style.display = 'block');
  });
});

// On Page Load - Show All Sections for Shop Page
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.product-list');
  sections.forEach(section => {
    section.style.display = 'block'; // Show all sections
  });
});

// Category Switching Functionality
document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetCategory = e.target.getAttribute('href').slice(1); // Get the category ID

    const sections = document.querySelectorAll('.product-list');
    sections.forEach(section => {
      section.style.display = section.id === targetCategory ? 'block' : 'none';
    });

    // Reset Search Filter
    document.getElementById('search-input').value = '';
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => product.style.display = 'block');
  });
});

// On Page Load - Show Only Jeans by Default
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.product-list');
  sections.forEach(section => {
    section.style.display = section.id === 'jeans' ? 'block' : 'none';
  });
});

// Add to Wishlist Functionality
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-wishlist')) {
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('p').textContent;
    const productImage = productCard.querySelector('img').src;

    const wishlistItem = {
      name: productName,
      price: productPrice,
      image: productImage,
    };

    addToWishlist(wishlistItem);
  }
});

// Add item to Wishlist
function addToWishlist(item) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const itemExists = wishlist.some(product => product.name === item.name);

  if (itemExists) {
    alert('This item is already in your wishlist!');
    return;
  }

  wishlist.push(item);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert('Item added to wishlist!');
}

// Smooth Scroll for Categories
document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Select wishlist container
const wishlistContainer = document.querySelector('.wishlist-items');

// Add to Wishlist functionality
const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');

addToWishlistButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('p').textContent;
    const productImage = productCard.querySelector('img').src;

    const wishlistItem = {
      name: productName,
      price: productPrice,
      image: productImage
    };

    addToWishlist(wishlistItem);
  });
});

// Add item to Wishlist
function addToWishlist(item) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const itemExists = wishlist.find(product => product.name === item.name);

  if (itemExists) {
    alert('This item is already in your wishlist!');
    return;
  }

  wishlist.push(item);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert('Item added to wishlist!');
}

// Load Wishlist items
function loadWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlistContainer.innerHTML = ''; // Clear existing items

  wishlist.forEach(item => {
    const wishlistItemHTML = `
      <div class="wishlist-item">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button class="remove-from-wishlist" data-name="${item.name}">Remove</button>
      </div>
    `;
    wishlistContainer.innerHTML += wishlistItemHTML;
  });

  setupRemoveFromWishlist();
}

// Remove item from Wishlist
function setupRemoveFromWishlist() {
  const removeButtons = document.querySelectorAll('.remove-from-wishlist');

  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const itemName = button.getAttribute('data-name');
      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

      wishlist = wishlist.filter(product => product.name !== itemName);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));

      loadWishlist();
    });
  });
}

// Initialize Wishlist on page load
if (document.querySelector('.wishlist-items')) {
  loadWishlist();
}
document.getElementById('search-input').addEventListener('input', () => {
  const searchQuery = document.getElementById('search-input').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    product.style.display = productName.includes(searchQuery) ? 'block' : 'none';
  });
});

document.getElementById('search-btn').addEventListener('click', () => {
  const searchQuery = document.getElementById('search-input').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    product.style.display = productName.includes(searchQuery) ? 'block' : 'none';
  });
});
document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetCategory = e.target.getAttribute('href').slice(1);

    const sections = document.querySelectorAll('.product-list');
    sections.forEach(section => {
      section.style.display = section.id === targetCategory ? 'block' : 'none';
    });

    // Reset Search Filter
    document.getElementById('search-input').value = '';
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => product.style.display = 'block');
  });
});
