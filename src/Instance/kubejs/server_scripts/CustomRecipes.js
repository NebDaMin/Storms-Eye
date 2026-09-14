//Supplementaries custom recipes
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('supplementaries:bomb_blue', 1 ),
        [
            'ABA',
            'BAB',
            'ABA'
        ],
        {
            A: 'minecraft:blue_dye',
            B: 'supplementaries:bomb'
        }
    ),

        event.shaped(
        Item.of('supplementaries:quiver', 1 ),
        [
            ' AB',
            'A B',
            ' AB'
        ],
        {
            A: 'supplementaries:rope',
            B: 'minecraft:leather'
        }
    )

})