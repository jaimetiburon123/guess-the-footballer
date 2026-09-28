// app.js — Guess the Footballer

const MAX_GUESSES = 5;
const CLOSE_RANGE = 2; // age / shirt within this range counts as "close"
const SECRET_KEY = "d"; // press "d" (outside the input) to toggle dark mode

const guessInput = document.querySelector("#guess");
const shootButton = document.querySelector("#shoot");
const playerList = document.querySelector("#player-list");
const message = document.querySelector("#message");
const shots = document.querySelector("#shots");
const guessesBoard = document.querySelector("#guesses");
const result = document.querySelector("#result");
const resultTitle = document.querySelector("#result-title");
const resultText = document.querySelector("#result-text");
const restartButton = document.querySelector("#restart");

let mystery;
let guessedNames;
let gameOver;

// --- Helpers ---

function ageFrom(birthDate) {
  const born = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - born.getFullYear();
  const birthdayPassed =
    today.getMonth() > born.getMonth() ||
    (today.getMonth() === born.getMonth() && today.getDate() >= born.getDate());
  if (!birthdayPassed) age--;
  return age;
}

function normalize(text) {
  // "Mbappé" and "mbappe" should both match
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase();
}

function findPlayer(name) {
  const target = normalize(name);
  if (target === "") return undefined;

  const exact = PLAYERS.find((player) => normalize(player.name) === target);
  if (exact) return exact;

  // accept partial names like "mbappe", but only if they point to a single player
  const matches = PLAYERS.filter((player) => normalize(player.name).includes(target));
  return matches.length === 1 ? matches[0] : undefined;
}

function randomPlayer() {
  return PLAYERS[Math.floor(Math.random() * PLAYERS.length)];
}

// --- Comparisons ---

function compareExact(guessValue, mysteryValue) {
  return guessValue === mysteryValue ? "correct" : "wrong";
}

function compareNumber(guessValue, mysteryValue) {
  if (guessValue === mysteryValue) return { state: "correct", arrow: "" };
  const state = Math.abs(guessValue - mysteryValue) <= CLOSE_RANGE ? "close" : "wrong";
  const arrow = mysteryValue > guessValue ? "↑" : "↓";
  return { state, arrow };
}

// --- Rendering ---

function createTile(text, state, delay) {
  const tile = document.createElement("span");
  tile.classList.add("tile", `tile--${state}`, "tile--reveal");
  tile.style.animationDelay = `${delay * 0.15}s`;
  tile.textContent = text;
  return tile;
}

function renderGuess(player) {
  const guessAge = ageFrom(player.born);
  const age = compareNumber(guessAge, ageFrom(mystery.born));
  const shirt = compareNumber(player.shirt, mystery.shirt);

  const nameState = player === mystery ? "correct" : "wrong";
  const tiles = [
    createTile(player.name, nameState, 0),
    createTile(player.league, compareExact(player.league, mystery.league), 1),
    createTile(player.country, compareExact(player.country, mystery.country), 2),
    createTile(`${guessAge} ${age.arrow}`, age.state, 3),
    createTile(player.position, compareExact(player.position, mystery.position), 4),
    createTile(`#${player.shirt} ${shirt.arrow}`, shirt.state, 5),
  ];

  const row = document.createElement("div");
  row.classList.add("row");
  row.append(...tiles);
  guessesBoard.append(row);
}

function fillPlayerList() {
  const options = PLAYERS.map((player) => {
    const option = document.createElement("option");
    option.value = player.name;
    return option;
  });
  playerList.replaceChildren(...options);
}

function setMessage(text, state = "") {
  message.textContent = text;
  message.className = `message ${state}`;
}

function updateShots() {
  const left = MAX_GUESSES - guessedNames.length;
  shots.textContent = `Shots left: ${"⚽".repeat(left)}${"✖".repeat(guessedNames.length)}`;
}

function showResult(won) {
  const used = guessedNames.length;
  resultTitle.textContent = won ? "🏆 GOAL! You got it!" : "🟥 Full time! You lost.";
  resultText.textContent = won
    ? `It was ${mystery.name} (${mystery.club}). You scored in ${used} ${used === 1 ? "shot" : "shots"}.`
    : `The mystery player was ${mystery.name} (${mystery.club}).`;
  result.classList.remove("hidden", "win", "lose");
  result.classList.add(won ? "win" : "lose");
}

// --- Game flow ---

function startGame() {
  mystery = randomPlayer();
  guessedNames = [];
  gameOver = false;

  guessesBoard.replaceChildren();
  result.classList.add("hidden");
  setMessage("Kick-off! Make your first guess.");
  updateShots();

  guessInput.value = "";
  guessInput.disabled = false;
  shootButton.disabled = true;
  guessInput.focus();
}

function endGame(won) {
  gameOver = true;
  guessInput.disabled = true;
  shootButton.disabled = true;
  setMessage(won ? "What a finish!" : "The referee blows the final whistle.");
  showResult(won);
  restartButton.focus();
}

function shoot() {
  if (gameOver) return;

  const player = findPlayer(guessInput.value);
  if (!player) {
    setMessage("That player isn't in the squad. Pick one from the list.", "error");
    return;
  }
  if (guessedNames.includes(player.name)) {
    setMessage(`You already tried ${player.name}.`, "error");
    return;
  }

  guessedNames.push(player.name);
  renderGuess(player);
  updateShots();
  guessInput.value = "";
  shootButton.disabled = true;

  if (player === mystery) {
    endGame(true);
  } else if (guessedNames.length === MAX_GUESSES) {
    endGame(false);
  } else {
    setMessage("Saved by the keeper! Try again.");
    guessInput.focus();
  }
}

// --- Events ---

shootButton.addEventListener("click", shoot);

guessInput.addEventListener("input", () => {
  shootButton.disabled = guessInput.value.trim() === "";
});

guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // stop this Enter from also "clicking" the restart button that gets focus when the game ends
    event.preventDefault();
    shoot();
  }
});

restartButton.addEventListener("click", startGame);

document.addEventListener("keydown", (event) => {
  if (event.target === guessInput) return;
  if (event.key.toLowerCase() === SECRET_KEY) {
    document.body.classList.toggle("dark");
  }
});

fillPlayerList();
startGame();
