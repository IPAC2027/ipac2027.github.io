// MC4: Hadron Accelerators — invited speakers for IPAC'27
import type { Speaker } from './types';

export const mc4Speakers: Speaker[] = [
  {
    id: "davide-gamba",
    name: "Davide Gamba",
    affiliation: `European Organization for Nuclear Research`,
    photo: "/images/speakers/davide-gamba.jpg",
    photoAdjustment: { position: "center 20%" },
    bio: `Davide Gamba is a researcher in the Accelerator Beam Physics group at CERN. He received his PhD from the University of Oxford for work on the optimisation of the CLIC Drive Beam recombination at CERN’s CLIC Test Facility, CTF3, and later contributed to the conversion of part of that infrastructure into the CLEAR electron-beam user facility. His work has also included studies for the HL-LHC, in particular on interaction-point orbit control and ground-motion effects. In recent years, his main focus has been CERN’s low-energy antiproton complex, where he has contributed to the commissioning, restart and performance improvement of ELENA and of the AD–ELENA chain. His expertise includes beam dynamics, electron cooling, operational optimisation and the specification of future cooling systems, including the new electron cooler for the Antiproton Decelerator. He coordinates and supports machine-development activities aimed at improving beam quality, reliability and long-term performance for CERN’s antimatter physics programme.`,
    type: "invited",
    title: `The CERN antiproton programme: present performance and future challenges`,
    abstract: `CERN’s Antimatter Factory provides low-energy antiprotons for a diverse programme of precision experiments investigating the fundamental properties of antimatter. Producing these beams requires antiprotons generated at relativistic energies to be collected, cooled and decelerated over several orders of magnitude before being transferred to the experiments and captured in electromagnetic traps.
The facility comprises the Antiproton Decelerator (AD) and the Extra Low ENergy Antiproton ring (ELENA). The AD presently delivers approximately 6x10^7 antiprotons at 5.3 MeV every two minutes, while ELENA further decelerates the beam to 100 keV and distributes several low-emittance bunches to up to four experiments. The introduction of ELENA has substantially increased the facility’s experimental capacity and improved the efficiency with which antiprotons can be captured and used.
Recent highlights from the AD and ELENA experimental programme include precision 1S–2S spectroscopy of trapped antihydrogen, measurements of the gravitational behaviour of antihydrogen, precision spectroscopy of exotic atoms such as antiprotonic helium and positronium, progress towards the production of antihydrogen ions, investigations of neutron skins in exotic nuclei, parts-per-billion measurements of the antiproton magnetic moment, and recent advances in antimatter transport.
These achievements, together with the growing complexity and scientific ambitions of the experimental programme, place increasingly demanding requirements on beam performance, reliability and long-term availability. This presentation will review the accelerator chain and its principal beam-physics and operational challenges, summarise the present performance of the AD-ELENA complex, and discuss consolidation priorities and possible future developments for CERN’s low-energy antiproton programme.`,
    classification: "MC4",
    session: {},
    schedule: { date: "2027-05-25", startTime: "09:00", endTime: "09:30", room: "Grand Riverview Ballroom A" },
  },
  {
    id: "austin-hoover",
    name: "Austin Hoover",
    bio: ` `,
    affiliation: `Oak Ridge National Laboratory`,
    type: "invited",
    title: `Eigenpainting in hadron accumulator rings`,
    abstract: `Phase space painting is an important technique to mitigate space charge in high-power hadron rings. Eigenpainting is a new painting method in which particles are injected along eigenvectors of the ring transfer matrix. The method could be leveraged to build near-equilibrium distributions with very small emittance in four-dimensional phase space. This talk reports the first experimental tests of eigenpainting at the Spallation Neutron Source (SNS), including the optimization of the injection system and measurement of the accumulated phase space distribution. I will also describe planned experiments and simulations to study the method performance at high intensities and possible applications to future machines.`,
    classification: "MC4",
    session: {},
    schedule: { date: "2027-05-25", startTime: "14:30", endTime: "15:00", room: "Grand Riverview Ballroom A" },
  },
  {
    id: "alec-gonzalez",
    name: "Alec Gonzalez",
    affiliation: `Facility for Rare Isotope Beams`,
    photo: "/images/speakers/alec-gonzalez.png",
    photoAdjustment: { position: "center 20%" },
    bio: `Alec Gonzalez is a postdoc in the FRIB accelerator physics department. He received his PhD in 2025 from Michigan State University for his work on mitigating beam losses in the FRIB accelerator during beam power ramp up. His current work focuses on accurately modeling beam dynamics and improving 4D beam reconstructions along the FRIB accelerator.`,
    type: "invited",
    title: `Commissioning of accelerator upgrade projects to mitigate beam halo formation in high-power heavy ion linac`,
    abstract: `Two accelerator improvement projects have been proposed and developed to mitigate the beam halo formation after the liquid lithium stripper at FRIB. The first project deals with a stronger beam focusing into the liquid lithium film to suppress beam halo formation caused by non-uniform lithium film thickness. The second project is the development of a second-harmonic cavity to increase the post-stripper longitudinal acceptance to accommodate the longitudinal halo of the bunch. Both systems will be completed, installed, and commissioned before the end of 2026. As a result, we will substantially reduce beam losses in the post-stripper superconducting linac and prevent possible degradation of SC cavities. The design features of new devices and commissioning results will be reported.`, 
    classification: "MC4",
    session: {},
    schedule: { date: "2027-05-25", startTime: "14:00", endTime: "14:30", room: "Grand Riverview Ballroom A" },
  },
];
