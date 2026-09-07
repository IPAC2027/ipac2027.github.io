// MC7: Accelerator Technology and Sustainability — invited speakers for IPAC'27
import type { Speaker } from './types';

export const mc7Speakers: Speaker[] = [
  {
    id: "tsutomu-taniuchi",
    name: "Tsutomu Taniuchi",
    affiliation: `Japan Synchrotron Radiation Research Institute`,
    photo: "/images/speakers/tsutomu-taniuchi.jpeg",
    classification: "MC7",
    bio: `Tsutomu Taniuchi is a Senior Scientist in the Accelerator Division at the Japan Synchrotron Radiation Research Institute (JASRI), one of the host institutes of the SPring-8 synchrotron radiation facility. He received his Ph.D. in Science from Tohoku University in 1994 for his research on a damped X-band accelerating structure for linear colliders. He then joined the SPring-8 project, where he has contributed to the construction, commissioning, and operation of the SPring-8 injector linac, particularly its high-power RF system, as well as to the research and development of photocathode RF guns and high-gradient accelerating structures. He also contributed to the construction of NanoTerasu, Japan's newest synchrotron radiation facility. His current research focuses on the development of permanent-magnet dipole magnets and beam injection systems for the SPring-8-II upgrade.`,
    type: "invited",
    title: `Novel septum magnets for next-generation accelerator facility`,
    abstract: `DC septum magnets are key components in advancing sustainable accelerator design. Conventional direct-drive designs have long forced septum conductors to operate at extremely high current densities to sustain an intense deflecting magnetic field while preserving a nearly zero-field region nearby, making them a major source of energy dissipation and heat generation. This nomination highlights two independent solutions to the persistent problem. First, the nominee has successfully demonstrated a permanent magnet-based septum magnet capable of deflecting multi-GeV electron beams, entirely removing the requirements for excitation power and cooling [1]. This innovative technology has been adopted for the green upgrade of SPring-8, SPring-8-II. Furthermore, the thin septum architecture developed for the permanent magnet design enabled a configuration that significantly increases the coil cross-section in an electromagnet version, eventually leading to a 25-fold power consumption reduction [2]. This breakthrough has already been commissioned for beam injection at the newly launched NanoTerasu synchrotron radiation facility. The two advancements now provide sustainable and robust solutions in accelerator designs.`,
    session: {},
    schedule: { date: "2027-05-25", startTime: "14:00", endTime: "14:30", room: "Grand Riverview Ballroom B" },
  },
  {
    id: "alexandre-arsenault",
    name: "Alexandre Arsenault",
    affiliation: `Paul Scherrer Institut`,
    photo: "/images/speakers/alexandre-arsenault.jpg",
    photoAdjustment: { position: "center 20%" },
    classification: "MC7",
    bio: `Alexandre Arsenault is a scientist at the Paul Scherrer Institute, specializing in R&D for new undulator concepts. His research is focused on simulations and experiments of high-temperature superconducting bulks and tapes used to generate high magnetic fields at small period lengths for the next generation of undulators. He received his PhD degree in 2023 from Polytechnique Montreal, where he investigated the use of superconducting bulks for magnetic drug delivery.`,
    type: "invited",
    title: `CASPER: a Compact Arbitrary Superconducting Polarisation Emitting Radiator`,
    abstract: `To provide fully controllable elliptical polarisation to all experimental stations of the SwissFEL facility, spanning soft to hard x-rays, the PSI ID group is developing a novel undulator concept based on HTS REBCO tapes. The proposed design enables the superposition of right-handed and left-handed helical fields with comparable strength, allowing the generation of horizontal and vertical linear polarisation with similar field amplitudes and continuous tuning across all elliptical states. Owing to the compactness of the concept, polarisation rotation could also be achieved through a physical rotation of the coil assembly or its cryostat. This presentation will introduce the new winding scheme and the underlying REBCO tape technology, and will summarise the expected magnetic field performance for parameter sets relevant to future SwissFEL upgrades. Particular emphasis will be placed on the remaining challenges and the substantial R&D effort required to establish this approach as a robust undulator technology, including issues related to persistent currents, quench protection, and automated winding processes.`,
    session: {},
    schedule: { date: "2027-05-27", startTime: "11:00", endTime: "11:30", room: "Grand Riverview Ballroom B" },
  },
  {
    id: "samuel-miller",
    name: "Samuel Miller",
    affiliation: `Facility for Rare Isotope Beams`,
    photo: "/images/speakers/samuel-miller.jpg",
    photoAdjustment: { position: "center 10%" },
    bio: `Samuel Miller is the Mechanical Engineering Department Manager and Superconducting Mechanical Design Group Leader at the Facility for Rare Isotope Beams (FRIB). He holds a Master of Science in Mechanical Engineering and brings more than 17 years of experience in accelerator technology, superconducting radio-frequency (SRF) systems, interceptive devices, and large-scale scientific infrastructure.
During the first 14 years of his career, Samuel specialized in the design and development of superconducting cryomodules, SRF cavities, and superconducting magnets, while leading the mechanical integration and installation of complex accelerator systems. His expertise spans the full lifecycle of advanced accelerator components, from design and fabrication to installation and commissioning.
In his current role, Samuel leads engineering efforts focused on interceptive devices, including the development of next-generation high-power beam dumps to support FRIB's future operational needs. He also oversees the mechanical design and development of new beamlines that will enable the expansion of FRIB's experimental capabilities and support future scientific programs.
`,
    type: "invited",
    title: `Engineering design, challenges, and lessons learned of high-power heavy ion beam dumps`,
    abstract: `The Facility for Rare Isotope Beams (FRIB) is a high-power heavy ion accelerator facility at Michigan State University completed in 2022. Its driver linac is designed to accelerate all stable ions to energies above 200 MeV/u with beam power of up to 400 kW. Currently, FRIB is operating up to 20 kW, delivering multiple primary beam species. The beam dump absorbs approximately 75% of the primary beam power. The existing static beam dump head can accommodate up to 30 kW operation, with a planned transition to an enhanced static beam dump design and eventual rotational beam dump for above 50 kW. Presented here is an overview of the mechanical designs of the beam dump, challenges, and lessons learned from operations.`,
    classification: "MC7",
    session: {},
    schedule: { date: "2027-05-27", startTime: "09:00", endTime: "09:30", room: "Grand Riverview Ballroom B" },
  },
  {
    id: "aveen-mahon",
    name: "Aveen Mahon",
    affiliation: `TRIUMF, Canada’s particle accelerator center`,
    photo: "/images/speakers/aveen-mahon.jpg",
    photoAdjustment: { position: "center 20%", zoom: 1.3 },
    bio: `Aveen Mahon is a PhD candidate at the University of Victoria, working in the accelerator physics division at TRIUMF, Canada’s national particle accelerator centre. Her research centres on the charging and migration of micron-sized dust particulates in accelerator environments and their impact on SRF cavities. Her work at TRIUMF also includes beam optics studies and quadrupole magnet design for the TRIUMF electron linear accelerator. Mahon obtained her Master’s degree in particle physics at McGill University working with the CALICE (now DRDCalo) collaboration. In addition to her research, Mahon actively engages in physics outreach and mentorship programs and serves on the TRIUMF graduate student and postdoc committee. Mahon has received independent funding through the NSERC Postgraduate Scholarships – Doctoral (PGS D) program, the Westcott Fellowship, and is the current holder of the Shelley Page Fellowship.`,
    type: "invited",
    title: `Microscopic dust, macroscopic downtime: the impacts of micron sized particulates
in superconducting particle accelerators`,
    abstract: `A key limitation to the performance of SRF based accelerators is contamination; external particulates (aka dust) present on the cavity surface trigger field emission, a phenomenon where electrons tunnel through the cavity surface due to strong electric fields. Field emission is actively observed at the TRIUMF electron linear accelerator (e-Linac), showing a progressive onset throughout operation, despite cavities undergoing stringent cleaning procedures prior to installation. We investigate whether micron-scale particulates generated by accelerator components during operation migrate into SRF cavities and contribute to the onset of field emission. These grains can acquire electrostatic charge in the radiation environment of an accelerator, and their composition and charge-to-mass ratios are largely unknown and unique to each facility. Experiments using an in-vacuum particle counter are being conducted to study their charging and lofting dynamics and to inform mitigation strategies for maintaining SRF accelerator performance.`,
    classification: "MC7",
    session: {},
    schedule: { date: "2027-05-26", startTime: "09:00", endTime: "09:30", room: "Grand Riverview Ballroom B" },
  },
];
