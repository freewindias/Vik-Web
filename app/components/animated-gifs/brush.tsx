"use client"

import React from "react";
import Lottie from "lottie-react";
import brush from "@/public/animate/brush.json"

export default function Brush(){
    return (
        <div>
            <Lottie animationData={brush} loop={true} />
        </div>
    );
}