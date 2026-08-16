# OverworldPinkSky

This datapack applies a pink sky and fog color across the most common vanilla overworld biomes.

## Files to adjust

Edit the values in the biome files under:

- `data/minecraft/worldgen/biome/*.json`

Look for:

- `effects.sky_color`
- `effects.fog_color`

## Included biome entries

- plains
- forest
- birch_forest
- dark_forest
- taiga
- snowy_taiga
- desert
- ocean
- deep_ocean
- badlands
- savanna
- jungle
- swamp
- mountains
- snowy_plains

## Notes

This is a practical vanilla datapack template. It is not a true global sky override, because Minecraft reads sky/fog values from biome definitions. If you want every biome in a world to match, you need to override whichever biome files your world uses.
