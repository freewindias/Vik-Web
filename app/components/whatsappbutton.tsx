import React from "react";
import Image from "next/image";

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
      <Image
        src="/whatsapp-icon.svg" // Add an appropriate WhatsApp icon image in the public folder
        alt="WhatsApp"
        width={48}
        height={48}
      />
    </a>
  );
};

export default WhatsAppButton;
