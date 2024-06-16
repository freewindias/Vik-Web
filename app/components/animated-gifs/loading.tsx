"use client"

import React from "react";
import Lottie from "lottie-react";
import loading from "@/public/animate/loading.json"

export default function Loading(){
    return (
        <div>
            <Lottie animationData={loading} loop={true} />
        </div>
    );
}