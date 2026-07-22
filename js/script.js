"use strict";

const categories = {
  breakfast: { label: "Breakfast", emoji: "🥞" },
  bakery: { label: "Bakery", emoji: "🍩" },
  chocolate: { label: "Chocolate", emoji: "🍫" },
  drinks: { label: "Drinks", emoji: "☕" },
  savory: { label: "Savory", emoji: "🌯" },
  chilled: { label: "Chilled", emoji: "🍨" }
};

// Danielle's safe signature CCD recipe collection.
// Add another recipe by copying one object and changing its name/category/flavor.
const recipes = [
  { name: "Fluffy CCD Pancakes", category: "breakfast", flavor: "Cloud-soft, warm, and softly sweet." },
  { name: "Cinnamony Cinnamon Maple Buttermilk Pancakes", category: "breakfast", flavor: "Diner-style fluff with cinnamon-maple comfort." },
  { name: "Pumpkin Flaxseed Cinnamon Pancakes", category: "breakfast", flavor: "Tender, spiced, and gently nutty without nuts." },
  { name: "Kefir Pancakes", category: "breakfast", flavor: "Tangy buttermilk-style lift and a pillowy center." },
  { name: "Cottage Cheese Pancakes", category: "breakfast", flavor: "Creamy, structured, and extra tender." },
  { name: "McDonald's-Style CCD Hotcakes", category: "breakfast", flavor: "Soft golden stacks with nostalgic sweetness." },
  { name: "Cinnamon Greek Yogurt French Toast", category: "breakfast", flavor: "Custardy inside with cinnamon warmth." },
  { name: "Pumpkin Cinnamon French Toast", category: "breakfast", flavor: "Autumn-spiced, soft, and golden-edged." },
  { name: "Pancake Bake", category: "breakfast", flavor: "A sliceable pancake with a tender baked crumb." },
  { name: "French Toast Bake", category: "breakfast", flavor: "Cozy casserole energy in a compact bake." },
  { name: "Chocolate Chip Breakfast Cake", category: "breakfast", flavor: "Breakfast-soft with little melted chocolate pockets." },
  { name: "Maple Vanilla Baked Oats", category: "breakfast", flavor: "Cake-like baked oats with maple-vanilla warmth." },
  { name: "Mocha Breakfast Loaf", category: "breakfast", flavor: "Coffee-cocoa aroma with a soft loaf texture." },

  { name: "Clear-Glaze Microwave Donuts", category: "bakery", flavor: "Fluffy quick donuts under a glossy sweet glaze." },
  { name: "Glazed Vanilla Donuts", category: "bakery", flavor: "Classic vanilla bakery sweetness, soft and bright." },
  { name: "Chocolate Glaze Donuts", category: "bakery", flavor: "Tender donuts with a smooth cocoa finish." },
  { name: "Cinnamon Sugar Donut Holes", category: "bakery", flavor: "Warm, sparkly, bite-sized cinnamon clouds." },
  { name: "Sour Cream Flaxseed Cinnamon Rolls", category: "bakery", flavor: "Tangy-soft spirals with a cinnamon center." },
  { name: "Kefir Cinnamon Rolls", category: "bakery", flavor: "Pillowy rolls with gentle cultured tang." },
  { name: "Microwave Cinnamon Rolls", category: "bakery", flavor: "Fast, fluffy spirals made for immediate joy." },
  { name: "Cinnamon Roll Bowl Cake", category: "bakery", flavor: "Swirled cinnamon-roll flavor in spoonable cake form." },
  { name: "Pumpkin Spice Muffins", category: "bakery", flavor: "Moist domes with cozy pumpkin spice." },
  { name: "Mocha Crumb Muffins", category: "bakery", flavor: "Coffee-shop cocoa flavor with crumbly tops." },
  { name: "Chocolate Marble Muffins", category: "bakery", flavor: "Vanilla and chocolate ribbons in every bite." },
  { name: "Cinnamon Swirl Oat-Flour Mug Cake", category: "bakery", flavor: "Warm cinnamon ribbons and a soft mug-cake crumb." },

  { name: "Fudgy CCD Brownies", category: "chocolate", flavor: "Dense, chocolatey, and softly gooey." },
  { name: "Spinach Brownies", category: "chocolate", flavor: "Deep cocoa hides a smooth green secret." },
  { name: "Oreo Powder Brownies", category: "chocolate", flavor: "Cookies-and-cream cocoa richness." },
  { name: "Lava Brownie Cake", category: "chocolate", flavor: "A molten center inside a soft chocolate shell." },
  { name: "Brownie Batter Cake", category: "chocolate", flavor: "Thick batter-like softness with baked edges." },
  { name: "Double Chocolate Cake", category: "chocolate", flavor: "Cocoa crumb plus melted chocolate drama." },
  { name: "Chocolate Mug Cake", category: "chocolate", flavor: "Fast, warm, fluffy chocolate comfort." },
  { name: "Classic Chocolate Chip Cookies", category: "chocolate", flavor: "Soft centers, cozy vanilla, and chocolate pockets." },
  { name: "Double Chocolate Cookies", category: "chocolate", flavor: "Brownie-cookie energy with extra cocoa." },
  { name: "Brookie Bars", category: "chocolate", flavor: "Cookie meets brownie in one chewy square." },
  { name: "Oreo Crumble Bars", category: "chocolate", flavor: "Creamy cookie crumble over a soft base." },
  { name: "CCD Cake Pop Bites", category: "chocolate", flavor: "Tiny frosted cake bites with party energy." },

  { name: "Hot Mocha Coffee", category: "drinks", flavor: "Cocoa, coffee, cinnamon, and mellow milkiness." },
  { name: "Chili Mocha Latte", category: "drinks", flavor: "Chocolate-coffee warmth with a tiny spicy glow." },
  { name: "Cinnamon Roll Latte", category: "drinks", flavor: "Vanilla-cinnamon steam with bakery-shop vibes." },
  { name: "Cookies and Cream Coffee", category: "drinks", flavor: "Coffee with a playful cookies-and-cream finish." },
  { name: "Café Mocha Shake", category: "drinks", flavor: "Cold, thick, chocolate-coffee café energy." },
  { name: "Chocolate Milkshake", category: "drinks", flavor: "Creamy, frosty, and straightforwardly chocolate." },
  { name: "Vanilla Latte", category: "drinks", flavor: "Soft vanilla, gentle coffee, and cozy foam." },
  { name: "Hot Lemon Turmeric Chili Cinnamon Tea", category: "drinks", flavor: "Bright lemon, warm spice, and a lively finish." },

  { name: "Avocado Toast", category: "savory", flavor: "Creamy, lemony, and lightly savory." },
  { name: "Egg and Avocado Bagel Sandwich", category: "savory", flavor: "Warm egg, creamy avocado, and chewy bagel comfort." },
  { name: "Spinach Egg Toast", category: "savory", flavor: "Garlicky greens and soft egg on crisp toast." },
  { name: "Mozzarella Breakfast Quesadilla", category: "savory", flavor: "Melty cheese, crisp tortilla, cozy breakfast center." },
  { name: "Pizza Eggs", category: "savory", flavor: "Saucy, cheesy, and playful breakfast pizza flavor." },
  { name: "Chicken Burrito", category: "savory", flavor: "Warm seasoned chicken wrapped into a hearty pocket." },
  { name: "Arrabbiata Chicken Tortilla Melt", category: "savory", flavor: "Tomato-chili warmth with melty cheese and chicken." },
  { name: "Protein Pizza Tortilla", category: "savory", flavor: "Crisp edges, melty center, personal-pizza energy." },
  { name: "Mini Tortilla Pizza", category: "savory", flavor: "Crunchy, cheesy, and perfectly snack-sized." },
  { name: "BBQ Flatbread Pizza", category: "savory", flavor: "Sweet-smoky sauce, chicken, and crisp flatbread." },
  { name: "Spinach Chicken Wrap", category: "savory", flavor: "Fresh greens and savory chicken in a soft wrap." },
  { name: "Greek Chicken Bowl", category: "savory", flavor: "Herby, creamy, bright, and filling." },
  { name: "Arroz con Pollo", category: "savory", flavor: "Savory seasoned rice and tender chicken comfort." },
  { name: "Fried Rice with Chicken", category: "savory", flavor: "Toasty rice, savory chicken, and skillet warmth." },
  { name: "BBQ Chicken Drumsticks", category: "savory", flavor: "Sticky-sweet, smoky, and deeply savory." },
  { name: "Garlic Toasted Tortilla Chips", category: "savory", flavor: "Crisp, garlicky, and built for dipping." },
  { name: "Spinach Yogurt Dip", category: "savory", flavor: "Cool, creamy, green, and lightly tangy." },

  { name: "CCD Yogurt Ice-Cream Bowl", category: "chilled", flavor: "Cold, thick, creamy, and dessert-shop cozy." },
  { name: "Oreo Frozen Yogurt Bowl", category: "chilled", flavor: "Creamy tang with crunchy cookie pieces." },
  { name: "Chocolate Pudding Bowl", category: "chilled", flavor: "Silky, thick, and deeply cocoa-rich." },
  { name: "Cookies and Cream Yogurt Whip", category: "chilled", flavor: "Airy creaminess with cookie speckles." },
  { name: "Avocado Chocolate Mousse", category: "chilled", flavor: "Ultra-smooth, rich, and chocolate-forward." },
  { name: "Mocha Cream Cup", category: "chilled", flavor: "Cold coffee-cocoa cream with a soft finish." },
  { name: "Chocolate Soft-Serve Bowl", category: "chilled", flavor: "Frosty, whipped, and chocolate-swirled." },
  { name: "Cinnamon Toast Yogurt Fluff", category: "chilled", flavor: "Thick vanilla-cinnamon cream with toast vibes." },
  { name: "Vanilla Cheesecake Cup", category: "chilled", flavor: "Tangy vanilla cream with cheesecake energy." },
  { name: "Frozen Chocolate Shell Yogurt Bowl", category: "chilled", flavor: "Creamy yogurt beneath a crackly chocolate shell." }
];

