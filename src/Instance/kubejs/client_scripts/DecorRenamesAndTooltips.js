ItemEvents.tooltip(event => {
  event.add('another_furniture:furniture_hammer', 'Right click on some furniture blocks to change their style.')
  
  event.add('chimes:carved_bamboo_chimes', 'Right click with axe on normal Bamboo Wind Chime to convert to carved chime.')
  event.add('chimes:glass_bells', 'Customizable with dye. Place dye above bell in crafting grid to change bell color. Place dye below to change the sail color.')
});


ClientEvents.lang("en_us", event => {
    // Renaming Some Items
    event.renameItem('another_furniture:furniture_hammer', 'Carpentry Hammer')
});