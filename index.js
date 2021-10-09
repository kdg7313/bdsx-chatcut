/*
Made By corcle1 (omlet : kdg7313) (github : kdg7313)
*/

import { MinecraftPacketIds } from "../bdsx/bds/packetids";
import { CANCEL } from "../bdsx/common";
import { events } from "../bdsx/event";
import * as color from "colors";

console.log(color.bgRed('Chatcut Applying...'));

let time = {}

const system = server.registerSystem(0, 0);

events.packetBefore(MinecraftPacketIds.Text).on(ev => {
   if(time[ev.name] === undefined){
      time[ev.name] = new Date();
   }
   else if(Number(new Date()) - time[ev.name] < 1000){
      system.executeCommand(`tellraw @a[name="${ev.name}"] {"rawtext":[{"text":"§l§cYour chat is too fast!"}]}`, () => {}); //send a warning message to the player
      return CANCEL;
   }
   else {
  time[ev.name] = new Date();
      }

   if (ev.message.length > 25) 
   {
	   system.executeCommand(`tellraw @a[name="${ev.name}"] {"rawtext":[{"text":"§l§cYour chat is too long!"}]}`, () => {}); //send a warning message to the player
      return CANCEL; 
   }
});

console.log(color.bgGreen('Application complete!'));