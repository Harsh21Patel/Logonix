"use client"
import React, { useContext, useEffect, useState } from 'react';
import { UserDetailContex } from '../_context/UserDetailContext';
import Prompt from '@/app/_data/Prompt';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { useRouter } from "next/navigation"; 
import { Loader2 } from 'lucide-react';

function GenerateLogo() {
    const { userDetail, setuserDetail } = useContext(UserDetailContex);
    const [formData, setFormData] = useState();
    const [loading, setLoading] = useState(false);
    const [logoImage, setLogoImage] = useState();
    const searchParams = useSearchParams();
    const modelType = searchParams.get('type');
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined' && userDetail?.email) {
            const storage = localStorage.getItem('formData');
            if (storage) {
                setFormData(JSON.parse(storage));
                console.log(JSON.parse(storage));
            }
        }
    }, [userDetail]);

    useEffect(() => {
        if (formData?.title) {
            GenerateAILogo();
        }
    }, [formData]);

    const GenerateAILogo = async () => {
        if (modelType === "Free" && userDetail?.credits <= 0) {
            toast.error("❌ Not enough credits! Please recharge. ⚡", { 
                duration: 5000, 
                position: "top-right",
                style: { background: "red", color: "white", fontWeight: "bold" }
            });
            router.push("/dashboard");
            return;
        }
        
        if (modelType === "Premium") {
            toast.error("🚫 Premium Model is not available right now! Try the Free Model. 🎉", { 
                duration: 5000, 
                position: "top-right",
                style: { background: "red", color: "white", fontWeight: "bold" }
            });
            router.push("/create");
            return;
        }
        
        if (modelType !== "Free" && modelType !== "Premium") {
            toast.error("😎 Hey, don't be oversmart! Play fair. ⚠️", { 
                duration: 5000, 
                position: "top-right",
                style: { background: "red", color: "white", fontWeight: "bold" }
            });
            router.push("/create");
            return;
        }
        

        setLoading(true);
        const PROMPT = Prompt.LOGO_PROMPT
            .replace('{logoTitle}', formData?.title)
            .replace('{logoDesc}', formData?.desc)
            .replace('{logoColor}', formData?.palette)
            .replace('{logoIdea}', formData?.idea)
            .replace('{logoDesign}', formData?.design?.title)
            .replace('{logoPrompt}', formData?.design?.prompt);

        console.log(PROMPT);

        const result = await axios.post('/api/ai-logo-model', {
            prompt: PROMPT,
            email: userDetail?.email,
            title: formData?.title,
            desc: formData?.desc,
            userCredits: userDetail?.credits,
        });

        console.log(result?.data);
        setLogoImage(result.data?.image);
        setLoading(false);
    };

    const onDownload = () => {
        const imageWindow = window.open();
        imageWindow.document.write(`<img src="${logoImage}" alt="Base64 Image" />`);
    };

    return (
        <div className='flex items-center mt-24 flex-col gap-5'>
            <h2 className='text-primary text-center text-3xl font-bold'>
                {loading ? "Your logo is being created, please wait..." : "Your logo is created!"}
            </h2>
            {loading && <Loader2 className='animate-spin text-primary w-30 h-30 mt-4' />}
            {!loading && logoImage && (
                <div className='mt-1'>
                    <Image src={logoImage} alt="logo" width={400} height={400} className='rounded-xl' />
                    <div className='mt-4 flex items-center justify-between gap-5'>
                        <Button onClick={onDownload}> <DownloadIcon /> Download </Button>
                        <Link href={'/dashboard'}> 
                            <Button variant="outline"> <LayoutDashboard /> Dashboard </Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GenerateLogo;
