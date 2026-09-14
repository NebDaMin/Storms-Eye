LootJS.modifiers((event) => {
  event.addBlockLootModifier('minecraft:grass')
    .replaceLoot('occultism:datura_seeds', 'smokingstuff:magical_herb_seeds')
});