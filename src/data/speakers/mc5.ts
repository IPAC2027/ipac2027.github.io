// MC5: Beam Dynamics and EM Fields — invited speakers for IPAC'27
import type { Speaker } from './types';

export const mc5Speakers: Speaker[] = [
  {
    id: "alexander-romanov",
    name: "Alexander Romanov",
    affiliation: `Fermi National Accelerator Laboratory`,
    type: "invited",
    title: ``,
    classification: "MC5",
    session: {},
    schedule: { date: "2027-05-26", startTime: "11:00", endTime: "11:30", room: "Grand Riverview Ballroom B" },
  },
  {
    id: "jinyu-wan",
    name: "Jinyu Wan",
    affiliation: `Institute of High Energy Physics`,
    photo: "/images/speakers/jinyu-wan.jpeg",
    // Source photo is ~1:1 (square), matching the circular frame exactly, so
    // `position` alone has no visible effect (there's no overflow to shift).
    // `zoom` crops in first to create overflow, then `position` picks which
    // part of that cropped-in image is shown.
    photoAdjustment: { position: "center 0%", zoom: 1.2 },
    bio: `Dr. Jinyu Wan is currently an Associate Research Fellow at the Institute of High Energy Physics (IHEP), Chinese Academy of Sciences. He received his Ph.D from IHEP and subsequently conducted postdoctoral research at the Facility for Rare Isotope Beams (FRIB). His research interest center on the intersection of accelerator beam dynamics, differentiable simulation, and machine learning. He is actively involved in developing cutting-edge computational frameworks that use automatic differentiation and artificial intelligence to enable efficient optimization, precise beam control and the construction of digital twin for particle accelerators.`,
    type: "invited",
    title: `From maps to gradients: automatic differentiation for accelerator beam dynamics, beam control, and digital twins`,
    abstract: `Automatic differentiation (AD) is emerging new opportunities in accelerator beam dynamics and beam control by enabling efficient gradient evaluation for optimization, inference, and control. This talk will review the past development, current status, and future prospects of AD in accelerator physics, with representative examples including Cheetah, JuTrack, and SciBmad. Emphasis will be placed on applications to beam dynamics modeling, online optimization, and differentiable digital twins, as well as on key challenges such as nonlinear beam dynamics, optics control and future opportunities in digital twins for particle accelerator.`,
    classification: "MC5",
    session: {},
    schedule: { date: "2027-05-27", startTime: "09:00", endTime: "09:30", room: "Grand Riverview Ballroom A" },
  },
];