const poemLines = [
  "Drag the comfort into a shape that moves.",
  "Let flour become cloud and cinnamon become courage.",
  "Let pumpkin glow softly beneath a microwave moon.",
  "Let coffee wake the page with cocoa-colored light.",
  "I compare, remix, and rebuild what already feels like home.",
  "Not to shrink joy—never that—",
  "but to give every craving another costume.",
  "A pancake can be a memory.",
  "A cinnamon roll can be a tiny spiral galaxy.",
  "A savory wrap can hold an ordinary afternoon together.",
  "Each tile is a choice; each choice rearranges the poem.",
  "When comfort and creativity share the plate, Cozy Core wins."
];

const roundSize = poemLines.length;
const tilePool = document.querySelector("#tile-pool");
const scoreElement = document.querySelector("#score");
const roundTotalElement = document.querySelector("#round-total");
const progressFill = document.querySelector("#progress-fill");
const statusElement = document.querySelector("#game-status");
const poemStage = document.querySelector("#poem-stage");
const zones = [...document.querySelectorAll(".drop-zone")];
const vault = document.querySelector("#recipe-vault");
const vaultGrid = document.querySelector("#vault-grid");
const filterRow = document.querySelector("#filter-row");
const celebration = document.querySelector("#celebration");

let currentRound = [];
let score = 0;
let selectedTile = null;
let ghost = null;
let dragTile = null;
let dragPointerId = null;
let didDrag = false;
let dragStartX = 0;
let dragStartY = 0;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function recipeEmoji(category) {
  return categories[category]?.emoji || "🍓";
}

