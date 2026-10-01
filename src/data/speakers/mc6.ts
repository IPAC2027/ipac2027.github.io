// MC6: Beam Instrumentation, Controls, Feedback and Operational Aspects — invited speakers for IPAC'27
import type { Speaker } from './types';

export const mc6Speakers: Speaker[] = [
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
    schedule: { date: "2027-05-25", startTime: "09:00", endTime: "09:30", room: "Grand Riverview Ballroom B" },
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
    schedule: { date: "2027-05-27", startTime: "11:00", endTime: "11:30", room: "Grand Riverview Ballroom A" },
  },
  {
    id: "yoshinori-hashimoto",
    name: "Yoshinori Hashimoto",
    affiliation: `High Energy Accelerator Research Organization`,
    bio: ` `,
    type: "invited",
    title: `Advanced beam halo diagnostics for MW-class proton accelerators with a wide-dynamic-range profile monitor`,
    abstract: `Accurate beam halo diagnostics and effective halo collimation are essential for modern MW-class high-intensity proton accelerators. To address this challenge, J-PARC has developed an advanced beam halo monitor capable of measuring both the beam core and halo with a dynamic range of six orders of magnitude. The first unit was installed in the 3-GeV injection beam transport line to measure the halo of the beam transported to the J-PARC main ring (MR). The system combines optical transition radiation from a thin titanium foil for the beam core with fluorescence from a chromium-doped alumina screen, enabling halo diagnostics over a relative beam intensity range of 10^-3 to 10^-5.
A second unit will be installed in the J-PARC MR in 2026 to measure the injected beam for about 20 turns. Combined measurements with the upstream monitor will allow phase-space evaluation of beam halo before and after injection and detailed studies of halo collimation and beam halo dynamics.
Based on this technology originally developed at J-PARC, the J-PARC group has led the development of a halo diagnostic system for the FNAL 8-GeV injection beam within US-Japan collaboration.
The presentation will highlight these developments and their impact on halo control in MW-class proton accelerators.`,
    classification: "MC6",
    session: {},
    schedule: { date: "2027-05-26", startTime: "11:00", endTime: "11:30", room: "Grand Riverview Ballroom A" },
  },
];
