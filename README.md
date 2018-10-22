# Mission Control

A HBS BattleTech mod that provides a framework for runtime modifications of the contracts and encounters. This includes varying the encounter specifics such as spawn locations, lance numbers and objectives.

![Additional Lances](./docs/images/additional-lances.png)

## Features

### Additional Lances

Additional enemy and ally lances will spawn based on contract type, biome type, percentage chances, maximum limits and lance configs.

For full configuration options, see the [Additional Lances](./docs/additional-lances.md) page.

### Random Spawns

Depending on the contract type, the lance spawns will change every playthrough. The spawning uses contract type specific logic to suitably place the lances. There are no configuration options currently available for this as these come from the encounter type rulesets that are created.

For full information on the random spawns, see the [Random Spawns](./docs/random-spawns.md) page.

### New AI

Completely new AI behaviours that do not exist in the vanilla game.

* Follow Lance - Follows the heaviest mech in the target lance

### Single Player Skirmish Support with Quick Skirmish Feature

Mission Control works on single player skirmish if a contract type ruleset is created for it.

The 'Quick Skirmish' feature adds a new main menu button. When clicked it will use the last lance the player used for the cost brackets (unlimited selected first and clash last) then give the player a random map and mood. This will then spawn the player lance and the enemy lance within firing range. This is ideal for modders testing their mods or people who want a very quick skirmish.

### Contract Type Rulesets

Mission Control allows other modders to add their own contract type rulesets to be used. When added to the mod, the mod will randomly select a ruleset for a contract type from the given choices.

**This is experimental and not yet fully supported. This system will change and it is _not_ recommended you build on this system yet.**

For full information on contract type rulesets, see the [Contract Type Rulesets](./docs/contract-type-rulesets.md) page.

## Roadmap

This roadmap contains features that may not make it into the mod. It depends on the technical feasibility of the feature.

| Feature | Expected Version | Status  |
| ------- | ---------------- | ------- |
| Encounter Objective - Defend X Units | Unknown | :heavy_minus_sign: |
| Encounter Logic - Lance Faction Change | Unknown | :heavy_minus_sign: |
| Random Spawn - Buildings | Unknown | :heavy_minus_sign: |
| Random Spawn - Plots | Unknown | :heavy_minus_sign: |
| Additional Lances - Player Lances | Unknown | :heavy_minus_sign: |
| Reuse Maps - Story - 1B Retreat | Unknown | :heavy_minus_sign: |

...many more to be added soon.

## Feedback

All feedback is welcome in the [issues section](https://github.com/CWolfs/MissionControl/issues).

## Special Thanks

I wouldn't have completed such an ambitious mod without the support and help of the modding community. Sorry if I miss anyone out as so many people have helped in their own way. In no particular order,

* Eck
* Morphyum
* jo
* LadyAleko
* akodoreign
* GentlePayload
* bloodydoves
* gnivler
* TekGnosis
* ...and everyone in the modder channels at BATTLETECHGAME discord who helped in lots of different ways!

## Author

Richard Griffiths (CWolf)
  * [Twitter](https://twitter.com/CWolf)
  * [LinkedIn](https://www.linkedin.com/in/richard-griffiths-436b7a19/)