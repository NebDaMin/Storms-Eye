# OverworldSkyTint

This datapack is a template for changing the color of the sky and fog in the overworld by overriding biome atmosphere settings.

## Files to edit

- `data/minecraft/worldgen/biome/plains.json`

The important entries are:

- `effects.sky_color`
- `effects.fog_color`
- `effects.water_color`
- `effects.water_fog_color`

## How to use

1. Put this folder into your datapacks folder in a world.
2. Start or reload the world.
3. Edit the color values in the biome JSON.
4. Use `/reload` after changing values.

## Notes

This is a template and will affect the biome definition you override. The most direct example here is `plains`, which is a common overworld biome. If you want the entire overworld to share one sky color, you will usually need to override the biome definitions that are used in your world.

A plain resource pack alone cannot change global overworld sky/fog color reliably; the actual atmosphere properties are biome-driven.
