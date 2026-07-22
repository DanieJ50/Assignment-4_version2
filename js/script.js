const recipeName = document.querySelector("#recipeName");
const recipeText = document.querySelector("#recipeText");
const poemLines = document.querySelector("#poemLines");
const recipeCard = document.querySelector(".recipe-card");
const moodButtons = document.querySelectorAll(".mood-buttons button");
const shuffleButton = document.querySelector("#shufflePoem");
const scatterButton = document.querySelector("#scatterPoem");
const resetButton = document.querySelector("#resetPoem");

const recipes = {
  soft: [
    {
      name: "🍞 Cinnamon French Toast",
      text: "A cozy slice for the version of me that wants comfort before courage.",
      line: "Softness is not weakness; it is the first room my confidence enters."
    },
    {
      name: "🥣 Oreo Yogurt Ice Cream",
      text: "A cold, creamy bowl that turns a tiny craving into a sweet pause.",
      line: "I let sweetness slow the noise until my ideas can breathe."
    },
    {
      name: "🍰 Cinnamon Mug Cake",
      text: "A tiny cake with big cozy energy, built for quiet creative nights.",
      line: "My smallest recipes still know how to take up space."
    }
  ],

  sparkle: [
    {
      name: "🍩 Clear Glaze Microwave Donuts",
      text: "A playful donut moment with a glossy little sparkle finish.",
      line: "I glaze the ordinary until it starts shining back at me."
    },
    {
      name: "🌀 Microwave Cinnamon Rolls",
      text: "A swirl of cinnamon comfort that feels like a bakery shortcut spell.",
      line: "Every spiral reminds me that growth can circle before it rises."
    },
    {
      name: "🍫 Chocolate Ramekin Cake",
      text: "A soft chocolate moment for dramatic dessert energy.",
      line: "Chocolate turns my mood into a bold little stage light."
    }
  ],

  focus: [
    {
      name: "☕ Cinnamon Roll Latte",
      text: "Warm coffee energy with cinnamon-roll imagination.",
      line: "I sip focus and turn my tabs into tiny doorways."
    },
    {
      name: "🍫 Cafe Mocha Shake",
      text: "Mocha, cocoa, and creamy confidence for design mode.",
      line: "Mocha becomes the cursor blinking before a better idea."
    },
    {
      name: "🌶️ Chili Mocha",
      text: "A spicy-sweet cup for days that need a tiny fire alarm.",
      line: "A little heat tells my courage to wake up."
    }
  ],

  bold: [
    {
      name: "🌯 Arrabbiata Chicken Tortilla Melt",
      text: "A crispy, cheesy savory wrap with main-character crunch.",
      line: "Savory comfort becomes armor I can actually enjoy."
    },
    {
      name: "🍕 Protein Pizza Tortilla",
      text: "Pizza flavor in a playful tortilla shape.",
      line: "I fold a craving into a shape that fits my life."
    },
    {
      name: "🥯 Bagel Egg Sandwich",
      text: "A practical cozy sandwich that says I can build and keep going.",
      line: "Some confidence is just breakfast holding itself together."
    }
  ],

  glow: [
    {
      name: "🥞 Pumpkin Flaxseed Hotcakes",
      text: "A fluffy stack for morning glow and cozy confidence.",
      line: "Morning arrives as a stack of small golden chances."
    },
    {
      name: "🥞 Cinnamon Maple Buttermilk Pancakes",
      text: "Soft pancake energy with diner-style sweetness.",
      line: "I pour sweetness over the fear and call it practice."
    },
    {
      name: "🟫 Fudgy CCD Brownies",
      text: "A chocolate square that turns comfort into structure.",
      line: "Even my cravings can become architecture."
    }
  ]
};

let poem = [];

function chooseRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function addLine(line) {
  poem.push(line);
  renderPoem();
}

function renderPoem() {
  poemLines.innerHTML = "";

  if (poem.length === 0) {
    poemLines.innerHTML = "<p>🍓 No lines yet. Click a mood to begin.</p>";
    return;
  }

  poem.forEach((line, index) => {
    const p = document.createElement("p");
    p.textContent = `${index + 1}. ${line}`;
    p.style.setProperty("--tilt", `${Math.floor(Math.random() * 18) - 9}deg`);
    poemLines.appendChild(p);
  });

  if (poem.length >= 7) {
    const finale = document.createElement("p");
    finale.textContent = "Final mix: Berry Vibes is what happens when comfort becomes a design system. 🍓";
    finale.style.setProperty("--tilt", "0deg");
    poemLines.appendChild(finale);
  }
}

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.dataset.mood;
    const chosenRecipe = chooseRandom(recipes[mood]);

    recipeName.textContent = chosenRecipe.name;
    recipeText.textContent = chosenRecipe.text;
    addLine(chosenRecipe.line);

    recipeCard.classList.remove("pop");
    void recipeCard.offsetWidth;
    recipeCard.classList.add("pop");
  });
});

shuffleButton.addEventListener("click", () => {
  for (let i = poem.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [poem[i], poem[randomIndex]] = [poem[randomIndex], poem[i]];
  }

  renderPoem();
});

scatterButton.addEventListener("click", () => {
  poemLines.classList.toggle("scatter");
});

resetButton.addEventListener("click", () => {
  poem = [];
  recipeName.textContent = "Tap a mood to generate a CCD recipe card.";
  recipeText.textContent = "The poem is waiting in the mixer. Pick a button above and let Berry Vibes choose the flavor.";
  poemLines.classList.remove("scatter");
  renderPoem();
});

renderPoem();
