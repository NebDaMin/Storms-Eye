// Visit the wiki for more info - https://kubejs.com/

JEIEvents.hideItems(event => {
  event.hide(/.*spawn_egg.*/) // Hide all spawn eggs
  event.hide(/^(?!.*azure_seastone_mural_empty).*azure_seastone_mural.*/) // Hide all Azure Seastone Murals except the empty one
  event.hide(/.*curved_azure_seastone.*/) // Hide all curved Azure Seastones
  event.hide(/.*minecraft:light*/) // Hide all lights
  event.hide(/.*fish_bucket*/) // Hide all lights
});