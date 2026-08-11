// Speaker data for IPAC'27
// Used to populate the Invited Speakers page and the Synoptic Table webview

/**
 * Type of speaker/presentation slot
 */
export type SpeakerType = 'plenary' | 'invited' | 'contributed';

/**
 * Main classification (track) of the presentation, e.g. "MC7"
 * (see authors/classification.md for the full list of MC codes)
 */
export type SpeakerClassification = string;

/**
 * Session/track information the talk belongs to
 */
export interface SpeakerSession {
  code?: string;      // Session code, e.g. "MOZ1"
  name?: string;       // Session title, e.g. "Opening Plenary"
  track?: string;      // Track name, e.g. "Colliders and Related Accelerators"
}

/**
 * Scheduling information for the presentation, used by the synoptic table
 */
export interface SpeakerSchedule {
  date?: string;       // ISO date, e.g. "2027-05-24"
  startTime?: string;  // "09:00"
  endTime?: string;    // "09:30"
  room?: string;       // Room/location name
}

/**
 * Fine-tuning for how a speaker's photo is cropped/positioned within its
 * (fixed-size, circular) frame. Useful when submitted photos have different
 * aspect ratios, framing, or the subject isn't centered.
 *
 * NOTE: `position` only has a visible effect when the image has room to move
 * within the frame (i.e. its aspect ratio differs from the frame, and/or
 * `zoom` > 1 is set to crop in). If a photo is already square/matches the
 * frame's aspect ratio, set `zoom` > 1 first, then adjust `position`.
 */
export interface PhotoAdjustment {
  /** CSS object-position value, e.g. "center 20%", "top", "50% 30%". Defaults to "center". */
  position?: string;
  /** Zoom factor applied to the image, e.g. 1.2 for 20% zoom-in. Defaults to 1. */
  zoom?: number;
}

export interface Speaker {
  id: string;
  name: string;
  affiliation: string;
  country?: string;
  photo?: string;
  /** Optional adjustment to better frame the photo (cropping/position/zoom) */
  photoAdjustment?: PhotoAdjustment;
  bio?: string;
  type: SpeakerType;

  // Presentation details
  title: string;
  abstract?: string;
  classification?: SpeakerClassification;
  session?: SpeakerSession;
  schedule?: SpeakerSchedule;

  featured?: boolean;
}

