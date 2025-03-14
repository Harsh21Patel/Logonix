"use client";
import React, { useState, useEffect, Suspense } from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoDesc from "./_components/LogoDesc";
import LogoDesigns from "./_components/LogoDesigns";
import LogoPalette from "./_components/LogoPalette";
import LogoIdea from "./_components/LogoIdea";
import PricingModel from "./_components/PricingModel";

function CreateLogo() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const onHandleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    useEffect(() => {
        console.log("Updated formData:", formData);
    }, [formData]);

    return (
        <div className="mt-28 p-10 border rounded-xl 2xl:mx-72">
            {step === 1 && <LogoTitle onHandleInputChange={v => onHandleInputChange("title", v)} formData={formData} />}
            {step === 2 && <LogoDesc onHandleInputChange={v => onHandleInputChange("desc", v)} formData={formData} />}
            {step === 3 && <LogoPalette onHandleInputChange={v => onHandleInputChange("palette", v)} formData={formData} />}
            {step === 4 && <LogoDesigns onHandleInputChange={v => onHandleInputChange("design", v)} formData={formData} />}
            {step === 5 && <LogoIdea onHandleInputChange={v => onHandleInputChange("idea", v)} formData={formData} />}
            {step === 6 && <PricingModel onHandleInputChange={v => onHandleInputChange("pricing", v)} formData={formData} />}

            <div className="flex items-center justify-between mt-10">
                {step !== 1 && (
                    <Button variant="outline" onClick={() => setStep(step - 1)}>
                        <ArrowLeft /> Previous
                    </Button>
                )}
                {step !== 6 && (
                    <Button onClick={() => setStep(step + 1)}>
                        <ArrowRight /> Continue
                    </Button>
                )}
            </div>
        </div>
    );
}

// Wrap in Suspense for proper rendering
export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateLogo />
        </Suspense>
    );
}
