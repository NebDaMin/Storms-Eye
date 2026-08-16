// Visit the wiki for more info - https://kubejs.com/

JEIEvents.hideItems(event => {
  event.hide(/.*spawn_egg.*/) // Hide all spawn eggs
  event.hide(/^(?!.*azure_seastone_mural_empty).*azure_seastone_mural.*/) // Hide all Azure Seastone Murals except the empty one
  event.hide(/.*curved_azure_seastone.*/) // Hide all curved Azure Seastones
  event.hide('minecraft:light') // Hide all lights
  event.hide('minecraft:painting') // Hide all vanilla paintings in jei
  event.hide('mowziesmobs:mob_remover') // Hides mob remover
  event.hide(/ftbquests.*/) // Hides ftb quests items
  event.hide(/.*cave_painting.*/) // Hides cave paintings from Alex's caves
  event.hide('minecraft:spawner') // Hides spawners from jei
  event.hide(/.*command_block.*/) // Hides command blocks from jei
  event.hide('minecraft:jigsaw') // Hides jigsaw blocks from jei
  event.hide('minecraft:structure_block') // Hides structure blocks from jei
  event.hide('minecraft:structure_void') // Hides structure voids from jei
  event.hide('minecraft:barrier') // Hides barrier blocks from jei
  event.hide('minecraft:debug_stick') // Hides debug stick from jei
});