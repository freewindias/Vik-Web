import React from "react";

const WhatsAppButton = ({
  phoneNumber,
  message,
}: {
  phoneNumber: string;
  message: string;
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
      }}
    >
      <img
        src="/whatsapp-icon.svg" // Add an appropriate WhatsApp icon image in the public folder
        alt="WhatsApp"
        style={{ width: "48px", height: "48px" }}
      />
    </a>
  );
};

export default WhatsAppButton;
