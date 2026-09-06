ItemEvents.tooltip(event => {
  event.add('another_furniture:furniture_hammer', 'Right click on some furniture blocks to change their style.')
});


ClientEvents.lang("en_us", event => {
    // Renaming Some Items
    event.renameItem('another_furniture:furniture_hammer', 'Carpentry Hammer')
});