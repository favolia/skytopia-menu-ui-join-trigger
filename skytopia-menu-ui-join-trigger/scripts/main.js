import { world as Skytopia, system } from "@minecraft/server"; 
import { showActionFormData } from "./functions/Modal/ActionFormData.js"; 

const tag = 'survival'
const delay = 120

  Skytopia.afterEvents.playerSpawn.subscribe(ev => {
       const { initialSpawn, player } = ev
       if (initialSpawn && player.hasTag(tag)) {
           system.runTimeout(() => {
               showActionFormData(player)
           }, delay)
        }
  })
