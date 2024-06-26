import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const Reclamation_Objective1_LRI: objective = {
  name: "Cargo",
  description: "Retrieve the cargo from the fortified hideout in Pha Lang and hand it to Handshake",
  position: [0.9032517355468691, -0.425192995488497],
  type: ObjectiveType.DELIVER,
  faction: LamangRecoveryInitiative
}

const Reclamation_Objective1_MMS: objective = {
  name: "Cargo",
  description: "Retrieve the cargo from the fortified hideout in Nam Thaven and hand it to Handshake",
  position: [0.5239225185095121, -0.7197605911753158],
  type: ObjectiveType.DELIVER,
  faction: MithrasSecuritySystems
}

const Reclamation_Objective1_CSI: objective = {
  name: "Cargo",
  description: "Retrieve the cargo from the fortified hideout in Kiu Vongsa and hand it to Handshake",
  position: [0.929868296155599, -0.9375721389631698],
  type: ObjectiveType.DELIVER,
  faction: CrimsonShieldInternational
}


export const Reclamation: task = {
  name: "Reclamation",
  briefing: "After all we've seen, it is now more than clear that the cargo from the crashed helicopter has been taken by the rats in the town. I don't know how, and i don't know why, but I want it back, okay? Your mission is to locate their main base of operations and recover the stolen container. It's highly probable that they would stow the thing in the most fortified place around, so keep your eyes open for a building like that, especially if it has any familiar markings on it. Once you know where it is, find a way in, secure the area, and recover the container at all costs. I'm sure you'll do a great job. Don't let me down now.",
  debriefing: "Thank fuck! I was a bit worried there for a while, but now everything is back on track, thanks to you. I see that the seal on the container is still intact and has not been tampered with, so we should be golden. Great fucking job, man. You sure deserve that bonus! Now that we've taken care of this little problem, we can focus again on reclaiming our territory and figuring out what exactly we are dealing with here. Take some rest, and I'll contact you soon with your next assignment. You know what? I think this is the beginning of a beautiful friendship…",
  note: "You will be overweight and can't sprint while carrying the cargo.",
  objectives: [
    Reclamation_Objective1_LRI,
    Reclamation_Objective1_MMS,
    Reclamation_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}