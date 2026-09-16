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
      { name: "Chicken Pizza", small: 12000, large: 18000 },
      { name: "Chicken Tikka Pizza", small: 12000, large: 18000 },
      { name: "Hawaii Pizza", small: 12000, large: 18000 },
      { name: "Raskazoni Pizza", small: 12000, large: 18000 },
      { name: "Veg Pizza", small: 12000, large: 18000 },
      { name: "Beef Pizza", small: 12000, large: 18000 },
      { name: "Mef Pizza", small: 12000, large: 18000 },
      { name: "Egg Pizza", small: 12000, large: 18000 },
      { name: "Prawns Pizza", small: 17000, large: 22000 },
      { name: "Calamari Pizza", small: 17000, large: 22000 },
      { name: "Paneer Tikka Pizza", small: 17000, large: 22000 }
    ]
  },

   /* -----------------------------------------------------------------------
     ZANZIBAR PIZZA
     ----------------------------------------------------------------------- */

  {
    id: "zanzibar-pizza",
    name: "Zanzibar Pizza",

    items: [
      { name: "Beef Znz Pizza", price: 5000 },
      { name: "Chicken Znz Pizza", price: 5000 },
      { name: "Veg Znz Pizza", price: 5000 },
      { name: "Nutella Pizza", price: 6000 },
      { name: "Beef Roll", price: 10000 },
      { name: "Chicken Roll", price: 10000 }
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
    id: "drinks",
    name: "Drinks",
    items: [
      { name: "Soft Drinks", price: 1500 },
      { name: "Water (1.5 Ltrs)", price: 1000 },
      { name: "Water (500ml)", price: 500 },
      { name: "Hill Sparkling Water (500ml)", price: 500 },
    ],
  },
];

/* =========================================================================
   CART CONFIGURATION
   The WhatsApp number that receives orders is configured here.
   ========================================================================= */

const WHATSAPP_NUMBER = "255789100555";
const RESTAURANT_NAME = "Bismillah Hanan Fast Food";
const CART_STORAGE_KEY = "bismillahHananCart";

const ORDER_TYPE_LABELS = {
  delivery: "Delivery",
  pickup: "Pickup",
};

let cart = [];
let orderType = null; // "delivery" | "pickup" | null

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
  if (!nav) return;

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

      const categoryNav = document.querySelector(".category-nav");
      const headerOffset =
        (categoryNav ? categoryNav.offsetHeight : 0) + 12;

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });

    nav.appendChild(btn);
  });
}

/* ---------- Render menu sections ---------- */

function renderMenu() {
  const main = document.getElementById("menu-content");
  if (!main) return;

  MENU_DATA.forEach((cat) => {
    const section = el("section", "category-section");

    section.id = cat.id;
    section.setAttribute(
      "aria-labelledby",
      cat.id + "-heading"
    );

    const heading = el("h2", "category-heading");

    heading.id = cat.id + "-heading";
    heading.textContent = cat.name;

    section.appendChild(heading);

    if (cat.note) {
      section.appendChild(
        el("p", "category-note", cat.note)
      );
    }

    const list = el("div", "item-list");

    cat.items.forEach((item) => {
      const row = el("article", "menu-item");
      const top = el("div", "menu-item-top");

      const info = el("div", "menu-item-info");

      info.appendChild(
        el("h3", "menu-item-name", item.name)
      );

      if (item.desc) {
        info.appendChild(
          el("p", "menu-item-desc", item.desc)
        );
      }

      top.appendChild(info);

      const actions = el("div", "menu-item-actions");

      if (cat.sizeLabels) {
        const priceWrap = el(
          "div",
          "menu-item-price menu-item-price--dual"
        );

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

        top.appendChild(priceWrap);

        actions.appendChild(
          buildAddToCartButton(
            cat,
            item,
            cat.sizeLabels[0],
            item.small
          )
        );

        actions.appendChild(
          buildAddToCartButton(
            cat,
            item,
            cat.sizeLabels[1],
            item.large
          )
        );
      } else {
        const price = el(
          "div",
          "menu-item-price",
          formatPrice(item.price)
        );

        top.appendChild(price);

        actions.appendChild(
          buildAddToCartButton(
            cat,
            item,
            null,
            item.price
          )
        );
      }

      row.appendChild(top);
      row.appendChild(actions);

      list.appendChild(row);
    });

    section.appendChild(list);
    main.appendChild(section);
  });
}

/* ---------- Build "Add to Cart" buttons ---------- */

