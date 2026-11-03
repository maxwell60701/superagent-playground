# Maple adventure · 冒险岛

A dependency-free, single-player 2D browser adventure inspired by classic MapleStory. All scenery and characters are drawn in Canvas; no original game assets or services are required.

## Run

Requires Node.js 22 or newer.

```sh
npm start
```

Open http://localhost:5173. Use left/right or A/D to move, Space to jump, X to attack, C for a mana-powered skill, 1 for a health potion, E to talk/use the portal, I for inventory, and Escape to pause. Touch controls are available on narrow screens. Audio is opt-in.

Talk to Mia beside the cottage, defeat five mushrooms, then return for your reward. Monsters respawn, experience increases your level, and defeat returns you to the village. Progress lasts for the current page session. Menus pause simulation.

## Checks

```sh
npm test
node --check src/game.mjs
```

The engine tests cover platform landing, attack cooldown, loot, leveling, potions, and damage immunity. The existing greeting example remains intact.
