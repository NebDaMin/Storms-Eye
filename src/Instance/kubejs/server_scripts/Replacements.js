ServerEvents.recipes(event => {
  //This replaces the output of the vanilla painting with the selectable painting from the mod.
    event.replaceOutput(
    { id: 'minecraft:painting' },
    'minecraft:painting',
    'selectable_painting:selectable_painting'
  )
    event.remove({ id: 'selectable_painting:selectable_painting/painting_crafting' })
    event.remove({ id: 'selectable_painting:selectable_painting/selectable_painting_crafting' })
})