function startRound() {
  score = 0;
  selectedTile = null;
  currentRound = shuffle(recipes).slice(0, roundSize);
  tilePool.innerHTML = "";
  zones.forEach((zone) => {
    zone.querySelector(".zone-items").innerHTML = "";
    zone.querySelector(".zone-count").textContent = "0";
    zone.classList.remove("correct-flash", "wrong-flash", "drag-over");
  });
  renderPoem();
  currentRound.forEach((recipe, index) => tilePool.appendChild(createTile(recipe, index)));
  roundTotalElement.textContent = String(roundSize);
  updateProgress();
  setStatus("Choose a tile and begin the battle.");
  celebration.hidden = true;
}

function createTile(recipe, index) {
  const tile = document.createElement("div");
  tile.className = "recipe-tile";
  tile.tabIndex = 0;
  tile.setAttribute("role", "button");
  tile.setAttribute("aria-pressed", "false");
  tile.setAttribute("aria-label", `${recipe.name}. Category: ${categories[recipe.category].label}.`);
  tile.dataset.category = recipe.category;
  tile.dataset.recipe = recipe.name;
  tile.dataset.solved = "false";
  tile.style.setProperty("--tilt", `${((index % 5) - 2) * 0.7}deg`);
  tile.innerHTML = `
    <span class="tile-emoji" aria-hidden="true">${recipeEmoji(recipe.category)}</span>
    <span class="tile-name">${recipe.name}</span>
    <span class="tile-flavor">${recipe.flavor}</span>
  `;

  tile.addEventListener("pointerdown", beginPointerDrag);
  tile.addEventListener("click", (event) => {
    if (didDrag || tile.dataset.solved === "true") return;
    event.stopPropagation();
    selectTile(tile);
  });
  tile.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && tile.dataset.solved !== "true") {
      event.preventDefault();
      selectTile(tile);
    }
  });
  return tile;
}

