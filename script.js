// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    hamburger.classList.remove('active');
  }));

// Featured Designers
const designers = [
  {
    image: './images/designer1.jpg',
    name: 'Ethan Marcotte',
    role: 'Web Designer',
    description: 'Ethan Marcotte is an independent designer/developer who is passionate about beautiful design, elegant code.',
  },
  {
    image: './images/designer2.jpeg',
    name: 'Sara Soueidan',
    role: 'Web developer',
    description: 'Sara Soueidan is an independent Web UI and design engineer, author, speaker, and trainer from Lebanon.',
  },
  {
    image: './images/designer3.jpeg',
    name: 'Cameron Moll',
    role: 'Author',
    description: 'Cameron Moll isn’t your average web designer. In fact, nothing Cameron.',
  },
  {
    image: './images/designer4.jpeg',
    name: 'Jeffrey Zeldman',
    role: 'American entrepreneur',
    description: 'Jeffrey Zeldman is a name that has become synonymous with the rise of the internet.',
  },
  {
    image: './images/designer5.jpeg',
    name: 'Dan Cederholm',
    role: 'Author',
    description: 'Designer, developer, banjoist, Dribbble co-founder, and all-around niceguy.',
  },
  {
    image: './images/designer6.jpeg',
    name: 'John Resig',
    role: 'American software engineer',
    description: ' John Resig is best known as an expert in the JavaScript programming language and the creator of the most popular JavaScript library in the world.',
  },
];

function generateDesignersHTML() {
  const designersContainer = document.getElementById('featured-designers');

  let designersHTML = '';

  for (let i = 0; i < designers.length; i += 1) {
    const designer = designers[i];

    designersHTML += `
      <div class="featured-designers grid">
          <img src="${designer.image}" alt="">
          <div class="designers-details">
              <h3>${designer.name}</h3>
              <p class="role">
                  ${designer.role}
              </p>
              <hr class="line">
              <div class="designers-description">
                  <p class="description">
                    ${designer.description}
                  </p>
              </div>
          </div>
      </div>
    `;
  }

  designersContainer.innerHTML = designersHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  generateDesignersHTML();
});
