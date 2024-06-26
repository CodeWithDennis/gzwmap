import {ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";

const TheShadowOverBanPaPartTwo_Objective1: objective = {
    name: "Intel",
    description: "Find intel regarding the cult in Ban Pa",
    position: [0.6925521983227592, -0.4175662994384766],
    type: ObjectiveType.COLLECT,
}

export const TheShadowOverBanPaPartTwo: task = {
    name: "The Shadow Over Ban Pa - Part 2",
    briefing: "Hey, man. Get this. For some fucking reason, the boss is very much interested in Ban Pa, not just for its possible strategic value but for whatever happened there. You know my opinion on that bullshit, but you know what they say, “He who pays the piper calls the tune.“ So go there and look around for any piece of intel that would make the boss happy, ok? If there was an actual cult there, I bet their leader lived in some some fancy-ass house which you should search to dig deeper into this shit. Snoop around, bring back what you can find, and don’t worry; you’ll get a real mission soon enough.",
    debriefing: "Would you look at that shit? A book about floating heads with hanging guts. Cute. I’ll relay what you found to the boss right away, and hopefully, he’ll be satisfied and let us do some actual work for a change",
    note: "You can find the intel inside the Elders House next to the candles.",
    objectives: [
        TheShadowOverBanPaPartTwo_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}
