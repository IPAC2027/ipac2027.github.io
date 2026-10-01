// MC5: Beam Dynamics and EM Fields — invited speakers for IPAC'27
import type { Speaker } from './types';

export const mc5Speakers: Speaker[] = [
  {
    id: "alexander-romanov",
    name: "Alexander Romanov",
    photo: "/images/speakers/alexander-romanov.jpg",
    photoAdjustment: { position: "center 20%" },
    bio: `Aleksandr Romanov studied at Novosibirsk State University. In 2011 he defended his PhD on beam lattice optimization and automated commissioning of the VEPP-2000 e+e− collider at the Budker Institute of Nuclear Physics. In 2015 he joined the IOTA team at Fermilab, where he was responsible for the design and commissioning of beam lattices for a range of experiments, as well as for the construction and commissioning of the IOTA ring and the IOTA Proton Injector. His most notable contributions are to studies of Danilov–Nagaitsev integrable optics, Optical Stochastic Cooling, and experimental single-electron tracking. The emphasis on IOTA's lattice flexibility, diagnostics, and automated commissioning drove continuous development of the 6DSim toolkit, now used at VEPP-2000, FAST/IOTA, and the Fermilab Muon Campus.`,
    affiliation: `Fermi National Accelerator Laboratory`,
    type: "invited",
    title: `First protons at IOTA: injector performance and the road to intense beam physics`,
    abstract: `The proton injector for the Integrable Optics Test Accelerator (IOTA) at Fermilab has been commissioned to deliver beam currents of over 10 mA, with over 1 mA successfully stored in the ring. This capability enables a broad range of intense beam studies in support of Fermilab's scientific program, including PIP-II warm front end startup and beyond. The initial proton run was dedicated to diagnostics checkout, lattice tuning, and injection optimization. An ongoing shutdown is being used for maintenance and installation of new equipment, including a dual-frequency RF cavity, ahead of the scientific run scheduled to begin in September. Ionization Profile Monitors will be installed in January to enable turn-by-turn beam size measurements and support dynamics optimization of space-charge-dominated beams. The scientific program will investigate integrable optics with one and two integrals of motion in the presence of space charge, soliton formation, and longitudinal phase space manipulations. This talk will report the first results of the scientific program together with highlights of the commissioning campaign.`,
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
