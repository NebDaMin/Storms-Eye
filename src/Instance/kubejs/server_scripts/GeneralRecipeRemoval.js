ServerEvents.recipes(event => {
  //Anvil Recipe Removals
    event.remove({ id: 'meteor_shower:star_dust_enhancement' })
    event.remove({ input: 'meteor_shower:star_dust' })
})