function selectTile(tile) {
  if (selectedTile && selectedTile !== tile) {
    selectedTile.classList.remove("is-selected");
    selectedTile.setAttribute("aria-pressed", "false");
  }
  const alreadySelected = selectedTile === tile;
  selectedTile = alreadySelected ? null : tile;
  tile.classList.toggle("is-selected", !alreadySelected);
  tile.setAttribute("aria-pressed", String(!alreadySelected));
  setStatus(alreadySelected ? "Tile deselected." : `${tile.dataset.recipe} selected. Now choose a battle zone.`);
}

function beginPointerDrag(event) {
  const tile = event.currentTarget;
  if (tile.dataset.solved === "true" || event.button > 0) return;

  didDrag = false;
  dragTile = tile;
  dragPointerId = event.pointerId;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  tile.setPointerCapture(event.pointerId);
  tile.addEventListener("pointermove", movePointerDrag);
  tile.addEventListener("pointerup", endPointerDrag);
  tile.addEventListener("pointercancel", cancelPointerDrag);
}

function movePointerDrag(event) {
  if (!dragTile || event.pointerId !== dragPointerId) return;
  const distance = Math.hypot(event.clientX - dragStartX, event.clientY - dragStartY);
  if (!didDrag && distance < 7) return;

  if (!didDrag) {
    didDrag = true;
    dragTile.classList.add("is-dragging");
    ghost = dragTile.cloneNode(true);
    ghost.className = "recipe-tile drag-ghost";
    ghost.removeAttribute("tabindex");
    document.body.appendChild(ghost);
  }

  positionGhost(event.clientX, event.clientY);
  highlightZoneAt(event.clientX, event.clientY);
}

function positionGhost(x, y) {
  if (!ghost) return;
  ghost.style.left = `${x + 14}px`;
  ghost.style.top = `${y + 14}px`;
}

function highlightZoneAt(x, y) {
  zones.forEach((zone) => zone.classList.remove("drag-over"));
  const zone = document.elementFromPoint(x, y)?.closest(".drop-zone");
  if (zone) zone.classList.add("drag-over");
}

function endPointerDrag(event) {
  const tile = dragTile;
  cleanupPointerDrag(event.currentTarget);

  if (!didDrag || !tile) {
    window.setTimeout(() => { didDrag = false; }, 0);
    return;
  }

  const zone = document.elementFromPoint(event.clientX, event.clientY)?.closest(".drop-zone");
  if (zone) attemptPlacement(tile, zone);
  else setStatus(`${tile.dataset.recipe} returned to the recipe deck.`);
  window.setTimeout(() => { didDrag = false; }, 0);
}

function cancelPointerDrag(event) {
  cleanupPointerDrag(event.currentTarget);
  didDrag = false;
}

function cleanupPointerDrag(tile) {
  zones.forEach((zone) => zone.classList.remove("drag-over"));
  if (tile) {
    tile.classList.remove("is-dragging");
    tile.removeEventListener("pointermove", movePointerDrag);
    tile.removeEventListener("pointerup", endPointerDrag);
    tile.removeEventListener("pointercancel", cancelPointerDrag);
  }
  ghost?.remove();
  ghost = null;
  dragTile = null;
  dragPointerId = null;
}

