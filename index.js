"use strict";
/*
Made By corcle1 (omlet : kdg7313) (github : kdg7313)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const packetids_1 = require("bdsx/bds/packetids");
const common_1 = require("bdsx/common");
const event_1 = require("bdsx/event");
const launcher_1 = require("bdsx/launcher");
const color = require("colors");
console.log(color.bgRed('Chatcut Applying...'));
let time = {};
const system = server.registerSystem(0, 0);
event_1.events.packetBefore(packetids_1.MinecraftPacketIds.Text).on(ev => {
    if (time[ev.name] === undefined)
        time[ev.name] = new Date();
    else if (Number(new Date()) - time[ev.name] < 1000) {
        launcher_1.bedrockServer.executeCommand(`tellraw @a[name="${ev.name}"] {"rawtext":[{"text":"§l§cYour chat is too fast!"}]}`); //send a warning message to the player
        return common_1.CANCEL;
    }
    else {
        time[ev.name] = new Date();
    }
    if (ev.message.length > 25) {
        launcher_1.bedrockServer.executeCommand(`tellraw @a[name="${ev.name}"] {"rawtext":[{"text":"§l§cYour chat is too long!"}]}`); //send a warning message to the player
        return common_1.CANCEL;
    }
});
console.log(color.bgGreen('Application complete!'));