function buildCartKey(catId, itemName, sizeLabel) {
  return sizeLabel
    ? catId + "::" + itemName + "::" + sizeLabel
    : catId + "::" + itemName;
}

function buildAddToCartButton(
  cat,
  item,
  sizeLabel,
  price
) {
  const displayName = sizeLabel
    ? item.name + " (" + sizeLabel + ")"
    : item.name;

  const btn = el("button", "add-cart-btn");

  btn.type = "button";
  btn.dataset.key = buildCartKey(
    cat.id,
    item.name,
    sizeLabel
  );
  btn.dataset.name = displayName;
  btn.dataset.price = price;

  btn.textContent = sizeLabel
    ? "+ Add " + sizeLabel
    : "+ Add to Cart";

  btn.setAttribute(
    "aria-label",
    "Add " + displayName + " to cart"
  );

  return btn;
}

/* =========================================================================
   CART LOGIC
   ========================================================================= */

/* ---------- Persistence ---------- */

function loadCart() {
  try {
    const raw = localStorage.getItem(
      CART_STORAGE_KEY
    );

    if (!raw) return [];

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (i) =>
        i &&
        typeof i.key === "string" &&
        typeof i.name === "string" &&
        typeof i.price === "number" &&
        typeof i.qty === "number" &&
        i.qty > 0
    );
  } catch (err) {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );
  } catch (err) {
    // Cart still works for the current page session.
  }
}

/* ---------- Cart mutation ---------- */

function addToCart(key, name, price) {
  const existing = cart.find(
    (i) => i.key === key
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      name,
      price,
      qty: 1,
    });
  }

  saveCart();
  updateCart();
}

function increaseQuantity(key) {
  const item = cart.find(
    (i) => i.key === key
  );

  if (!item) return;

  item.qty += 1;

  saveCart();
  updateCart();
}

function decreaseQuantity(key) {
  const item = cart.find(
    (i) => i.key === key
  );

  if (!item) return;

  item.qty -= 1;

  if (item.qty <= 0) {
    removeFromCart(key);
    return;
  }

  saveCart();
  updateCart();
}

function removeFromCart(key) {
  cart = cart.filter(
    (i) => i.key !== key
  );

  saveCart();
  updateCart();
}

function resetCart() {
  cart = [];

  saveCart();
  updateCart();
}

function clearCart() {
  if (cart.length === 0) return;

  const confirmed = window.confirm(
    "Are you sure you want to clear your cart?"
  );

  if (!confirmed) return;

  resetCart();
}

/* ---------- Totals ---------- */

function calculateCartTotal() {
  return cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );
}

function calculateCartCount() {
  return cart.reduce(
    (sum, i) => sum + i.qty,
    0
  );
}

/* =========================================================================
   ORDER TYPE — DELIVERY / PICKUP ONLY
   ========================================================================= */

function setOrderType(type) {
  if (
    type !== "delivery" &&
    type !== "pickup"
  ) {
    return;
  }

  orderType = type;

  document
    .querySelectorAll(".order-type-btn")
    .forEach((btn) => {
      const isActive =
        btn.dataset.type === type;

      btn.classList.toggle(
        "active",
        isActive
      );

      btn.setAttribute(
        "aria-checked",
        isActive ? "true" : "false"
      );
    });

  updateFieldVisibility();
  updateCart();
}

/* ---------- Customer field visibility ---------- */

function updateFieldVisibility() {
  const fieldsWrap =
    document.getElementById(
      "cart-customer-fields"
    );

  const hint =
    document.getElementById(
      "order-type-hint"
    );

  const nameInput =
    document.getElementById(
      "customer-name"
    );

  const contactInput =
    document.getElementById(
      "customer-contact"
    );

  const addressInput =
    document.getElementById(
      "customer-address"
    );

  const chosen = Boolean(orderType);

  if (fieldsWrap) {
    fieldsWrap.hidden = !chosen;
  }

  if (hint) {
    hint.classList.toggle(
      "is-hidden",
      chosen
    );
  }

  if (nameInput) {
    nameInput.hidden = !chosen;
  }

  if (contactInput) {
    contactInput.hidden = !chosen;
  }

  if (addressInput) {
    addressInput.hidden =
      orderType !== "delivery";
  }
}

/* ---------- Required-field validation ---------- */

