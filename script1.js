/* =========================================================================
   BISMILLAH HANAN FAST FOOD — DIGITAL MENU
   All menu content lives in MENU_DATA below. To update prices or items,
   edit this array only — the page renders itself from this data.
   Prices are in Tanzanian Shillings (TSh) as printed on the source menu.
   ========================================================================= */
const MENU_DATA = [
   
/* -----------------------------------------------------------------------
     SOUP
     ----------------------------------------------------------------------- */

  {
    id: "soup",
    name: "Soup",

    items: [
      { name: "Vegetable Clear Soup", price: 7000 },
      { name: "Tomato Soup", price: 7000 },
      { name: "Chicken Corn Soup", price: 8000 },
      { name: "Chicken Hot & Sour Soup", price: 8000 },
      { name: "Chicken Manchow Soup", price: 8000 },
      { name: "Chicken Cream Soup", price: 8000 }
    ]
  },
   
  /* -----------------------------------------------------------------------
     BARBEQUE
     ----------------------------------------------------------------------- */

  {
    id: "barbeque",
    name: "Barbeque",

    items: [
      { name: "Sekela Chicken", price: 6000 },
      { name: "Gajjar Chicken", price: 6000 },
      { name: "Lemon Chicken", price: 6000 },
      { name: "Choma Chicken", price: 6000 },
      { name: "Periperi Chicken", price: 6000 },
      { name: "Fried Chicken/Pilipili", price: 6000 },
      { name: "Beef Mishkaki", price: 7000 },
      { name: "Nundu", price: 8000 },
      { name: "Malai Chicken", price: 8000 },
      { name: "Chicken Boti", price: 10000 },
      { name: "Malai Boti", price: 10000 },
      { name: "Beef Seekh Kabab", price: 10000 },
      { name: "Chicken Seekh Kabab", price: 10000 },
      { name: "Chicken Wings", price: 10000 },
      { name: "Paneer Tikka", price: 12000 },
      { name: "Mutton Chops", price: 12000 },
      { name: "Bbq Prawns", price: 15000 }
    ]
  },


  /* -----------------------------------------------------------------------
     CHIPS
     ----------------------------------------------------------------------- */

  {
    id: "chips",
    name: "Chips",

    items: [
      { name: "Plain Chips", price: 3000 },
      { name: "Masala Chips", price: 4000 },
      { name: "Periperi Chips", price: 4000 },
      { name: "Vegetable Chips", price: 5000 },
      { name: "Schezwan Chips", price: 5000 },
      { name: "Garlic Chips", price: 5000 },
      { name: "Plain Zege", price: 4000 },
      { name: "Masala Zege", price: 5000 }
    ]
  },


  /* -----------------------------------------------------------------------
     NAAN
     ----------------------------------------------------------------------- */

  {
    id: "naan",
    name: "Naan",

    items: [
      { name: "Plain Naan", price: 2000 },
      { name: "Butter Naan", price: 2000 },
      { name: "Kulcha Naan", price: 2000 },
      { name: "Lacha Paratha", price: 2000 },
      { name: "Garlic Naan", price: 3000 },
      { name: "Masala Naan", price: 3000 },
      { name: "Cheese Naan", price: 4000 },
      { name: "Chilly Garlic Naan", price: 4000 }
    ]
  },


  /* -----------------------------------------------------------------------
     RICE
     ----------------------------------------------------------------------- */

  {
    id: "rice",
    name: "Rice",

    items: [
      { name: "Steam Rice", price: 6000 },
      { name: "Jeera Rice", price: 6000 },
      { name: "Veg. Fried Rice", price: 7000 },
      { name: "Egg Fried Rice", price: 8000 },
      { name: "Chicken Fried Rice", price: 10000 },
      { name: "Prawns Fried Rice", price: 12000 },
      { name: "Mix Fried Rice", price: 12000 }
    ]
  },


  /* -----------------------------------------------------------------------
     NOODLE
     ----------------------------------------------------------------------- */

  {
    id: "noodle",
    name: "Noodle",

    items: [
      { name: "Veg. Noodle", price: 8000 },
      { name: "Egg Noodle", price: 8000 },
      { name: "Chicken Hakka Noodle", price: 10000 },
      { name: "Beef Noodle", price: 10000 },
      { name: "Prawns Noodle", price: 12000 },
      { name: "Mix Noodle", price: 12000 },
      { name: "Schezwan Noodle (Chicken/Beef)", price: 12000 }
    ]
  },


  /* -----------------------------------------------------------------------
     INDIAN NON-VEG
     ----------------------------------------------------------------------- */
  {
    id: "indian-non-veg",
    name: "Indian (Non-Veg)",

    items: [
      { name: "Chicken Hydrabadi", price: 12000 },
      { name: "Chicken Makhani", price: 12000 },
      { name: "Chicken Karai", price: 12000 },
      { name: "Chicken Coconut", price: 12000 },
      { name: "Chicken Curry", price: 12000 },
      { name: "Chicken Nawabi", price: 12000 },
      { name: "Chicken Kolapuri", price: 12000 },
      { name: "Chicken Tikka Masala", price: 12000 },
      { name: "Chicken Korma", price: 12000 },
      { name: "Chicken Kadai", price: 12000 },
      { name: "Chicken White Karai", price: 12000 },
      { name: "Mutton White Karai", price: 12000 },
      { name: "Mutton Makhani", price: 12000 },
      { name: "Mutton Curry", price: 12000 },
      { name: "Mutton Kadai", price: 12000 },
      { name: "Mutton Karai", price: 12000 },
      { name: "Mutton Masala", price: 12000 },
      { name: "Mutton Korma", price: 12000 },
      { name: "Mutton Rogan Josh", price: 12000 },
      { name: "Prawns Curry", price: 12000 },
      { name: "Prawns Karai", price: 12000 },
      { name: "Prawns Kadai", price: 12000 },
      { name: "Prawns Hydrabadi", price: 12000 },
      { name: "Prawns Kolapuri", price: 12000 },
      { name: "Prawns Masala", price: 12000 },
      { name: "Butter Prawns", price: 12000 }
    ]
  },


  /* -----------------------------------------------------------------------
     INDIAN VEG
     ----------------------------------------------------------------------- */

  {
    id: "indian-veg",
    name: "Indian (Veg)",

    items: [
      { name: "Daal Fry", price: 10000 },
      { name: "Daal Tarka", price: 10000 },
      { name: "Veg. Hydrabadi", price: 10000 },
      { name: "Veg Kadai", price: 10000 },
      { name: "Veg Karai", price: 10000 },
      { name: "Veg Kolapuri", price: 10000 },
      { name: "Mix Veg Curry", price: 10000 },
      { name: "Paneer Makhani", price: 12000 },
      { name: "Paneer Hydrabadi", price: 12000 },
      { name: "Paneer Karai", price: 12000 },
      { name: "Paneer Kadai", price: 12000 },
      { name: "Paneer Tikka Masala", price: 12000 },
      { name: "Paneer Kadai", price: 12000 },
      { name: "Paneer Karai", price: 12000 },
      { name: "Paneer Makhani", price: 12000 },
      { name: "Paneer Curry", price: 12000 },
      { name: "Paneer Tikka Masala", price: 12000 },
      { name: "Palak Paneer", price: 12000 },
      { name: "Paneer Corn Masala", price: 12000 }
    ]
  },


  /* -----------------------------------------------------------------------
     CHINESE NON-VEG
     ----------------------------------------------------------------------- */

  {
    id: "chinese-non-veg",
    name: "Chinese (Non-Veg)",

    items: [
      { name: "Chilly Chicken", price: 12000 },
      { name: "Chicken Manchurain", price: 12000 },
      { name: "Chicken 65", price: 12000 },
      { name: "Chicken Pepper", price: 12000 },
      { name: "Chicken Singapore", price: 12000 },
      { name: "Chicken Lollypop", price: 12000 },
      { name: "Chicken Kolapuri", price: 12000 },
      { name: "Chicken Wings", price: 12000 },
      { name: "Cripsy Chicken", price: 12000 },
      { name: "Crispy Prawns", price: 15000 },
      { name: "Chilly Prawns", price: 15000 },
      { name: "Prawns 65", price: 15000 },
      { name: "Pranws Pepper", price: 15000 },
      { name: "Beef Chilly", price: 12000 },
      { name: "Beef Pepper", price: 12000 }
    ]
  },


  /* -----------------------------------------------------------------------
     CHINESE VEG
     ----------------------------------------------------------------------- */

  {
    id: "chinese-veg",
    name: "Chinese (Veg)",

    items: [
      { name: "Chilly Mushroom", price: 10000 },
      { name: "Veg Manchurain", price: 10000 },
      { name: "Veg 65", price: 10000 },
      { name: "Crispy Veg.", price: 10000 },
      { name: "Chilly Paneer", price: 12000 },
      { name: "Paneer 65", price: 12000 },
      { name: "Paneer Manchurian", price: 12000 },
      { name: "Crispy Paneer", price: 12000 }
    ]
  },


  /* -----------------------------------------------------------------------
     GRILLED STEAK
     ----------------------------------------------------------------------- */

  {
    id: "grilled-steak",
    name: "Grilled Steak",

    note: "All steaks are served with mashpotato/fries.",

    items: [
      { name: "Beef Pepper Steak", price: 18000 },
      { name: "Hawaii Beef Steak", price: 18000 },
      { name: "American Beef Steak", price: 15000 },
      { name: "Cowboy Beef Steak", price: 15000 },
      { name: "Cheese Mustard Beef Steak", price: 15000 },
      { name: "French Onion Beef Steak", price: 15000 },
      { name: "Hannan Special Beef Steak", price: 15000 },
      { name: "Chicken Pepper Steak", price: 18000 },
      { name: "Hawaii Chicken Steak", price: 18000 },
      { name: "American Chicken Steak", price: 15000 },
      { name: "Cowboy Chicknen Steak", price: 15000 },
      { name: "Cheese Mustard Chicken Steak", price: 15000 },
      { name: "French Onion Chicken Steak", price: 15000 },
      { name: "Hannan Special Chicken Steak", price: 15000 }
    ]
  },


  /* -----------------------------------------------------------------------
     ITALIAN PIZZA
     ----------------------------------------------------------------------- */

  {
    id: "italian-pizza",
    name: "Italian Pizza",

    sizeLabels: ["Small", "Large"],

    items: [
      { name: "Chicken Pizza", small: 11000, large: 15000 },
      { name: "Chicken Tikka Pizza", small: 11000, large: 15000 },
      { name: "Hawaii Pizza", small: 11000, large: 15000 },
      { name: "Raskazoni Pizza", small: 11000, large: 15000 },
      { name: "Veg Pizza", small: 11000, large: 15000 },
      { name: "Beef Pizza", small: 11000, large: 15000 },
      { name: "Mef Pizza", small: 11000, large: 15000 },
      { name: "Egg Pizza", small: 11000, large: 15000 },
      { name: "Prawns Pizza", small: 17000, large: 22000 },
      { name: "Calamari Pizza", small: 17000, large: 22000 },
      { name: "Paneer Tikka Pizza", small: 17000, large: 22000 }
    ]
  },


  /* -----------------------------------------------------------------------
     HANNAN KISINIA'S / PLATTERS
     ----------------------------------------------------------------------- */

  {
    id: "hanan-platters",
    name: "Hannan Kisinia's/Platters",
    note: "Take away Extra Charges 3,000/=",

    items: [
      {
        name: "Chicken Platter",
        price: 35000
      },

      {
        name: "Beef Platter",
        price: 40000
      },

      {
        name: "Mix Platter(Chicken & Beef)",
        price: 45000
      },

      {
        name: "Seafood PLatter (Small)",
        price: 45000
      },

       {
        name: "Seafood PLatter (Large)",
        price: 90000
      }
    ]
  },

  /* -----------------------------------------------------------------------
     ZANZIBAR PIZZA
     ----------------------------------------------------------------------- */

  {
    id: "zanzibar-pizza",
    name: "Zanzibar Pizza",

    items: [
      { name: "Beef Znz Pizza", price: 4000 },
      { name: "Chicken Znz Pizza", price: 4000 },
      { name: "Veg Znz Pizza", price: 4000 },
      { name: "Nutella Pizza", price: 6000 },
      { name: "Beef Roll", price: 10000 },
      { name: "Chicken Roll", price: 10000 }
    ]
  }

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
