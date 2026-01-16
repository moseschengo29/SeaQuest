// app/data/constants.ts
import lobsterImg from "../../public/assets/work3.png"; 
import crabImg from "../../public/assets/work5.jpeg"; 
import work1 from "../../public/assets/work1.png";
import work2 from "../../public/assets/work2.png";
import work3 from "../../public/assets/work3.png";
import work5 from "../../public/assets/work5.jpeg";
import work6 from "../../public/assets/work6.jpeg";
import work7 from "../../public/assets/work7.jpeg";
import work8 from "../../public/assets/work8.jpeg";
import work4 from "../../public/assets/work4.jpeg";
import work9 from "../../public/assets/work9.jpeg";
import work10 from "../../public/assets/work10.jpeg";
import work11 from "../../public/assets/work11.jpeg";

// --- ASSET IMPORTS WRAPPED IN DATA ---
export const FLEET_DATA = [
  { name: "KASKAZI II", type: "38ft Bertram", img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop" },
  { name: "BLUE MARLIN", type: "45ft Hatteras", img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop" },
  { name: "SIMBA", type: "35ft Sportfisher", img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop" }
];

export const REVIEWS = [
  { text: "SeaQuest consistently supplies lobsters and crabs that meet our highest standards. The freshness, handling, and reliability make them a trusted partner for our seafood operations.", author: "Executive Chef, Coastal Fine Dining Restaurant" },
  { text: "SeaQuest combines deep-sea expertise with a clear respect for sustainable practices. Their traceability and professionalism set them apart on the Kenyan coast.", author: "Seafood Export Partner" },
  { text: "From offshore harvest to delivery, SeaQuest operates with precision. Their consistency has helped us scale our offerings without compromising on quality.", author: "Procurement Manager, Hospitality Group" },
  { text: "SeaQuest proves that responsible fishing and premium seafood can coexist. Their approach protects the marine ecosystem while delivering outstanding product.", author: "Marine Conservation Advisor" },
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1974&auto=format&fit=crop", 
  work1.src,
  work2.src,
  work3.src,
  work5.src,
  work6.src,
  work4.src,
  work7.src,
  work8.src,
  work9.src,
  work10.src,
  work11.src
];

export const TARGET_SPECIES = [
  { name: 'Lobsters', img: lobsterImg },
  { name: 'Crabs', img: crabImg },
  { name: 'Deep Sea Crabs', img: crabImg },
];

export const FISHING_SPOTS = [
  { id: 1, name: "North Kenya Banks", x: 60, y: 20, depth: "300m - 1000m", fish: "Broadbill, Giant Lobster", desc: "Heavy current structure holding monster bottom fish." },
  { id: 2, name: "The Canyon", x: 75, y: 50, depth: "1500m+", fish: "Crabs", desc: "A steep drop-off where the giants patrol." },
  { id: 3, name: "Watamu Banks", x: 40, y: 60, depth: "80m - 200m", fish: "Sailfish", desc: "World famous for high-speed Sailfish runs." },
  { id: 4, name: "Malindi Rips", x: 50, y: 35, depth: "100m", fish: "Black Marlin", desc: "Turbulent water rich in baitfish." },
];

export const NAV_LINKS = [
  { name: 'About', id: 'about' },
  { name: 'Grounds', id: 'grounds' },
  { name: 'The Vessel', id: 'vessel' },
  { name: 'Testimonies', id: 'testimonies' },
  { name: 'The Catch', id: 'catch' },
  { name: 'Gallery', id: 'gallery' },
];

// src/utils/constants.ts
import masangMain from "../../public/assets/Vessel/img4.jpeg";
import masangBridge from "../../public/assets/Vessel/img3.jpeg";
import masangDeck from "../../public/assets/Vessel/img2.jpeg";
import masangStorage from "../../public/assets/Vessel/img1.jpeg";

export const MASANG_VIEWS = [
  { 
    title: "The Profile", 
    desc: "A 42ft custom-built deep sea predator, engineered for the turbulent waters of the North Kenya Banks.", 
    img: masangMain 
  },
  { 
    title: "Command Center", 
    desc: "Equipped with state-of-the-art Furuno sonar and Garmin GPS systems to track hauls at 1000m+ depths.", 
    img: masangBridge 
  },
  { 
    title: "Battle Station", 
    desc: "High-capacity deck fitted with Lee's outriggers and Shimano Tiagra 80s for the ultimate marlin hunt.", 
    img: masangDeck 
  },
  { 
    title: "Live Storage", 
    desc: "Oxygenated, temperature-controlled tanks designed to keep our premium lobster and crab catch at peak freshness.", 
    img: masangStorage 
  }
];