function isOrderFormValid() {
  if (cart.length === 0) {
    return false;
  }

  if (!orderType) {
    return false;
  }

  if (
    orderType !== "delivery" &&
    orderType !== "pickup"
  ) {
    return false;
  }

  const nameInput =
    document.getElementById(
      "customer-name"
    );

  const contactInput =
    document.getElementById(
      "customer-contact"
    );

  const addressInput =
    document.getElementById(
      "customer-address"
    );

  const name = nameInput
    ? nameInput.value.trim()
    : "";

  const contact = contactInput
    ? contactInput.value.trim()
    : "";

  if (!name || !contact) {
    return false;
  }

  if (orderType === "delivery") {
    return Boolean(
      addressInput &&
      addressInput.value.trim()
    );
  }

  // Pickup only requires name + contact.
  return true;
}

/* ---------- Rendering ---------- */

function updateCart() {
  renderCartItems();
  updateCartCountBadge();
  updateCartTotalDisplay();
  updateWhatsAppButtonState();
}

function updateCartCountBadge() {
  const count =
    calculateCartCount();

  const countEl =
    document.getElementById(
      "cart-count"
    );

  const toggleBtn =
    document.getElementById(
      "cart-toggle-btn"
    );

  if (countEl) {
    countEl.textContent =
      String(count);
  }

  if (toggleBtn) {
    toggleBtn.setAttribute(
      "aria-label",
      "Open cart, " +
        count +
        (count === 1
          ? " item"
          : " items")
    );
  }
}

function updateCartTotalDisplay() {
  const totalEl =
    document.getElementById(
      "cart-total-value"
    );

  if (totalEl) {
    totalEl.textContent =
      formatPrice(
        calculateCartTotal()
      );
  }
}

function updateWhatsAppButtonState() {
  const btn =
    document.getElementById(
      "whatsapp-order-btn"
    );

  if (btn) {
    btn.disabled =
      !isOrderFormValid();
  }
}

function renderCartItems() {
  const itemsWrap =
    document.getElementById(
      "cart-items"
    );

  const emptyWrap =
    document.getElementById(
      "cart-empty"
    );

  const footerWrap =
    document.getElementById(
      "cart-footer"
    );

  if (
    !itemsWrap ||
    !emptyWrap ||
    !footerWrap
  ) {
    return;
  }

  itemsWrap.innerHTML = "";

  if (cart.length === 0) {
    itemsWrap.hidden = true;
    footerWrap.hidden = true;
    emptyWrap.hidden = false;
    return;
  }

  itemsWrap.hidden = false;
  footerWrap.hidden = false;
  emptyWrap.hidden = true;

  cart.forEach((item) => {
    const row =
      el("div", "cart-item");

    const info =
      el("div", "cart-item-info");

    info.appendChild(
      el(
        "p",
        "cart-item-name",
        item.name
      )
    );

    info.appendChild(
      el(
        "p",
        "cart-item-unit-price",
        formatPrice(item.price) +
          " each"
      )
    );

    row.appendChild(info);

    const controls =
      el(
        "div",
        "cart-item-controls"
      );

    const qtyWrap =
      el("div", "cart-qty");

    const minusBtn =
      el(
        "button",
        "cart-qty-btn",
        "−"
      );

    minusBtn.type = "button";

    minusBtn.setAttribute(
      "aria-label",
      "Decrease quantity of " +
        item.name
    );

    minusBtn.dataset.action =
      "decrease";

    minusBtn.dataset.key =
      item.key;

    const qtyValue =
      el(
        "span",
        "cart-qty-value",
        String(item.qty)
      );

    qtyValue.setAttribute(
      "aria-live",
      "polite"
    );

    const plusBtn =
      el(
        "button",
        "cart-qty-btn",
        "+"
      );

    plusBtn.type = "button";

    plusBtn.setAttribute(
      "aria-label",
      "Increase quantity of " +
        item.name
    );

    plusBtn.dataset.action =
      "increase";

    plusBtn.dataset.key =
      item.key;

    qtyWrap.appendChild(
      minusBtn
    );

    qtyWrap.appendChild(
      qtyValue
    );

    qtyWrap.appendChild(
      plusBtn
    );

    controls.appendChild(
      qtyWrap
    );

    controls.appendChild(
      el(
        "p",
        "cart-item-subtotal",
        formatPrice(
          item.price * item.qty
        )
      )
    );

    const removeBtn =
      el(
        "button",
        "cart-remove-btn",
        "Remove"
      );

    removeBtn.type = "button";

    removeBtn.setAttribute(
      "aria-label",
      "Remove " +
        item.name +
        " from cart"
    );

    removeBtn.dataset.action =
      "remove";

    removeBtn.dataset.key =
      item.key;

    controls.appendChild(
      removeBtn
    );

    row.appendChild(
      controls
    );

    itemsWrap.appendChild(
      row
    );
  });
}

