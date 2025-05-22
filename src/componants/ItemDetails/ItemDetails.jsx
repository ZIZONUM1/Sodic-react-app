import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "../Services/Slider/Slider";
import { data } from "../../data";

export default function ItemDetails() {
  const { id } = useParams();
  const unit = data.find((unit) => unit.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);
const customImagesForSecondSlider = [
  require("../../assets/Karmell/img71.jpg"),
  require("../../assets/Karmell/img67.jpg"),
  require("../../assets/Karmell/img55.jpg"),
  require("../../assets/Karmell/img39.jpg"),
  require("../../assets/Karmell/img32.jpg"),
  require("../../assets/Karmell/img261.jpg"),
  require("../../assets/Karmell/img264.jpg"),
  
];
  if (!unit) {
    return <p className="text-center my-5">العقار غير موجود</p>;
  }

  return (
    <>
      {unit.id === 0 ? (
        <div className="container my-5" dir="rtl">
          {/* سلايدر الصور */}
          <Slider images={unit.images} />

          {/* وصف الكمباوند */}
          <div className="bg-white p-4 rounded shadow-sm my-4 text-start">
            <h2 className="mb-3">{unit.name}</h2>
            <p className="text-muted">
          <span className="fw-bold text-black text-center fw-bolder">
            Ogami is a luxury coastal project located in Ras El Hekma on Egypt’s North Coast, just 83 km from Marsa Matrouh and near key hubs like El Alamein Airport and Sidi Abdel Rahman. Inspired by Japan’s Ogami Island, it blends Mediterranean charm with Japanese serenity.
          </span>
          <br />
          <span className="fw-bold text-black">Key Features:</span>
          <br />
          - Cascading architecture with panoramic sea views. <br />
          - 800m multi-layered beach with elevated dining, curated furniture & beach gym. <br />
          - 5 themed islands: <br />
          &nbsp;&nbsp;• Social Island: Relaxing sea-view zones. <br />
          &nbsp;&nbsp;• Playful Island: Clubhouse with circular & infinity pools. <br />
          &nbsp;&nbsp;• Wellness Island: Yoga decks & wellness facilities. <br />
          &nbsp;&nbsp;• Serene Island: Lazy lagoons with in-water seating. <br />
          &nbsp;&nbsp;• Immersive Island: Sports courts (padel, tennis, football). <br />
          - 120,000 m² of swimmable lagoons. <br />
          - Beachtown: Boutiques, cafés, organic bakeries & beachwear shops. <br />
          - Retail Village: Daytime shopping, nightlife spots & gourmet dining. <br />
          - Nobu partnership: Hotel, residences & restaurant with Japanese-modern design. <br />
          - Central Clubhouse: Social core with pools & sea views. <br />
          - Wellness Center: Sea-view fitness & yoga spaces. <br />
          - Sports zone with Racquet Club & 5-a-side pitch. <br />
          <br />
          <span className="fw-bold text-black">Villas:</span><br />
          • Beachside Villa (5BR): 490 m², 5 ensuites + maid/driver rooms. <br />
          • Seascape Villa (4BR): 355 m², terraces, maid/driver rooms. <br />
          • Dusk Villa (4BR): 310 m², 2 floors + outdoor bathroom. <br />
          • Bayview Villa (3BR): 254 m², smart layout & storage. <br />
          • Rays Twin Villa (3–4BR): 268 m², flexible spaces. <br />
          • Sunset Townhome Middle/Corner (3BR): 226–233 m², storage + maid’s room. <br />
          <br />
          <span className="fw-bold text-black">Interior:</span><br />
          Natural materials, soft tones, large sea-facing windows, and refined details reflect calming Japanese-Mediterranean aesthetics.<br />
          Designed by DLR Group with only a 15% building footprint to maximize green views and open space. Ogami offers a modern coastal sanctuary with world-class amenities and a focus on wellness, leisure, and barefoot luxury.
          <br /><br />
          Website: <a href="https://sodic.com" target="_blank" rel="noopener noreferrer">sodic.com</a> | Hotline: 16220
        </p>
          </div>

          {/* الموقع */}
          <div className="mb-4">
            <h3 className="mb-3 text-center">LOCATION 📍</h3>
            <iframe
              title="موقع العقار"
              src={unit.mapEmbedUrl}
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* زر اتصل بنا */}
          <Link to="/contactus">
            <div className="text-center mb-5">
              <button type="button" className="btn btn-primary btn-lg">
                Contact Us
              </button>
            </div>
          </Link>
        </div>
      ) : <>    <div className="container my-5" dir="rtl">
          {/* سلايدر الصور */}
          <Slider images={unit.images} />

          {/* وصف الكمباوند */}
          <div className="bg-white p-4 rounded shadow-sm my-4 text-start">
            <h2 className="mb-3">{unit.name}</h2>
            <p className="text-muted">
  <span className="fw-bold text-black">Location and Concept:</span><br />
  New Zayed: Vye villas are located in the heart of New Zayed...<br />
  Living Concept: Vye villas offer a modern lifestyle inspired by contemporary living...<br /><br />

  <span className="fw-bold text-black">Key Features:</span><br />
  - <strong>The Drive:</strong> A wide road surrounded by lush greenery...<br />
  - <strong>The Walk:</strong> A 3.7 km pedestrian and bike path...<br />
  - <strong>Clubhouse by Club S:</strong> An innovative sports club...<br />
  - <strong>Nova Park:</strong> A central park connecting all Vye districts...<br />
  - <strong>WHE Town (Business and Community Center):</strong> Offers flexible indoor spaces...<br />
  - <strong>SOL Homes:</strong> Nature-inspired homes with interactive open spaces...<br />
  &nbsp;&nbsp;• Feature spacious terraces for family time.<br />
  &nbsp;&nbsp;• Include a hobbies room with separate entrance...<br />
  &nbsp;&nbsp;• Solar-powered for sustainability.<br /><br />

  <span className="fw-bold text-black">Residential Unit Details:</span><br />
  <strong>Tw01 - Minimalistic - R:</strong> Family room, study, nanny room... Total: 315.4 sqm<br />
  <strong>Tw01 - Minimalistic - L:</strong> Family room, nanny room... Total: 304.8 sqm<br />
  <strong>Tw01 - Arabian - R:</strong> Family room, study, nanny room... Total: 314.9 sqm<br />
  <strong>Tw01 - Arabian - L:</strong> Family room, nanny room... Total: 303.3 sqm<br /><br />

  <strong>TH01 - Minimalistic:</strong><br />
  &nbsp;&nbsp;• Corner Unit: 183.3 sqm<br />
  &nbsp;&nbsp;• Middle Unit: 180.4 sqm<br />

  <strong>TH01 - Arabian:</strong><br />
  &nbsp;&nbsp;• Corner Unit: 184.8 sqm<br />
  &nbsp;&nbsp;• Middle Unit: 181.8 sqm<br /><br />

  <strong>TH02 - Minimalistic:</strong><br />
  &nbsp;&nbsp;• Corner Unit: 198.0 sqm<br />
  &nbsp;&nbsp;• Middle Unit: 196.2 sqm<br />

  <strong>TH02 - Arabian:</strong><br />
  &nbsp;&nbsp;• Middle Unit: 202.1 sqm<br /><br />

  <strong>TH03 - Minimalistic:</strong><br />
  &nbsp;&nbsp;• Corner Unit: 297.8 sqm<br />
  &nbsp;&nbsp;• Middle Unit: 292.8 sqm<br />

  <strong>TH03 - Arabian:</strong><br />
  &nbsp;&nbsp;• Corner Unit: 305.9 sqm<br />
  &nbsp;&nbsp;• Middle Unit: 300.5 sqm<br /><br />

  <strong>Sales Centers:</strong><br />
  - Sheikh Zayed: Km 38 Cairo-Alexandria Desert Road.<br />
  - New Cairo: Southern 90 Street, Plot #67, First Section City Centre.
</p>

          </div>

          {/* الموقع */}
          <div className="mb-4">
            <h3 className="mb-3 text-center">LOCATION 📍</h3>
            <iframe
              title="موقع العقار"
              src={unit.mapEmbedUrl}
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* زر اتصل بنا */}
          <Link to="/contactus">
            <div className="text-center mb-5">
              <button type="button" className="btn btn-primary btn-lg">
                Contact Us
              </button>
            </div>
          </Link>
        </div>
            <div className="container my-5" dir="rtl">
          {/* سلايدر الصور */}
          <Slider images={customImagesForSecondSlider} />

          {/* وصف الكمباوند */}
          <div className="bg-white p-4 rounded shadow-sm my-4 text-start">
            <h2 className="mb-3">SODIC - Karmell</h2>
           <p className="text-muted">
  <span className="fw-bold text-black">Location and Concept:</span><br />
  New Zayed: Karmell is situated in a dynamic and growing area offering seamless connectivity...<br />
  Living Concept: Designed to deliver a sophisticated and convenient lifestyle...<br /><br />

  <span className="fw-bold text-black">Key Features:</span><br />
  - <strong>The Drive:</strong> A scenic pathway with picturesque greenery, connecting residents to essential amenities.<br />
  - <strong>The Walk:</strong> A 3.7 km pedestrian and cycling path promoting an active lifestyle, safely connecting to the clubhouse.<br />
  - <strong>Karmell Hub:</strong> A vibrant mixed-use center with a supermarket, coffee shop, ice cream store, and more.<br />
  - <strong>The Downtown Center:</strong> European-inspired street life with boutiques, galleries, bakeries, and a vibrant ambiance.<br />
  - <strong>Karmell Grove Park:</strong> Nature-focused park with playgrounds, food trucks, outdoor fitness, and gardening areas.<br />
  - <strong>Community Club (by Club S):</strong> Designed by L35, offering wellness programs and recreational amenities.<br />
  - <strong>Jogging and Cycling Track:</strong> A 3.7 km wellness track for all fitness levels.<br />
  - <strong>Management by EDARA:</strong> Full service community management for hassle-free living.<br /><br />

  <span className="fw-bold text-black">Residential Unit Details:</span><br />
  The document references "APK.06" with Ground to Third Floor layouts, though specific unit details aren't included.<br />
  Karmell O1 offers houses and apartments that blend elegance with proximity to schools, recreation, and the Karmell Hub.<br /><br />

  
  <strong>Sales Centers:</strong><br />
  - Sheikh Zayed: Km 38 Cairo-Alexandria Desert Road.<br />
  - New Cairo: Southern 90 Street, Plot #67, First Section City Centre, New Cairo.<br /><br />

  <span className="fw-bold text-black">Additional Notes:</span><br />
  The project emphasizes a fully integrated lifestyle with schools, recreation, and retail within walking distance, ideal for modern families and professionals.<br />
  Repetitive or fragmented text found in the original OCR (e.g., “THE ESTATES”, “B”, “1”) were excluded as non-meaningful artifacts.
</p>

          </div>

          {/* الموقع */}
          <div className="mb-4">
            <h3 className="mb-3 text-center">LOCATION 📍</h3>
            <iframe
              title="موقع العقار"
              src={unit.mapEmbedUrl}
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* زر اتصل بنا */}
          <Link to="/contactus">
            <div className="text-center mb-5">
              <button type="button" className="btn btn-primary btn-lg">
                Contact Us
              </button>
            </div>
          </Link>
        </div></>}
    </>
  );
}
