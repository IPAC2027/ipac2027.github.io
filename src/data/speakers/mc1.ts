// MC1: Colliders and Related Accelerators — invited speakers for IPAC'27
import type { Speaker } from './types';

export const mc1Speakers: Speaker[] = [
  {
    id: "sergei-seletskiy",
    name: "Sergei Seletskiy",
    affiliation: `Brookhaven National Laboratory`,
    photo: "/images/speakers/sergei-seletskiy.jpg",
    bio: `Sergei Seletskiy is an accelerator physicist at Brookhaven National Laboratory. He received his PhD in 2005 from the University of Rochester, graduating from a joint program with Fermilab. He completed his postdoctoral research at SLAC, working on various aspects of the design of the International Linear Collider. Sergei joined BNL in 2008, where he has worked on NSLS, NSLS-II, and RHIC. His recent research focuses on expanding electron cooling to high energies.`,
    type: "invited",
    title: `High energy electron cooling`,
    abstract: `Cooling intense proton bunches at high energy is a major challenge. A robust cooling system operating at collision energies of the Electron-Ion Collider (EIC), while not part of the project baseline, would greatly improve luminosity and significantly advance the facility's long-term scientific potential. We propose a design for a non-magnetized, RF-based electron cooler to provide the required cooling at EIC collision energies. While electron cooling is a well-established technique at low energies, extending it to \\gamma \\about 100-300 for the EIC represents a significant advancement that will pave the way for high-energy electron cooling applications.`,
    classification: "MC1",
    session: {},
    schedule: { date: "2027-05-25", startTime: "11:00", endTime: "11:30", room: "Grand Riverview Ballroom A" },
  },
  {
    id: "luca-egoriti",
    name: "Luca Egoriti",
    affiliation: `TRIUMF, Canada’s particle accelerator center`,
    photo: "/images/speakers/luca-egoriti.jpg",
    photoAdjustment: { position: "center 15%" },
    bio: `Luca Egoriti is a Staff Scientist at TRIUMF, Canada's national particle accelerator laboratory, specializing in target and ion source technologies for radioactive ion beam production as well as accelerator applications in the medical field. He earned his PhD from the University of British Columbia and has worked as project co-lead for the ARIEL target station, the heart of the ARIEL project.`,
    type: "invited",
    title: `TRIUMF-ARIEL: tripling TRIUMF's RIB capabilities`,
    abstract: `TRIUMF's long shutdown in 2026 will have brought ARIEL, the Advanced Rare Isotope Laboratory out of the major construction phase and ready for commissioning. ARIEL will multiply the RIB beam availability at TRIUMF and include the highest power photo fission RIB production facility in the world. This contribution should present the facility and research reach of ARIEL, the status of the facility construction, the lessons learnt from the construction phase, as well as presenting the plans for commissioning and initial operations.`,
    classification: "MC1",
    session: {},
    schedule: { date: "2027-05-26", startTime: "14:00", endTime: "14:30", room: "Grand Riverview Ballroom A" },
  },
  {
    id: "sergey-litvinov",
    name: "Sergey Litvinov",
    affiliation: `GSI Helmholtz Centre for Heavy Ion Research`,
    bio: `Sergey Litvinov is a research scientist at GSI Helmholtzzentrum for Heavy Ion Research (GSI) in Darmstadt, Germany, working in the Storage Ring Department on accelerator physics and experiments at the Experimental Storage Ring (ESR). He received his PhD in Physics from Justus Liebig University Giessen in 2008. His doctoral work was focused on isochronous operation of storage rings, including studies for the ESR and the future Collector Ring (CR) of FAIR. Isochronous storage-ring operation enables precision experiments with short-lived nuclei and applications in astrophysics.
Since joining GSI, he has been involved in the development and operation of storage-ring experiments, with contributions to beam dynamics studies, accelerator operation, and advanced beam manipulation techniques. His work covers various aspects of storage-ring physics, including isochronous operation and novel concepts for stored beam experiments.`,
    type: "invited",
    title: `Proof of principle of beam chaser collisions at the Experimental Storage Ring (ESR)`,
    abstract: `Slow collisions of co-circulating heavy ions near the Coulomb barrier provide access to transient quasi-molecular states, enabling electron exchange processes. For systems with a combined nuclear charge exceeding the critical value Zcr ≈173, such collisions may generate supercritical electromagnetic fields capable of triggering spontaneous electron–positron pair creation via quantum electrodynamic vacuum decay. A conceptually elegant realization of the beam–chaser scheme involves circulating two ion beams along a common closed orbit with identical magnetic rigidity but different velocities. This approach was experimentally demonstrated for the first time in 2025 at the Experimental Storage Ring (ESR) at GSI, Germany. Bare and hydrogen-like uranium beams, with energies of 400 and 393 MeV/u, respectively, were simultaneously stored, and their spatial overlap was confirmed by beam-scraping measurements. This presentation reviews the complete experimental proof of principle, summarizes the key results, and discusses further developments of the concept.`,
    classification: "MC1",
    session: {},
    schedule: { date: "2027-05-26", startTime: "14:30", endTime: "15:00", room: "Grand Riverview Ballroom A" },
  },
];