/* ---------- Drawer open/close ---------- */

function openCart() {
  const overlay =
    document.getElementById(
      "cart-overlay"
    );

  const drawer =
    document.getElementById(
      "cart-drawer"
    );

  if (!overlay || !drawer) {
    return;
  }

  overlay.hidden = false;
  drawer.hidden = false;

  document.body.classList.add(
    "cart-open"
  );

  requestAnimationFrame(() => {
    overlay.classList.add(
      "visible"
    );

    drawer.classList.add(
      "open"
    );
  });
}

function closeCart() {
  const overlay =
    document.getElementById(
      "cart-overlay"
    );

  const drawer =
    document.getElementById(
      "cart-drawer"
    );

  if (!overlay || !drawer) {
    return;
  }

  overlay.classList.remove(
    "visible"
  );

  drawer.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "cart-open"
  );

  setTimeout(() => {
    overlay.hidden = true;
    drawer.hidden = true;
  }, 250);
}

/* ---------- Reset order form ---------- */

function resetOrderForm() {
  orderType = null;

  document
    .querySelectorAll(
      ".order-type-btn"
    )
    .forEach((btn) => {
      btn.classList.remove(
        "active"
      );

      btn.setAttribute(
        "aria-checked",
        "false"
      );
    });

  [
    "customer-name",
    "customer-contact",
    "customer-address",
  ].forEach((id) => {
    const input =
      document.getElementById(id);

    if (input) {
      input.value = "";
    }
  });

  updateFieldVisibility();
}

/* =========================================================================
   WHATSAPP ORDER
   ========================================================================= */

function sendOrderToWhatsApp() {
  if (!isOrderFormValid()) {
    return;
  }

  const nameInput =
    document.getElementById(
      "customer-name"
    );

  const contactInput =
    document.getElementById(
      "customer-contact"
    );

  const addressInput =
    document.getElementById(
      "customer-address"
    );

  const customerName =
    nameInput
      ? nameInput.value.trim()
      : "";

  const customerContact =
    contactInput
      ? contactInput.value.trim()
      : "";

  const customerAddress =
    addressInput
      ? addressInput.value.trim()
      : "";

  const lines = [];

  lines.push(
    "Hello " +
      RESTAURANT_NAME +
      ","
  );

  lines.push("");

  lines.push(
    "I would like to place an order:"
  );

  lines.push("");

  cart.forEach((item) => {
    lines.push(
      item.qty +
        " × " +
        item.name +
        " — " +
        formatPrice(
          item.price * item.qty
        )
    );
  });

  lines.push("");

  lines.push(
    "Total: " +
      formatPrice(
        calculateCartTotal()
      )
  );

  lines.push("");

  lines.push(
    "Order type: " +
      (ORDER_TYPE_LABELS[
        orderType
      ] || orderType)
  );

  lines.push(
    "Name: " +
      customerName
  );

  lines.push(
    "Contact: " +
      customerContact
  );

  if (orderType === "delivery") {
    lines.push(
      "Delivery address: " +
        customerAddress
    );
  }

  lines.push("");

  lines.push(
    "Please confirm my order. Thank you."
  );

  const message =
    lines.join("\n");

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(
    url,
    "_blank",
    "noopener"
  );

  resetCart();
  resetOrderForm();
  closeCart();
}

/* =========================================================================
   CART UI EVENTS
   ========================================================================= */

