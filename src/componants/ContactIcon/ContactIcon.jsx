import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingIcons = () => {
  const phoneNumber = "01016535608"; // رقم مصري يبدأ بـ 0

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1050,
      }}
      className="d-flex flex-column align-items-center gap-2"
    >
      
      <a
        href={`tel:${phoneNumber}`}
        className="bg-white border rounded-circle shadow p-3 d-flex align-items-center justify-content-center"
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <FaPhone size={20} className="text-success" />
      </a>

      <a
        href={`https://wa.me/20${phoneNumber.replace(/^0/, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-success text-white rounded-circle shadow p-3 d-flex align-items-center justify-content-center"
        style={{ textDecoration: "none" }}
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default FloatingIcons;