// Speakers for IPAC'27 (plenary, invited, and contributed)
// NOTE: session/schedule (date, time, room) are not yet finalized for most
// speakers and are left empty; classification is only known for a few talks.
// Populate these once the program committee finalizes the schedule.
export const speakers: Speaker[] = [
  {
    id: "thomas-glasmacher",
    name: "Thomas Glasmacher",
    affiliation: `Facility for Rare Isotope Beams`,
    type: "plenary",
    title: `Opening Plenary Talk`,
    session: {},
    schedule: {},
  },
  {
    id: "sasha-zhukov",
    name: "Sasha Zhukov",
    affiliation: `Oak Ridge National Laboratory`,
    type: "plenary",
    title: `Opening Plenary Talk`,
    session: {},
    schedule: {},
  },
  {
    id: "bruce-carlsten",
    name: "Bruce Carlsten",
    affiliation: `Los Alamos National Laboratory`,
    type: "plenary",
    title: `Opening Plenary Talk`,
    session: {},
    schedule: {},
  },
  {
    id: "camille-ginsburg",
    name: "Camille Ginsburg",
    affiliation: `European Spallation Source`,
    type: "plenary",
    title: `Opening Plenary Talk`,
    session: {},
    schedule: {},
  },
  {
    id: "ralph-assmann",
    name: "Ralph Assmann",
    affiliation: `GSI Helmholtz Centre for Heavy Ion Research`,
    photo: "/images/speakers/ralph-assmann.png",
    bio: `Ralph Assmann obtained his doctorate in physics from the Ludwig-Maximilians-University in Munich for work on LEP energy calibration and spin polarization, performed at the MPI for Physics and at CERN. He then worked for almost 20 years outside of Germany on various linear and circular colliders at SLAC and CERN. His CERN work included machine coordination for Run I of the LHC, that enabled the discovery of the Higgs boson in 2012. He then returned to Germany as DESY Leading Scientist for Accelerator R&D, where he was Primary Investigator of an ERC synergy grant and founding coordinator of the EuPRAXIA ESFRI project and its plasma accelerator concept. He has been the Chair of the Accelerator Group in the European Physical Society from 2020 - 2023 and had major roles in the organization of the IPAC conference series. Presently, he is the head of Accelerator Operation and Development at GSI/FAIR and Professor for Accelerator Physics at the Goethe University Frankfurt.`,
    type: "plenary",
    title: `Overcoming setbacks in pursuit of commissioning of the integrated accelerator complex FAIR & GSI`,
    abstract: `The FAIR accelerator facility will provide heavy ion beams for frontier research in nuclear physics and related domains. It had been planned to take the new SuperFRS into operation at end of 2027 and the new SIS-100 synchrotron at the end of 2028. The required heavy ion beams will be generated in the UNILAC linear accelerator, which supports world-leading GSI research since 1975. UNILAC had been continuously maintained and optimized, however, its majority of technical components, including the RF system with 20 MW of installed peak power, date back to 1975. On 5th February 2026 a short circuit in the UNILAC RF gallery initiated a major fire. Due to strict safety policies, the quick reaction of the on site personnel and the excellent work of the fire brigades all personnel could be kept safe and the fire was kept constrained to the RF gallery. Nevertheless the full UNILAC RF system was destroyed and significant secondary damage was induced in electronics racks and other equipment by water and soot. As a consequence the ion beam operation for GSI and FAIR is interrupted. In response to this setback a major project was started with the goals (1) to restore the full UNILAC capabilities, (2) to provide interim ion beams for FAIR commissioning and science and (3) to remove other possible critical points of failures in the FAIR injection chain and the GSI accelerator complex. The talk will discuss the GSI fire event and the lessons learnt. It will then present the goals and plans of the restoration project and of its various sub-projects. `,
    session: {},
    schedule: {},
  },
  {
    id: "michael-borland",
    name: "Michael Borland",
    affiliation: `Argonne National Laboratory`,
    photo: "/images/speakers/michael-borland.png",
    bio: `Michael Borland is a Distinguished Fellow and an Associate Division Director for Accelerator Systems at Argonne National Laboratory, as well as a fellow of the American Physical Society. His thesis work involved design and commissioning of a 1.5-cell thermionic rf gun at SSRL.  After moving to Argonne, he played a prominent role in the design, commissioning, and transition to operations of the APS complex, particuarly for the Particle Accumulator Ring and Storage Ring. Michael is the principal author of ELEGANT, a widely-used code for accelerator design and simulation.  From 2013 to 2023, he led the physics design effort for the APS Upgrade storage ring, which he helped commission in 2024.`,
    type: "plenary",
    title: `From design to operation: performance and challenges of 4th generation light sources`,
    abstract: `The worldwide landscape of synchrotron radiation facilities has been transformed by the arrival of 4th generation storage ring (4GSR) light sources. Utilizing multi-bend achromat (MBA) lattices, these facilities reduce electron beam emittance to a few hundred picometers or less, increasing X-ray brightness and transverse coherence by orders of magnitude compared to 3rd generation rings. Translating these ambitious lattice designs into operational facilities that deliver scientific results for x-ray users presents significant accelerator physics and engineering challenges. 

Using the recent APS upgrade as an example, this talk traces the path from physics design and simulation to engineering, construction, commissioning, and routine user operations. We survey solutions and experience from operating 4GSR facilities, examining key design choices such as hybrid MBA lattices, reverse bends, longitudinal gradient dipoles, and injection schemes. Of particular interest is the degree to which simulation-based predictions of emittance, injection efficiency, and lifetime are achieved in reality. We end with a survey of upcoming projects and prospects for improvements to existing 4GSRs.`,
    session: {},
    schedule: {},
  },
  {
    id: "haixiao-deng",
    name: "Haixiao Deng",
    affiliation: `Shanghai Advanced Research Institute`,
    photo: "/images/speakers/haixiao-deng.jpg",
    photoAdjustment: { position: "center 20%" },
    bio: `Haixiao Deng, President of the Shanghai Advanced Research Institute (SARI), Chinese Academy of Sciences, has long been dedicated to X-ray free-electron laser physics and experiments. He proposed and demonstrated the self-amplification of coherent energy modulation in electron beams, and pioneered the phase-merging FEL theory, opening new directions for advanced light source research. He has played core roles in the construction of China’s major FEL facilities including SDUV, DCLS, SXFEL and SHINE. Currently, he is the General Manager Assistant of the SHINE project and in charge of the overall construction of the switchyard and undulator lines of SHINE.`,
    type: "plenary",
    title: `First light of SHINE`,
    abstract: `SHINE is an 8 GeV superconducting X-ray FEL designed to cover a broad photon energy range of 0.2–15 keV at a 1 MHz repetition rate. As one of the next-generation high-average-power XFEL facilities worldwide, it is now in an advanced stage of construction. First FEL light is targeted for 2026, and routine user operation is expected to begin in 2027. This talk will report the most recent FEL commissioning results and give an updated status of the entire SHINE facility.`,
    session: {},
    schedule: {},
  },
  {
    id: "qiong-wu",
    name: "Qiong Wu",
    affiliation: `Brookhaven National Laboratory`,
    type: "plenary",
    title: `Design and R&D achievements towards realizing the Electron Ion Collider`,
    session: {},
    schedule: {},
  },
  {
    id: "kelly-gaffney",
    name: "Kelly Gaffney",
    affiliation: `SLAC National Accelerator Laboratory`,
    type: "plenary",
    title: `Closing Plenary Talk`,
    session: {},
    schedule: {},
  },
  {
    id: "massimo-giovannozzi",
    name: "Massimo Giovannozzi",
    affiliation: `European Organization for Nuclear Research`,
    type: "plenary",
    title: `Closing Plenary Talk`,
    session: {},
    schedule: {},
  },
  {
    id: "wenlong-zhan",
    name: "Wenlong Zhan",
    affiliation: `Institute of Modern Physics`,
    type: "plenary",
    title: `Closing Plenary Talk`,
    session: {},
    schedule: {},
  },
  {
    id: "gaku-mitsuka",
    name: "Gaku Mitsuka",
    affiliation: `High Energy Accelerator Research Organization`,
    type: "plenary",
    title: `Closing Plenary Talk`,
    session: {},
    schedule: {},
  },
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
    schedule: {},
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
    schedule: {},
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
    schedule: {},
  },
  {
    id: "sven-reiche",
    name: "Sven Reiche",
    affiliation: `Paul Scherrer Institut`,
    photo: "/images/speakers/sven-reiche.jpg",
    photoAdjustment: { position: "center 20%" },
    bio: `Dr. Reiche got his Ph.D. at DESY, Hamburg, for writing the 3D, time-dependent FEL code Genesis 1.3. Then he worked with Claudio Pellegrini for LCLS at UCLA. In 2008 he joined PSI to contribute to the realization of SwissFEL. Currently he is the group leader of FEL beam dynamics at PSI and prepares for the proposed upgrade of the facility.`,
    type: "invited",
    title: `Quo vadis X-ray free-electron lasers? Present and future of the most brilliant light sources`,
    abstract: `X-ray free-electron lasers have revolutionized science with their unprecedented peak brilliance and ultrashort pulses. This talk reviews the current state of X-ray facilities and explores the next frontier. The presentation will focus on shaping the FEL pulses (pulse length control pulses, coherence control), new development of the driving injectors and accelerators and future target applications for FELs.`,
    classification: "MC2",
    session: {},
    schedule: {},
  },
  {
    id: "michele-carla",
    name: "Michele Carlà",
    affiliation: `ALBA-CELLS Synchrotron`,
    type: "invited",
    title: ``,
    classification: "MC2",
    session: {},
    schedule: {},
  },
  {
    id: "david-funk",
    name: "David Funk",
    affiliation: `Nevada National Security Site`,
    type: "invited",
    title: ``,
    classification: "MC2",
    session: {},
    schedule: {},
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
    schedule: {},
  },
  {
    id: "samuel-barber",
    name: "Samuel Barber",
    affiliation: `Lawrence Berkeley National Laboratory`,
    type: "invited",
    title: ``,
    classification: "MC3",
    session: {},
    schedule: {},
  },
  {
    id: "mario-galletti",
    name: "Mario Galletti",
    affiliation: `Italian National Institute for Nuclear Physics`,
    photo: "/images/speakers/mario-galletti.jpeg",
    photoAdjustment: { position: "center 15%" },
    bio: `Mario Galletti is a Senior Researcher at the Frascati National Laboratories (LNF) of the Italian National Institute for Nuclear Physics (INFN), where he conducts research on advanced accelerator concepts, high-power laser systems, and plasma-based particle acceleration. He received his M.Sc. in Physics from the University of Pisa and his Ph.D. in Physics Engineering from Instituto Superior Técnico, University of Lisbon, in 2020.
His research focuses on laser- and beam-driven plasma wakefield acceleration, free-electron lasers, beam diagnostics, and the development of compact accelerator technologies for scientific applications. He has played a leading role in several international collaborations, including EuPRAXIA, contributing to pioneering demonstrations of plasma-driven free-electron lasers and innovative plasma accelerator technologies. He is the lead or corresponding author of numerous high-impact publications in journals such as Nature, Nature Photonics, Physical Review Letters, and Physical Review.
Dr. Galletti has received several prestigious awards, including the 2024 SILS Young Scientist Award and the European Physical Society Plasma Physics Division PhD Research Award. He is actively involved in teaching, mentoring young researchers, coordinating international research activities, and serving as reviewer and editor for leading scientific journals.`,
    type: "invited",
    title: `Beam-driven wakefield acceleration in laser-plasma filament`,
    abstract: `The talk will report on the experimental demonstration of plasma-based electron acceleration using laser-generated plasma filament as acceleration stage. The experiments are performed at SPARC_LAB (INFN - Frascati). The work builds on a complete experimental and theoretical characterisation of plasma filaments generated by low-energy (10 mJ), self-guided femtosecond laser pulses in low-pressure nitrogen [1]. This approach allows for proposing plasma filaments as tunable, high repetition-rate, low-energy dissipation plasma acceleration stages, with potential scalability of the interaction length to the meter scale. These features make filament-based stages particularly attractive for future light sources facilities based on plasma accelerators, as EuPRAXIA and EuPRAXIA-related systems. This work could be of broad interest because it introduces, for the first time, a beam-driven plasma acceleration stage based on the nonlinear self-guided propagation of an ultrashort laser pulse, rather than externally confined or preformed plasma structures. Beyond particle acceleration, this concept naturally connects to several topical areas, including nonlinear light–matter interaction, laser filamentation physics, compact accelerator technologies, and advanced plasma photonics.`,
    classification: "MC3",
    session: {},
    schedule: {},
  },
  {
    id: "renkai-li",
    name: "Renkai Li",
    affiliation: `Tsinghua University in Beijing`,
    type: "invited",
    title: ``,
    classification: "MC3",
    session: {},
    schedule: {},
  },
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
    schedule: {},
  },
  {
    id: "austin-hoover",
    name: "Austin Hoover",
    affiliation: `Oak Ridge National Laboratory`,
    type: "invited",
    title: ``,
    classification: "MC4",
    session: {},
    schedule: {},
  },
  {
    id: "alec-gonzalez",
    name: "Alec Gonzalez",
    affiliation: `Facility for Rare Isotope Beams`,
    type: "invited",
    title: ``,
    classification: "MC4",
    session: {},
    schedule: {},
  },
  {
    id: "alexander-romanov",
    name: "Alexander Romanov",
    affiliation: `Fermi National Accelerator Laboratory`,
    type: "invited",
    title: ``,
    classification: "MC5",
    session: {},
    schedule: {},
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
    schedule: {},
  },
  {
    id: "chris-carilli",
    name: "Chris Carilli",
    affiliation: `National Radio Astronomy Observatory`,
    photo: "/images/speakers/chris-carilli.png",
    classification: "MC6",
    bio: `Dr. Chris Carilli is a senior scientist at the US National Radio Astronomy Observatory. He served as the Chief Scientist for the Observatory for 16 years, and held a dual appointment as Director of Research at the Cavendish Laboratory for 8 years. He was a visiting Humboldt Fellow at the MPIfR in Bonn, and in 2005 he was awarded the Max-Planck Research Prize from the Humboldt and Max-Planck Societies for his work in radio astronomical interferometry. He earned his PhD in physics from MIT in 1989.`,
    type: "invited",
    title: `Non-redundant aperture masking interferometry for joint real-time, two dimensional transverse beam shape measurements, and nm-precision wavefront sensing`,
    abstract: `Classical double-aperture Young interferometry at optical wavelengths is widely used in accelerators to provide a one-dimensional transverse beam size measurement. Recently, we have improved this technique dramatically using two-dimensional interferometric imaging techniques developed for radio astronomy. We combine multi-hole, non-redundant aperture masks at optical wavelengths with Fourier plane self-calibration techniques from radio astronomy, to perform real-time, two-dimensional transverse beam size measurements from a single-shot interferogram on millisecond timescales. The technique has been demonstrated at the ALBA synchrotron light source using masks with up to 12 holes [Nikolic et al. arXiv:2405.12090; Torino et al. arXiv:2607.19991; Iriso et al. arXiv:2409.11135], for which we recover the Gaussian beam profile to ~ 1% accuracy. The self-calibration process entails joint derivation of the source shape and the complex gains for each aperture, thereby correcting for non-uniform illumination across the aperture plane. The gain phases provide a measurement of pathlengths through the optical system, thereby representing a real-time wavefront sensor with nanometer precision, or better [Carilli et al. arXiv:2503.10820]. We have also demonstrated the technique in near-IR astronomy using the aperture mask on the James Webb Space Telescope to image dusty binary stars.  Most recently, the technique has been applied at the LHC, and we are currently improving mask design and processing to characterize non-Gaussian beam shapes, increase the SNR to perform beam halo measurements, and obtain better wavefront sampling for multi-term 2D Zernike polynomial fitting. `,
    session: {},
    schedule: {},
  },
  {
    id: "chris-tennant",
    name: "Chris Tennant",
    affiliation: `Thomas Jefferson National Accelerator Facility`,
    photo: "/images/speakers/chris-tennant.png",
    classification: "MC6",
    bio: `Chris Tennant is a Senior Staff Scientist at Jefferson Lab, where he has spent his entire career. He received his Ph.D. in Physics from the College of William & Mary in 2006. His doctoral work focused on energy recovery linacs (ERLs), including the first measurements and mitigation of the multipass beam breakup instability at the Jefferson Lab FEL, as well as the CEBAF energy recovery experiment. For several years afterward, he worked on the design and simulation of ERL-based machines for defense, lithography, and basic science applications. For the last 10 years, his focus has shifted to developing AI tools that empower accelerator operators and subject matter experts. His current research covers representation learning and natural language interfaces for control systems, including ontology development.`,
    type: "invited",
    title: `Toward a fully autonomous, AI-native particle accelerator`,
    abstract: `The promise of a self-driving particle accelerator — one that tunes itself, adapts to changing demands, and ultimately drives the experiment it serves toward greater discovery — has long motivated the accelerator community, and recent national priorities have only sharpened that motivation. We present a vision for AI-native accelerators, in which artificial intelligence shapes a facility's design, diagnostics, and operation from the outset, rather than being retrofitted onto systems built for human control. Drawing on parallel developments in self-driving vehicles and robotics, we argue that autonomy depends on a machine having a working model of its own environment. It must know where it has operated before, where it is now, and where it needs to go, expressed as a learned representation of machine state rather than raw signal streams. We describe a framework built around this idea for tuning and control, one aimed at transferring a skill that today lives largely in expert intuition into something a machine can learn directly. We also touch on the safety architecture this requires, including sandboxed validation on digital twins and layered safety controls, as well as how operators interact with such a system through natural language. This is emerging work, grounded in and drawing on efforts across the accelerator community, and we offer it here as a direction for the field to pursue together.`,
    session: {},
    schedule: {},
  },
  {
    id: "yoshinori-hashimoto",
    name: "Yoshinori Hashimoto",
    affiliation: `High Energy Accelerator Research Organization`,
    type: "invited",
    title: ``,
    classification: "MC6",
    session: {},
    schedule: {},
  },
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
    schedule: {},
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
    schedule: {},
  },
  {
    id: "samuel-miller",
    name: "Samuel Miller",
    affiliation: `Facility for Rare Isotope Beams`,
    photo: "/images/speakers/samuel-miller.jpg",
    photoAdjustment: { position: "center 25%" },
    bio: `Samuel Miller is the Mechanical Engineering Department Manager and Superconducting Mechanical Design Group Leader at the Facility for Rare Isotope Beams (FRIB). He holds a Master of Science in Mechanical Engineering and brings more than 17 years of experience in accelerator technology, superconducting radio-frequency (SRF) systems, interceptive devices, and large-scale scientific infrastructure.
During the first 14 years of his career, Samuel specialized in the design and development of superconducting cryomodules, SRF cavities, and superconducting magnets, while leading the mechanical integration and installation of complex accelerator systems. His expertise spans the full lifecycle of advanced accelerator components, from design and fabrication to installation and commissioning.
In his current role, Samuel leads engineering efforts focused on interceptive devices, including the development of next-generation high-power beam dumps to support FRIB's future operational needs. He also oversees the mechanical design and development of new beamlines that will enable the expansion of FRIB's experimental capabilities and support future scientific programs.
`,
    type: "invited",
    title: `Engineering design, challenges, and lessons learned of high-power heavy ion beam dumps`,
    abstract: `The Facility for Rare Isotope Beams (FRIB) is a high-power heavy ion accelerator facility at Michigan State University completed in 2022. Its driver linac is designed to accelerate all stable ions to energies above 200 MeV/u with beam power of up to 400 kW. Currently, FRIB is operating up to 20 kW, delivering multiple primary beam species. The beam dump absorbs approximately 75% of the primary beam power. The existing static beam dump head can accommodate up to 30 kW operation, with a planned transition to an enhanced static beam dump design and eventual rotational beam dump for above 50 kW. Presented here is an overview of the mechanical designs of the beam dump, challenges, and lessons learned from operations.`,
    classification: "MC7",
    session: {},
    schedule: {},
  },
  {
    id: "aveen-mahon",
    name: "Aveen Mahon",
    affiliation: `TRIUMF, Canada’s particle accelerator center`,
    photo: "/images/speakers/aveen-mahon.jpg",
    photoAdjustment: { position: "center 20%" },
    bio: `Aveen Mahon is a PhD candidate at the University of Victoria, working in the accelerator physics division at TRIUMF, Canada’s national particle accelerator centre. Her research centres on the charging and migration of micron-sized dust particulates in accelerator environments and their impact on SRF cavities. Her work at TRIUMF also includes beam optics studies and quadrupole magnet design for the TRIUMF electron linear accelerator. Mahon obtained her Master’s degree in particle physics at McGill University working with the CALICE (now DRDCalo) collaboration. In addition to her research, Mahon actively engages in physics outreach and mentorship programs and serves on the TRIUMF graduate student and postdoc committee. Mahon has received independent funding through the NSERC Postgraduate Scholarships – Doctoral (PGS D) program, the Westcott Fellowship, and is the current holder of the Shelley Page Fellowship.`,
    type: "invited",
    title: `Microscopic dust, macroscopic downtime: the impacts of micron sized particulates
in superconducting particle accelerators`,
    abstract: `A key limitation to the performance of SRF based accelerators is contamination; external particulates (aka dust) present on the cavity surface trigger field emission, a phenomenon where electrons tunnel through the cavity surface due to strong electric fields. Field emission is actively observed at the TRIUMF electron linear accelerator (e-Linac), showing a progressive onset throughout operation, despite cavities undergoing stringent cleaning procedures prior to installation. We investigate whether micron-scale particulates generated by accelerator components during operation migrate into SRF cavities and contribute to the onset of field emission. These grains can acquire electrostatic charge in the radiation environment of an accelerator, and their composition and charge-to-mass ratios are largely unknown and unique to each facility. Experiments using an in-vacuum particle counter are being conducted to study their charging and lofting dynamics and to inform mitigation strategies for maintaining SRF accelerator performance.`,
    classification: "MC7",
    session: {},
    schedule: {},
  },
  {
    id: "wei-lu",
    name: "Wei Lu",
    affiliation: `Institute of High Energy Physics`,
    type: "invited",
    title: ``,
    classification: "MC8",
    session: {},
    schedule: {},
  },
  {
    id: "marc-wenskat",
    name: "Marc Wenskat",
    affiliation: `University of Hamburg`,
    photo: "/images/speakers/marc-wenskat.jpg",
    classification: "MC8",
    bio: `Dr. Marc Wenskat is a Staff Scientist at DESY and Group Leader of the SRF R&D group at the University of Hamburg, from where he got his PhD in 2015. His research expertise lies in surface engineering and the study of niobium-based SRF cavities, with his group focusing on the fundamental relationships between surface dynamics, radio-frequency properties, and the electromagnetic response of cavities. Dr. Wenskat leads two key initiatives at DESY: coating cavities with thin superconducting films using Atomic Layer Deposition and exploring alternative applications of SRF technology, such as gravitational wave detection. He coordinates two BMFTR-funded research collaborations involving 11 German universities to advance SRF technology in its various aspects. Since 2021, he has been elected thrice to the German political representation committee for accelerator scientists and serves on DESY's Quantum Technology Task Force.`,
    type: "invited",
    title: `Detection of high-f gravitational waves using SRF cavities`,
    abstract: `DESY, the University of Hamburg, and Fermilab are collaborating on an experiment to search for high-frequency gravitational waves (GWs) in the 10 kHz to 100 MHz range, using superconducting radiofrequency (SRF) cavities to detect tiny harmonic deformations, induced by GWs, that change the boundary conditions of the oscillating electromagnetic field. We briefly motivate this search and address its challenging environmental requirements: an LLRF system beyond state-of-the-art accuracy and resolution, and a seismic noise-mitigated cryostat at 1.8 K. The focus is the warm and cold commissioning of a prototype cavity built 20 years ago during the MAGO collaboration. Cryogenic tests at Fermilab and DESY down to 2 K achieved the targeted 11 kHz mode splitting after tuning, confirmed high quality factors after transferring processes to this unusual cavity geometry, revealed transfer-function characteristics relevant for LLRF control, an unwanted mode coupling from multipacting and mechanical quality factors below theoretical expectations. All those results lead to the design of an optimized cavity geometry and improved LLRF system, paving the way toward a first physics run in an uncharted GW phase space.`,
    session: {},
    schedule: {},
  },
];

/**
 * Get all speakers of a given type (plenary, invited, contributed)
 */
export function getSpeakersByType(type: SpeakerType): Speaker[] {
  return speakers.filter(s => s.type === type);
}

/**
 * Get a speaker by ID
 */
export function getSpeaker(id: string): Speaker | undefined {
  return speakers.find(s => s.id === id);
}

/**
 * Get all speakers within a main classification (e.g. "MC1")
 */
export function getSpeakersByClassification(classification: string): Speaker[] {
  return speakers.filter(s => s.classification === classification);
}

/**
 * Get all speakers for a given session code
 */
export function getSpeakersBySession(sessionCode: string): Speaker[] {
  return speakers.filter(s => s.session?.code === sessionCode);
}

/**
 * Get all speakers scheduled on a given date, sorted by start time
 * Useful for building the synoptic table view
 */
export function getSpeakersByDate(date: string): Speaker[] {
  return speakers
    .filter(s => s.schedule?.date === date)
    .sort((a, b) => (a.schedule?.startTime || '').localeCompare(b.schedule?.startTime || ''));
}
