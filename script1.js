/* =========================================================================
   BISMILLAH HANAN FAST FOOD — DIGITAL MENU
   All menu content lives in MENU_DATA below. To update prices or items,
   edit this array only — the page renders itself from this data.
   Prices are in Tanzanian Shillings (TSh) as printed on the source menu.
   ========================================================================= */

const MENU_DATA = [
  {
    id: "soup",
    name: "Soup",
    items: [
      { name: "Tomato Soup", price: 7000 },
      { name: "Veg. Clear Soup", price: 7000 },
      { name: "Veg. Sweet & Sour Soup", price: 7000 },
      { name: "Veg. Cream Soup", price: 7000 },
      { name: "Veg. Mushroom Soup", price: 7000 },
      { name: "Sweet Corn Soup", price: 7000 },
      { name: "Chicken Clear Soup", price: 10000 },
      { name: "Chicken Noodle Soup", price: 10000 },
      { name: "Chicken Sweet & Sour Soup", price: 10000 },
      { name: "Chicken Manchow Soup", price: 10000 },
      { name: "Chicken Cream Soup", price: 10000 },
      { name: "Chicken Coriander Soup", price: 10000 },
      { name: "Sea Food Cocktail Soup", price: 10000 },
    ],
  },
  {
    id: "salad",
    name: "Salad",
    items: [
      { name: "Green Salad", price: 5000 },
      { name: "Chicken Salad", price: 10000 },
      { name: "Seafood Salad", price: 10000 },
      { name: "Fruit Salad", price: 8000 },
    ],
  },
  {
    id: "barbeque",
    name: "Barbeque",
    items: [
      { name: "Beef Mishkaki", price: 6000 },
      { name: "Nundu", price: 8000 },
      { name: "Sururu", price: 2000 },
      { name: "Mutton BBQ Ribs", price: 12000 },
      { name: "BBQ Wings", price: 10000 },
      { name: "BBQ Prawns", price: 15000 },
      { name: "BBQ Changu", price: 15000 },
      { name: "BBQ Kingfish", price: 12000 },
      { name: "Fish Tikka", price: 12000 },
      { name: "Fish Lemon Garlic", price: 12000 },
      { name: "Chicken Sekela", price: 6000 },
      { name: "Gajjar Chicken", price: 6000 },
      { name: "Chicken Choma", price: 6000 },
      { name: "Peri Peri Chicken", price: 6000 },
      { name: "Fried Chicken / Pilipili", price: 6000 },
      { name: "Lemon Chicken", price: 6000 },
      { name: "Chicken Boti", price: 12000 },
      { name: "Malai Boti", price: 12000 },
      { name: "Chicken Lassan Tikka", price: 12000 },
      { name: "Chicken Achari Tikka", price: 12000 },
      { name: "Chicken Haryali Tikka", price: 12000 },
    ],
  },
  {
    id: "tandoori",
    name: "Tandoori",
    items: [
      { name: "Morrocan Chicken", price: 14000 },
      { name: "Chicken Fusion", price: 14000 },
      { name: "Drum Sticks", price: 10000 },
      { name: "Veg. Makai Malai", price: 10000 },
      { name: "Chicken Tikka Roll", price: 8000 },
      { name: "Malai Tikka Roll", price: 10000 },
      { name: "Beef Roll", price: 8000 },
      { name: "Chicken Seekh Kebab", price: 10000 },
      { name: "Mutton Seekh Kebab", price: 10000 },
      { name: "Beef Seekh Kebab", price: 10000 },
      { name: "Veg. Seekh Kebab", price: 10000 },
    ],
  },
  {
    id: "hanan-special",
    name: "Hanan Special",
    items: [
      { name: "Hanan Special Chicken", price: 8000 },
      { name: "Tandoori Chicken", price: 8000 },
      { name: "Malai Chicken", price: 8000 },
    ],
  },
  {
    id: "chips",
    name: "Chips",
    items: [
      { name: "Plain Chips", price: 3000 },
      { name: "Masala Chips", price: 4000 },
      { name: "Schezwan Chips", price: 4000 },
      { name: "Veg. Chips", price: 4000 },
      { name: "Plain Zege", price: 4000 },
      { name: "Masala Zege", price: 5000 },
    ],
  },
  {
    id: "naan",
    name: "Naan",
    items: [
      { name: "Plain Naan", price: 1500 },
      { name: "Butter Naan", price: 1500 },
      { name: "Garlic Naan", price: 2000 },
      { name: "Chilly Naan", price: 2000 },
      { name: "Masala Naan", price: 3000 },
      { name: "Cheese Naan", price: 4000 },
    ],
  },
  {
    id: "rice",
    name: "Rice",
    items: [
      { name: "Plain Rice", price: 4000 },
      { name: "Coconut Rice", price: 5000 },
      { name: "Lemon Rice", price: 5000 },
      { name: "Plain Veg. Rice", price: 6000 },
      { name: "Jeera Rice", price: 6000 },
      { name: "Veg. Fried Rice", price: 8000 },
      { name: "Egg Fried Rice", price: 8000 },
      { name: "Chicken Fried Rice", price: 10000 },
      { name: "Prawns Fried Rice", price: 12000 },
      { name: "Mix Fried Rice", price: 12000 },
      { name: "Seafood Fried Rice", price: 12000 },
      { name: "Chicken Triple Rice", price: 12000 },
    ],
  },
  {
    id: "noodle",
    name: "Noodle",
    items: [
      { name: "Veg. Noodle", price: 8000 },
      { name: "Egg Noodle", price: 8000 },
      { name: "Chicken Noodle", price: 8000 },
      { name: "Chicken Hakka Noodle", price: 10000 },
      { name: "Schezwan Chicken Hakka Noodle", price: 10000 },
      { name: "Prawns Noodle", price: 12000 },
      { name: "Mix Noodle", price: 12000 },
      { name: "Sea Food Noodle", price: 12000 },
    ],
  },
  {
    id: "indian-non-veg",
    name: "Indian (Non-Veg)",
    items: [
      { name: "Chicken Hydrabadi", price: 12000 },
      { name: "Chicken Kashmiri", price: 12000 },
      { name: "Chicken Kolapuri", price: 12000 },
      { name: "Chicken Nawabi", price: 12000 },
      { name: "Chicken Masala", price: 12000 },
      { name: "Chicken Tikka Masala", price: 12000 },
      { name: "Chicken Kadai", price: 12000 },
      { name: "Chicken Karai", price: 12000 },
      { name: "Chicken Makhani", price: 12000 },
      { name: "Chicken Curry", price: 12000 },
      { name: "Chicken Malai Curry", price: 12000 },
      { name: "Chicken Coconut", price: 12000 },
      { name: "Butter Chicken", price: 12000 },
      { name: "Jeera Chicken", price: 12000 },
      { name: "Kaju Chicken", price: 12000 },
      { name: "Methi Chicken", price: 12000 },
      { name: "Roasted Chicken", price: 12000 },
      { name: "Fish Kadai", price: 15000 },
      { name: "Fish Kalimiri Curry", price: 15000 },
      { name: "Fish Masala Curry", price: 15000 },
      { name: "Fish Coconut Curry", price: 15000 },
      { name: "Roasted Fish", price: 15000 },
      { name: "Mutton Kashmiri", price: 12000 },
      { name: "Mutton Kolapuri", price: 12000 },
      { name: "Mutton Nawabi", price: 12000 },
      { name: "Mutton Masala", price: 12000 },
      { name: "Mutton Rogan Gosh", price: 12000 },
      { name: "Mutton Kalimiri / B. Pepper", price: 12000 },
      { name: "Mutton Kadai", price: 12000 },
      { name: "Mutton Curry", price: 12000 },
      { name: "Mutton Coconut", price: 12000 },
      { name: "Prawns Hydrabadi", price: 12000 },
      { name: "Prawns Kashmiri", price: 12000 },
      { name: "Prawns Kolapuri", price: 12000 },
      { name: "Nawabi Prawns", price: 12000 },
      { name: "Masala Prawns", price: 12000 },
      { name: "Prawns Kadai", price: 12000 },
      { name: "Prawns Karai", price: 12000 },
      { name: "Prawns Makhani", price: 12000 },
      { name: "Prawns Curry", price: 12000 },
      { name: "Prawns Coconut", price: 12000 },
    ],
  },
  {
    id: "indian-veg",
    name: "Indian (Veg)",
    items: [
      { name: "Veg. Hydrabadi", price: 10000 },
      { name: "Veg Kadai", price: 10000 },
      { name: "Veg Karai", price: 10000 },
      { name: "Veg. Coconut", price: 10000 },
      { name: "Veg Masala", price: 10000 },
      { name: "Mix Veg. Curry", price: 10000 },
      { name: "Paneer Kashmiri", price: 12000 },
      { name: "Paneer Kolapuri", price: 12000 },
      { name: "Paneer Nawabi", price: 12000 },
      { name: "Paneer Masala", price: 12000 },
      { name: "Paneer Tikka Masala", price: 12000 },
      { name: "Paneer Kadai", price: 12000 },
      { name: "Paneer Karai", price: 12000 },
      { name: "Paneer Makhani", price: 12000 },
      { name: "Paneer Curry", price: 12000 },
      { name: "Paneer Coconut", price: 12000 },
      { name: "Palak Paneer", price: 12000 },
      { name: "Shahi Paneer", price: 12000 },
      { name: "Matar Paneer", price: 12000 },
      { name: "Matar Mushroom Masala", price: 12000 },
      { name: "Daal Fry", price: 10000 },
      { name: "Daal Tarka", price: 10000 },
    ],
  },
  {
    id: "chinese-non-veg",
    name: "Chinese (Non-Veg)",
    items: [
      { name: "Chicken Lolly Pop", price: 10000 },
      { name: "Chicken Wings/Chinese", price: 10000 },
      { name: "Chicken Chilly", price: 12000 },
      { name: "Chicken Manchurian", price: 12000 },
      { name: "Chicken 65", price: 12000 },
      { name: "Chicken Singapore", price: 12000 },
      { name: "Chicken Pepper", price: 12000 },
      { name: "Crispy Chicken", price: 12000 },
      { name: "Sesame Chicken", price: 12000 },
      { name: "Chilly Prawns", price: 12000 },
      { name: "Sesame Prawns", price: 12000 },
      { name: "Beef Chilly", price: 12000 },
      { name: "Beef Pepper", price: 12000 },
      { name: "Prawns Manchurian", price: 12000 },
      { name: "Prawns 65", price: 12000 },
      { name: "Prawns Singapore", price: 12000 },
      { name: "Prawns Pepper", price: 12000 },
      { name: "Crispy Prawns", price: 12000 },
      { name: "Fried Prawns / Pilipili", price: 12000 },
      { name: "Fried Calamari", price: 12000 },
      { name: "Sesame Calamari", price: 12000 },
      { name: "Schezwan Calamari", price: 12000 },
      { name: "Chilly Calamari", price: 12000 },
      { name: "Schezwan Octopus", price: 12000 },
      { name: "Stir-Fry Octopus", price: 12000 },
    ],
  },
  {
    id: "chinese-veg",
    name: "Chinese (Veg)",
    items: [
      { name: "Steam Sauted Veg.", price: 8000 },
      { name: "Veg. Chilly", price: 10000 },
      { name: "Veg. Manchurian", price: 10000 },
      { name: "Veg. 65", price: 10000 },
      { name: "Veg. Singapore", price: 10000 },
      { name: "Veg. Pepper", price: 10000 },
      { name: "Crispy Veg.", price: 10000 },
      { name: "Sesame Veg.", price: 10000 },
      { name: "Paneer Chilly", price: 12000 },
      { name: "Paneer Manchurian", price: 12000 },
      { name: "Paneer 65", price: 12000 },
      { name: "Paneer Singapore", price: 12000 },
      { name: "Paneer Pepper", price: 12000 },
      { name: "Crispy Paneer", price: 12000 },
      { name: "Sesame Paneer", price: 12000 },
      { name: "Paneer Tikka", price: 12000 },
    ],
  },
  {
    id: "steak",
    name: "Steak",
    note: "All steaks are served with vegetables and chips.",
    items: [
      { name: "Beef Pepper Steak", price: 15000 },
      { name: "American Beef Steak", price: 15000 },
      { name: "Mushroom Beef Steak", price: 15000 },
      { name: "Garlic Beef Steak", price: 15000 },
      { name: "Hawaii Beef Steak", price: 15000 },
      { name: "Dry Beef Steak", price: 15000 },
      { name: "Chicken Pepper Steak", price: 15000 },
      { name: "American Chicken Steak", price: 15000 },
      { name: "Mushroom Chicken Steak", price: 15000 },
      { name: "Garlic Chicken Steak", price: 15000 },
      { name: "Hawaii Chicken Steak", price: 15000 },
      { name: "Dry Chicken Steak", price: 15000 },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    sizeLabels: ["Small", "Large"],
    items: [
      { name: "Chicken Pizza", small: 11000, large: 15000 },
      { name: "Chicken Tikka", small: 11000, large: 15000 },
      { name: "Margharita", small: 11000, large: 15000 },
      { name: "Beef Pizza", small: 11000, large: 15000 },
      { name: "Mef Beef Pizza", small: 11000, large: 15000 },
      { name: "Veg. Pizza", small: 11000, large: 15000 },
      { name: "Egg Pizza", small: 11000, large: 15000 },
      { name: "Raskazoni Pizza", small: 11000, large: 15000 },
      { name: "Hawaii Pizza", small: 11000, large: 15000 },
      { name: "Paneer Pizza", small: 15000, large: 20000 },
      { name: "Seafood Mixed Pizza", small: 15000, large: 20000 },
      { name: "Calamari Pizza", small: 15000, large: 20000 },
      { name: "Prawns Pizza", small: 15000, large: 20000 },
    ],
  },
  {
    id: "platters",
    name: "Platters",
    items: [
      {
        name: "Chicken Platter",
        price: 40000,
        desc: "Sekela, lemon, peri peri, gajjar, chicken wings, crispy chicken, veg. fried rice, plain chips, masala chips, butter naan.",
      },
      {
        name: "Beef Platter",
        price: 45000,
        desc: "Mishkaki mixer, dry beef steak, mutton ribs, beef seekh kebab, veg. fried rice, plain chips, masala chips, butter naan.",
      },
    ],
  },
  {
    id: "juice",
    name: "Juice",
    items: [
      { name: "Water Melon Juice", price: 3000 },
      { name: "Mango Juice", price: 3000 },
      { name: "Pineapple Juice", price: 3000 },
      { name: "Passion Juice", price: 3000 },
      { name: "Bungo Juice", price: 3000 },
      { name: "Apple Juice", price: 3000 },
      { name: "Lemon Juice", price: 3000 },
      { name: "Lemon Mint Juice", price: 3000 },
      { name: "Orange Juice", price: 3000 },
      { name: "Avocado Juice", price: 3000 },
      { name: "Kungu Juice", price: 3000 },
      { name: "Zambarau Juice", price: 3000 },
      { name: "Date Juice", price: 4000 },
    ],
  },
  {
    id: "milk-shake",
    name: "Milk Shake",
    items: [
      { name: "Chocolate Milk Shake", price: 7000 },
      { name: "Vanilla Milk Shake", price: 7000 },
      { name: "Strawberry Milk Shake", price: 7000 },
      { name: "Banana Milk Shake", price: 7000 },
      { name: "Mango Milk Shake", price: 7000 },
    ],
  },
  {
    id: "tea",
    name: "Tea",
    items: [
      { name: "Black Tea", price: 1000 },
      { name: "Lemon Grass Tea", price: 1000 },
      { name: "Black Ginger Tea", price: 1000 },
      { name: "Green Tea", price: 1000 },
      { name: "Milk Tea", price: 2000 },
      { name: "Milk Masala Tea", price: 2000 },
    ],
  },
  {
    id: "coffee",
    name: "Coffee",
    items: [
      { name: "Black Coffee", price: 1000 },
      { name: "Milk Coffee", price: 2000 },
      { name: "Iced Coffee", price: 4000 },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      { name: "Soft Drinks", price: 1500 },
      { name: "Water (1.5 Ltrs)", price: 1000 },
      { name: "Water (500ml)", price: 500 },
    ],
  },
];

/* ---------- Helpers ---------- */

function formatPrice(n) {
  return "TSh " + n.toLocaleString("en-US") + "/=";
}

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

/* ---------- Render category navigation ---------- */

function renderNav() {
  const nav = document.getElementById("category-nav");
  MENU_DATA.forEach((cat) => {
    const btn = el("button", "nav-pill");
    btn.type = "button";
    btn.textContent = cat.name;
    btn.dataset.target = cat.id;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", "false");
    btn.addEventListener("click", () => {
      const target = document.getElementById(cat.id);
      if (!target) return;
      const headerOffset = document.querySelector(".category-nav").offsetHeight + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    });
    nav.appendChild(btn);
  });
}

/* ---------- Render menu sections ---------- */

function renderMenu() {
  const main = document.getElementById("menu-content");

  MENU_DATA.forEach((cat) => {
    const section = el("section", "category-section");
    section.id = cat.id;
    section.setAttribute("aria-labelledby", cat.id + "-heading");

    const heading = el("h2", "category-heading");
    heading.id = cat.id + "-heading";
    heading.textContent = cat.name;
    section.appendChild(heading);

    if (cat.note) {
      section.appendChild(el("p", "category-note", cat.note));
    }

    const list = el("div", "item-list");

    cat.items.forEach((item) => {
      const row = el("article", "menu-item");

      const info = el("div", "menu-item-info");
      info.appendChild(el("h3", "menu-item-name", item.name));
      if (item.desc) {
        info.appendChild(el("p", "menu-item-desc", item.desc));
      }
      row.appendChild(info);

      if (cat.sizeLabels) {
        const priceWrap = el("div", "menu-item-price menu-item-price--dual");
        const small = el("div", "price-option");
        small.innerHTML =
          '<span class="price-option-label">' +
          cat.sizeLabels[0] +
          '</span><span class="price-option-value">' +
          formatPrice(item.small) +
          "</span>";
        const large = el("div", "price-option");
        large.innerHTML =
          '<span class="price-option-label">' +
          cat.sizeLabels[1] +
          '</span><span class="price-option-value">' +
          formatPrice(item.large) +
          "</span>";
        priceWrap.appendChild(small);
        priceWrap.appendChild(large);
        row.appendChild(priceWrap);
      } else {
        const price = el("div", "menu-item-price", formatPrice(item.price));
        row.appendChild(price);
      }

      list.appendChild(row);
    });

    section.appendChild(list);
    main.appendChild(section);
  });
}

/* ---------- Active category highlighting on scroll ---------- */

function setupActiveTracking() {
  const pills = Array.from(document.querySelectorAll(".nav-pill"));
  const sections = MENU_DATA.map((c) => document.getElementById(c.id));
  const navEl = document.querySelector(".category-nav");

  function setActive(id) {
    pills.forEach((p) => {
      const isActive = p.dataset.target === id;
      p.classList.toggle("active", isActive);
      p.setAttribute("aria-selected", isActive ? "true" : "false");
      if (isActive) {
        p.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: `-${navEl.offsetHeight + 20}px 0px -70% 0px`,
      threshold: 0,
    }
  );

  sections.forEach((s) => s && observer.observe(s));

  // Set initial active state
  if (sections[0]) setActive(sections[0].id);
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderMenu();
  setupActiveTracking();

  document.getElementById("year").textContent = new Date().getFullYear();
});
