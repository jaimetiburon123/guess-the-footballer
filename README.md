# ⚽ Guess the Footballer

A football guessing game built with plain HTML, CSS and JavaScript — no frameworks, no libraries.

## How to play

1. Open `index.html` in a browser (or serve the folder, e.g. `python -m http.server`).
2. A mystery player is chosen from a squad of current footballers.
3. Type a player's name (the list suggests names) and press **Shoot** or **Enter**.
4. Each guess reveals a row comparing your player with the mystery player:

| Colour | Meaning |
| --- | --- |
| 🟩 Green | Same league / country / age / position / shirt number |
| 🟨 Yellow | Age or shirt number within 2 |
| ⬜ Grey | No match |

   ↑ / ↓ tell you whether the mystery player's age or shirt number is higher or lower.

5. You have **5 shots**. Find the player to score, or the referee ends the game.

**Secret:** press `D` (while not typing in the input) to toggle dark mode.

## Structure

```
guess-the-footballer/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── players.js   # player data
│   └── app.js       # game logic and DOM handling
└── README.md
```

## Concepts used

- DOM: `querySelector`, `textContent`, `classList`, `createElement`, `append`, `replaceChildren`
- Events: `click`, `input`, `keydown` with `addEventListener` (no inline handlers)
- `const`/`let`, small functions, arrays of objects, `find`/`map`/`includes`, template literals
- Ages are calculated from birth dates, so they stay correct over time

## AI declaration

<!-- Complete this honestly according to your course rules. -->
This project was developed with the help of an AI assistant (Claude, by Anthropic), used for: ...
