// MC8: Applications of Accelerators, Engagement with Industry, Technology Transfer and Outreach — invited speakers for IPAC'27
import type { Speaker } from './types';

export const mc8Speakers: Speaker[] = [
  {
    id: "wei-lu",
    name: "Wei Lu",
    affiliation: `Institute of High Energy Physics`,
    bio: ` `,
    type: "invited",
    title: `Preclinical tumor control with a laser-accelerated high-energy electron radiotherapy prototype`,
    abstract: `Radiotherapy using very-high-energy electron (VHEE) beams (50-300 MeV) has attracted considerable attention due to its advantageous dose deposition characteristics, enabling deep penetration and easy manipulation by magnetic components. One promising approach to compactly delivering these high energy electron beams in a cost-effective manner is laser wakefield acceleration (LWFA), which offers ultra-strong accelerating gradients. However, the transition from this concept to a functional machine intended for tumor treatment remains elusive. Here we present the self-developed prototype for LWFA-based VHEE radiotherapy, exhibiting compactness (occupying less than 5 m2) and long-term operational stability (validated over a period of one month). Subsequently, we employ this device to irradiate a tumor implanted in a mouse model. Following a dose delivery of 5.8 ± 0.2 Gy with precise tumor conformity, all irradiated mice exhibit pronounced control of tumor growth. For comparison, this tumor-control efficacy is similar to that achieved using commercial X-ray radiotherapy equipment operating at equivalent doses. These results demonstrate a compact and stable laser-driven VHEE system dedicated for preclinical studies involving small animal models and its promising prospects for future clinical translation in cancer therapy.`,
    classification: "MC8",
    session: {},
    schedule: { date: "2027-05-26", startTime: "14:00", endTime: "14:30", room: "Grand Riverview Ballroom B" },
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
    schedule: { date: "2027-05-26", startTime: "14:30", endTime: "15:00", room: "Grand Riverview Ballroom B" },
  },
];
