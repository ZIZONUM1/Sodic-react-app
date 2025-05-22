import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import FocusOnSelect from "../Services/Slider/Slider";
import { data } from "../../data";
import Slider from "../Services/Slider/Slider";

export default function ItemDetails() {
  const { id } = useParams();
  const unit = data.find((unit) => unit.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);

  if (!unit) {
    return <p className="text-center my-5">العقار غير موجود</p>;
  }

  return (
    <div className="container my-5" dir="rtl">
      {/* سلايدر الصور */}
      <Slider images={unit.images} />

      {/* وصف الكمباوند */}
      <div className="bg-white p-4 rounded shadow-sm my-4 text-start ">
        <h2 className="mb-3">{unit.name}</h2>
        <p className="text-muted"><span className="fw-bold text-black text-center fw-bolder">Ogami is a luxury coastal project located in Ras El Hekma on Egypt’s North Coast, just 83 km from Marsa Matrouh and near key hubs like El Alamein Airport and Sidi Abdel Rahman. Inspired by Japan’s Ogami Island, it blends Mediterranean charm with Japanese serenity.</span>
<br/>
 <span className="fw-bold text-black">Key Features:</span>
<span className="text-muted">
  - Cascading architecture with panoramic sea views.
- 800m multi-layered beach with elevated dining, curated furniture & beach gym.
- 5 themed islands:
  • Social Island: Relaxing sea-view zones.
  • Playful Island: Clubhouse with circular & infinity pools.
  • Wellness Island: Yoga decks & wellness facilities.
  • Serene Island: Lazy lagoons with in-water seating.
  • Immersive Island: Sports courts (padel, tennis, football).
- 120,000 m² of swimmable lagoons.
- Beachtown: Boutiques, cafés, organic bakeries & beachwear shops.
- Retail Village: Daytime shopping, nightlife spots & gourmet dining.
- Nobu partnership: Hotel, residences & restaurant with Japanese-modern design.
- Central Clubhouse: Social core with pools & sea views.
- Wellness Center: Sea-view fitness & yoga spaces.
- Sports zone with Racquet Club & 5-a-side pitch.

</span>
<br/>

<span className="fw-bold text-black">Villas:</span>

<span className="text-muted">• Beachside Villa (5BR): 490 m², 5 ensuites + maid/driver rooms.
• Seascape Villa (4BR): 355 m², terraces, maid/driver rooms.
• Dusk Villa (4BR): 310 m², 2 floors + outdoor bathroom.
• Bayview Villa (3BR): 254 m², smart layout & storage.
• Rays Twin Villa (3–4BR): 268 m², flexible spaces.
• Sunset Townhome Middle/Corner (3BR): 226–233 m², storage + maid’s room.</span>
<br/>
    
<span className="fw-bold text-black">Interior:</span>    
<span className="text-muted">Natural materials, soft tones, large sea-facing windows, and refined details reflect calming Japanese-Mediterranean aesthetics.

Designed by DLR Group with only a 15% building footprint to maximize green views and open space. Ogami offers a modern coastal sanctuary with world-class amenities and a focus on wellness, leisure, and barefoot luxury.

Website: sodic.com | Hotline: 16220</span>
</p>
      </div>

      {/* الموقع */}
      <div className="mb-4">
        <h3 className="mb-3 text-center">LOCATION📍</h3>
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
        <button
          type="button"
          className="btn btn-primary btn-lg"
         
        >
Contact Us     
   </button>
      </div>
     
     </Link>

      
    </div>
  );
}
