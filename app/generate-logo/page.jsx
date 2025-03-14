"use client";
import React, { Suspense } from "react";
import GenerateLogo from "./GenerateLogo";

function GenerateLogoPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GenerateLogo />
        </Suspense>
    );
}

export default GenerateLogoPage;
