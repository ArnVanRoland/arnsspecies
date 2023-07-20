Hooks.on("setup", () => {
    let config = {
        subspecies : {
            human  :{}         
        }
        
    }

config.subspecies.human["middenlander-nom"] = {
        name : "Middenlander",
        skills : [
            "Animal Care",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Intimidate",
            "Language (Wastelander)",
            "Leadership",
            "Lore (Middenland)",
            "Melee (Basic)",
            "Outdoor Survival",
            "Ranged (Bow)",

        ],
         talents : [
            "Doomed, @Table[talents]{Additional Random Talent}",
            "Menacing, Warrior Born",
            3
        ]
    }
  
mergeObject(game.wfrp4e.config, config)
})