function setupCartUI() {
  const menuMain =
    document.getElementById(
      "menu-content"
    );

  const cartToggleBtn =
    document.getElementById(
      "cart-toggle-btn"
    );

  const cartCloseBtn =
    document.getElementById(
      "cart-close-btn"
    );

  const cartOverlay =
    document.getElementById(
      "cart-overlay"
    );

  const cartBrowseBtn =
    document.getElementById(
      "cart-browse-btn"
    );

  const clearCartBtn =
    document.getElementById(
      "clear-cart-btn"
    );

  const whatsappBtn =
    document.getElementById(
      "whatsapp-order-btn"
    );

  const cartItemsWrap =
    document.getElementById(
      "cart-items"
    );

  const orderTypeOptions =
    document.getElementById(
      "order-type-options"
    );

  const cartFooter =
    document.getElementById(
      "cart-footer"
    );

  /* Add-to-cart clicks */

  if (menuMain) {
    menuMain.addEventListener(
      "click",
      (e) => {
        const btn =
          e.target.closest(
            ".add-cart-btn"
          );

        if (!btn) return;

        addToCart(
          btn.dataset.key,
          btn.dataset.name,
          Number(
            btn.dataset.price
          )
        );

        const originalText =
          btn.textContent;

        btn.classList.add(
          "added"
        );

        btn.textContent =
          "Added ✓";

        setTimeout(() => {
          btn.classList.remove(
            "added"
          );

          btn.textContent =
            originalText;
        }, 900);
      }
    );
  }

  /* Cart drawer */

  if (cartToggleBtn) {
    cartToggleBtn.addEventListener(
      "click",
      openCart
    );
  }

  if (cartCloseBtn) {
    cartCloseBtn.addEventListener(
      "click",
      closeCart
    );
  }

  if (cartOverlay) {
    cartOverlay.addEventListener(
      "click",
      closeCart
    );
  }

  if (cartBrowseBtn) {
    cartBrowseBtn.addEventListener(
      "click",
      closeCart
    );
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener(
      "click",
      clearCart
    );
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener(
      "click",
      sendOrderToWhatsApp
    );
  }

  /* Delivery / Pickup selection */

  if (orderTypeOptions) {
    orderTypeOptions.addEventListener(
      "click",
      (e) => {
        const btn =
          e.target.closest(
            ".order-type-btn"
          );

        if (!btn) return;

        const type =
          btn.dataset.type;

        if (
          type !== "delivery" &&
          type !== "pickup"
        ) {
          return;
        }

        setOrderType(type);
      }
    );
  }

  /* Customer field validation */

  if (cartFooter) {
    cartFooter.addEventListener(
      "input",
      (e) => {
        if (
          e.target.classList &&
          e.target.classList.contains(
            "cart-input"
          )
        ) {
          updateWhatsAppButtonState();
        }
      }
    );
  }

  /* Quantity controls */

  if (cartItemsWrap) {
    cartItemsWrap.addEventListener(
      "click",
      (e) => {
        const btn =
          e.target.closest(
            "button[data-action]"
          );

        if (!btn) return;

        const action =
          btn.dataset.action;

        const key =
          btn.dataset.key;

        if (
          action === "increase"
        ) {
          increaseQuantity(key);
        } else if (
          action === "decrease"
        ) {
          decreaseQuantity(key);
        } else if (
          action === "remove"
        ) {
          removeFromCart(key);
        }
      }
    );
  }

  /* Escape key closes cart */

  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key !== "Escape") {
        return;
      }

      const drawer =
        document.getElementById(
          "cart-drawer"
        );

      if (
        drawer &&
        !drawer.hidden
      ) {
        closeCart();
      }
    }
  );
}

/* =========================================================================
   ACTIVE CATEGORY HIGHLIGHTING
   ========================================================================= */

function setupActiveTracking() {
  const pills = Array.from(
    document.querySelectorAll(
      ".nav-pill"
    )
  );

  const sections =
    MENU_DATA.map(
      (c) =>
        document.getElementById(
          c.id
        )
    );

  const navEl =
    document.querySelector(
      ".category-nav"
    );

  function setActive(id) {
    pills.forEach((p) => {
      const isActive =
        p.dataset.target === id;

      p.classList.toggle(
        "active",
        isActive
      );

      p.setAttribute(
        "aria-selected",
        isActive
          ? "true"
          : "false"
      );

      if (isActive) {
        p.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    });
  }

  const navHeight =
    navEl
      ? navEl.offsetHeight
      : 0;

  const observer =
    new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => {
            if (
              entry.isIntersecting
            ) {
              setActive(
                entry.target.id
              );
            }
          }
        );
      },
      {
        root: null,
        rootMargin:
          `-${navHeight + 20}px 0px -70% 0px`,
        threshold: 0,
      }
    );

  sections.forEach((s) => {
    if (s) {
      observer.observe(s);
    }
  });

  if (sections[0]) {
    setActive(
      sections[0].id
    );
  }
}

/* =========================================================================
   INIT
   ========================================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    renderNav();
    renderMenu();
    setupActiveTracking();

    cart = loadCart();

    setupCartUI();

    updateFieldVisibility();
    updateCart();

    const yearEl =
      document.getElementById(
        "year"
      );

    if (yearEl) {
      yearEl.textContent =
        new Date().getFullYear();
    }
  }
);
