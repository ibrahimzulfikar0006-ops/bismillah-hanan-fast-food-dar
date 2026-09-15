/* =========================================================================
   BISMILLAH HANAN FAST FOOD — DIGITAL MENU
   All menu content lives in MENU_DATA below. To update prices or items,
   edit this array only — the page renders itself from this data.
   Prices are in Tanzanian Shillings (TSh) as printed on the source menu.
   ========================================================================= */


/* =========================================================================
   CART CONFIGURATION
   The WhatsApp number that receives orders is configured here.
   ========================================================================= */

const WHATSAPP_NUMBER = "25577455433";
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