function attemptPlacement(tile, zone) {
  if (!tile || tile.dataset.solved === "true") return;
  if (tile.dataset.category === zone.dataset.category) {
    solveTile(tile, zone);
  } else {
    tile.classList.remove("is-selected");
    tile.classList.add("wrong");
    zone.classList.add("wrong-flash");
    selectedTile = null;
    setStatus(`Not quite. ${tile.dataset.recipe} belongs in another comparison battle.`);
    window.setTimeout(() => {
      tile.classList.remove("wrong");
      zone.classList.remove("wrong-flash");
    }, 500);
  }
}

function solveTile(tile, zone) {
  tile.dataset.solved = "true";
  tile.classList.remove("is-selected", "is-dragging");
  tile.classList.add("solved");
  tile.tabIndex = -1;
  tile.setAttribute("aria-pressed", "false");
  zone.querySelector(".zone-items").appendChild(tile);
  const count = zone.querySelectorAll(".recipe-tile.solved").length;
  zone.querySelector(".zone-count").textContent = String(count);
  zone.classList.add("correct-flash");
  window.setTimeout(() => zone.classList.remove("correct-flash"), 600);

  selectedTile = null;
  score += 1;
  revealPoemLine(score - 1);
  updateProgress();
  setStatus(`Correct! ${tile.dataset.recipe} entered the ${categories[tile.dataset.category].label} battle.`);

  if (score === roundSize) {
    window.setTimeout(() => { celebration.hidden = false; }, 650);
  }
}

function updateProgress() {
  scoreElement.textContent = String(score);
  const percent = (score / roundSize) * 100;
  progressFill.style.width = `${percent}%`;
}

function renderPoem() {
  poemStage.innerHTML = "";
  poemLines.forEach((line, index) => {
    const p = document.createElement("p");
    p.className = "poem-line";
    p.dataset.line = String(index);
    p.textContent = line;
    poemStage.appendChild(p);
  });
}

function revealPoemLine(index) {
  poemStage.querySelector(`[data-line="${index}"]`)?.classList.add("revealed");
}

function setStatus(message) {
  statusElement.textContent = message;
}

function renderVault(filter = "all") {
  vaultGrid.innerHTML = "";
  const visible = filter === "all" ? recipes : recipes.filter((recipe) => recipe.category === filter);
  visible.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "vault-card";
    card.innerHTML = `
      <h3>${recipeEmoji(recipe.category)} ${recipe.name}</h3>
      <p><strong>${categories[recipe.category].label}:</strong> ${recipe.flavor}</p>
    `;
    vaultGrid.appendChild(card);
  });
}

function buildFilters() {
  const filters = [{ key: "all", label: "All recipes", emoji: "🍓" }, ...Object.entries(categories).map(([key, value]) => ({ key, ...value }))];
  filterRow.innerHTML = "";
  filters.forEach((filter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${index === 0 ? " active" : ""}`;
    button.textContent = `${filter.emoji} ${filter.label}`;
    button.addEventListener("click", () => {
      filterRow.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderVault(filter.key);
    });
    filterRow.appendChild(button);
  });
}

zones.forEach((zone) => {
  zone.addEventListener("click", () => {
    if (selectedTile) attemptPlacement(selectedTile, zone);
    else setStatus("Select a recipe tile first, then choose its comparison battle.");
  });
  zone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (selectedTile) attemptPlacement(selectedTile, zone);
      else setStatus("Select a recipe tile first, then choose its comparison battle.");
    }
  });
});

document.querySelector("#new-round").addEventListener("click", startRound);
document.querySelector("#shuffle-tiles").addEventListener("click", () => {
  const unsolved = [...tilePool.querySelectorAll('.recipe-tile:not(.solved)')];
  shuffle(unsolved).forEach((tile) => tilePool.appendChild(tile));
  setStatus("The remaining recipe tiles have been shuffled.");
});
document.querySelector("#open-vault").addEventListener("click", () => vault.showModal());
document.querySelector("#close-vault").addEventListener("click", () => vault.close());
document.querySelector("#play-again").addEventListener("click", startRound);
celebration.addEventListener("click", (event) => {
  if (event.target === celebration) celebration.hidden = true;
});
vault.addEventListener("click", (event) => {
  if (event.target === vault) vault.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && selectedTile) {
    selectedTile.classList.remove("is-selected");
    selectedTile = null;
    setStatus("Tile selection cleared.");
  }
});

buildFilters();
renderVault();
startRound();
