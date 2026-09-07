// MC2: Photon Sources and Electron Accelerators — invited speakers for IPAC'27
import type { Speaker } from './types';

export const mc2Speakers: Speaker[] = [
  {
    id: "sven-reiche",
    name: "Sven Reiche",
    affiliation: `Paul Scherrer Institut`,
    photo: "/images/speakers/sven-reiche.jpg",
    photoAdjustment: { position: "center 10%", zoom: 1.0 },
    bio: `Dr. Reiche got his Ph.D. at DESY, Hamburg, for writing the 3D, time-dependent FEL code Genesis 1.3. Then he worked with Claudio Pellegrini for LCLS at UCLA. In 2008 he joined PSI to contribute to the realization of SwissFEL. Currently he is the group leader of FEL beam dynamics at PSI and prepares for the proposed upgrade of the facility.`,
    type: "invited",
    title: `Quo vadis X-ray free-electron lasers? Present and future of the most brilliant light sources`,
    abstract: `X-ray free-electron lasers have revolutionized science with their unprecedented peak brilliance and ultrashort pulses. This talk reviews the current state of X-ray facilities and explores the next frontier. The presentation will focus on shaping the FEL pulses (pulse length control pulses, coherence control), new development of the driving injectors and accelerators and future target applications for FELs.`,
    classification: "MC2",
    session: {},
    schedule: { date: "2027-05-26", startTime: "09:00", endTime: "09:30", room: "Grand Riverview Ballroom A" },
  },
  {
    id: "michele-carla",
    name: "Michele Carlà",
    affiliation: `ALBA-CELLS Synchrotron`,
    photo: "/images/speakers/michele-carla.jpg",
    photoAdjustment: { position: "center 00%", zoom: 1.3 },
    bio: `Michele Carla' is currently a staff scientist in the beam dynamics group at the ALBA light source (Barcelona). He earned his Master in physics at the University of Florence in cooperation with PSI with a thesis on the simulation of a seeded soft x-ray FEL. After completing his master he moved to Barcelona to join the ALBA beam dynamics group within the oPAC Marie Curie training program. The work culminated with the defense of his PhD thesis on the characterization of linear and non-linear optics by means of turn-by-turn measurements. He was then granted a CERN fellowship dedicated to the study of high intensity hadron beams in the SPS in view of the CERN injector upgrade, after which he moved back to ALBA where he is currently dedicated to the design of a low emittance upgrade of the ALBA synchrotron.`,
    type: "invited",
    title: `Methods for full coupling operation in a synchrotron light source`,
    abstract: `Several synchrotron light sources are currently designing a lattice upgrade to reach low (sub-nm) emittances, which inevitably entails a significant beam lifetime reduction. In view of the ALBA lattice upgrade, it was decided to evaluate different methods using the current ALBA storage ring to reach large betatron coupling as a way to increase the lifetime. In a first attempt, coupling was introduced by means of static skew quadrupolar magnets and by tuning the working point onto the resonance 𝑄𝑥 = 𝑄𝑦, but in a realistic scenario, some kind of tune feedback is required to counteract the unavoidable tune drifts and fluctuations that would drive the system out of resonance. Furthermore, the condition 𝑄𝑥 =𝑄𝑦 constrains the linear optics resulting in an important lack of flexibility. Therefore a second method is proposed, based on the excitation of the coupling resonance with an ac skew quadrupole driven at the frequency 𝑓rev·⁡(𝑄𝑥 −𝑄𝑦). In this case, we used the existing four-electrode tune excitation stripline recabled as a skew quadrupole. A fast tune tracking system was implemented to drive the skew quadrupole exactly on the resonance despite the tune fluctuations. This talk goes over the collected results and experiences, aiming to put into light pitfalls and limits of the application of coupling to achieve round beams in a synchrotron light source.`,
    classification: "MC2",
    session: {},
    schedule: { date: "2027-05-24", startTime: "14:00", endTime: "14:30", room: "Grand Riverview Ballroom B" },
  },
  {
    id: "david-funk",
    name: "David Funk",
    affiliation: `Nevada National Security Site`,
    photo: "/images/speakers/david-funk.jpg",
    photoAdjustment: { position: "center 00%", zoom: 1.0 },
    bio: `David Funk serves as Vice President of Enhanced Capabilities for Subcritical Experiments (ECSE) at the Nevada National Security Site (NNSS). In his role, Funk works to ensure the successful execution of ECSE activities, including the NNSS portion of the Advanced Sources and Detectors (ASD) project, Neutron Diagnosed Subcritical Experiments, and technical staff development to support ECSE.

Funk previously served as Los Alamos National Laboratory’s (LANL) Project Director for the ASD project, also known as Scorpius. The ASD project is responsible for the technology maturation, design, fabrication, installation and commissioning of Scorpius through Critical Decision-4. Led by LANL, the ASD project is a collaboration of partners that include Lawrence Livermore National Laboratory (LLNL), Sandia National Laboratories (SNL) and the NNSS.

Funk also served as the Weapons Experiments Division Leader, leading an organization of approximately 200 people in the safe and secure operation of LANL’s outdoor firing sites, gas guns, explosive chemistry labs, small-scale explosive facilities and the Dual Axis Radiographic Hydrodynamic Test (DARHT) facility, the world’s premier hydrotest facility.

With more than 30 years working at LANL, primarily within the weapons program, Funk’s research involved studies of energetic materials, specifically detonation chemistry using ultrafast lasers and the measurement of temperature in shocked metals using neutron resonance spectroscopy.`,
    type: "invited",
    title: `Scorpius: the world’s most advanced electron induction linac`,
    abstract: `Scorpius is a next-generation electron induction linear accelerator currently under construction for the U.S. National Nuclear Security Administration to support advanced radiographic experiments for stockpile stewardship. The project is a collaboration between Los Alamos National Laboratory (LANL), Lawrence Livermore National Laboratory (LLNL), Sandia National Laboratories (SNL), and the Nevada National Security Sites (NNSS). The facility is located approximately 1,000 feet underground at the Nevada National Security Site and is designed to produce a minimum of four high-current electron pulses for flash X-ray radiography of dynamic experiments. The accelerator will deliver electron beams with energies of approximately 22 MeV, peak currents near 1.5 kA, and pulse widths near 80 ns. The facility integrates advanced solid-state pulsed-power systems, beam transport, diagnostics, and controls to achieve reliable multi-pulse operation and high radiographic performance. Building on decades of experience with linear induction accelerators while incorporating significant advances in beam dynamics and system integration, Scorpius represents the most advanced electron induction linac constructed to date. This talk presents an overview of the accelerator concept, key design features, and project status, and discusses the expected performance and its role in enabling next-generation, multi-frame high-resolution radiography experiments.`,
    classification: "MC2",
    session: {},
    schedule: { date: "2027-05-24", startTime: "14:30", endTime: "15:00", room: "Grand Riverview Ballroom B" },
  },
  {
    id: "jun-ho-ko",
    name: "Jun Ho Ko",
    affiliation: `Pohang Accelerator Laboratory`,
    photo: "/images/speakers/jun-ho-ko.jpg",
    photoAdjustment: { position: "center 20%" },
    bio: `Jun Ho Ko earned his Ph.D. from Pohang University of Science and Technology (POSTECH), with a thesis on the characterization of coherent radiation generated in an electron bunch compressor. After completing his doctorate, he joined Pohang Accelerator Laboratory (PAL) as a postdoctoral researcher in the PAL-XFEL Accelerator Group, where he supported accelerator operations for user services. He subsequently joined a synchrotron construction project aimed at developing an extreme-ultraviolet (EUV) light source and contributed to the construction and integration of the accelerator facility. Since July 2021, he has been a staff researcher at the PAL Extreme Ultraviolet Synchrotron (PAL-EUV). His current work focuses on commissioning PAL-EUV by validating accelerator systems, characterizing electron beam performance, and establishing stable operating conditions. Through these efforts, he is helping prepare the facility for reliable operation and future research applications. His research interests include accelerator commissioning and operation, electron beam diagnostics, and beam performance optimization.`,
    type: "invited",
    title: `Construction and commissioning of the PAL-EUV compact synchrotron for semiconductor applications`,
    abstract: `PAL-EUV is a 400 MeV compact synchrotron dedicated to EUV radiation at 13.5 nm for semiconductor R&D, constructed within a 15 m x 15 m footprint at Pohang Accelerator Laboratory. The facility, consisting of a linac, booster ring, and storage ring, completed construction and commissioning in 2023. The speaker would present the design, commissioning results, and operational status of this unique accelerator-based EUV source for industrial applications.`,
    classification: "MC2",
    session: {},
    schedule: { date: "2027-05-25", startTime: "14:30", endTime: "15:00", room: "Grand Riverview Ballroom B" },
  },
];
