import { AILogoPrompt } from "@/configs/AiModel";
import { NextResponse } from "next/server";
import axios from "axios";
import { setDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";

export async function POST(req) {
  const { prompt, email, title, desc, userCredits } = await req.json();

  try {
    // Generate AI text prompt for Logo
    const AiPromptResult = await AILogoPrompt.sendMessage(prompt);
    const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt;
    console.log("Generated AI Prompt:", AIPrompt);

    // Generate Logo from Hugging Face
    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA",
      { inputs: AIPrompt }, // ✅ Wrap in an object
      {
        headers: {
          Authorization: "Bearer " + process.env.HUGGING_FACE_API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );

    console.log("Hugging Face Response Status:", response.status);
    
    if (response.status !== 200) {
      return NextResponse.json({ error: "Failed to generate image." });
    }

    // Convert binary data to base64 image
    const buffer = Buffer.from(response.data, "binary");
    const base64Image = buffer.toString("base64");
    const base64ImageWithMime = `data:image/png;base64,${base64Image}`;

    console.log("Generated Image:", base64ImageWithMime.substring(0, 50) + "...");

    // Save logo to Firebase
    const logoId = Date.now().toString(); // Unique ID for each logo
    await setDoc(doc(db, "users", email, "logos", logoId), {
      image: base64ImageWithMime,
      title: title,
      desc: desc,
    });

// Ensure credits don't go negative
const newCredits = Math.max(0, Number(userCredits) - 1);

const userDocRef = doc(db, "users", email);
await updateDoc(userDocRef, {
  credits: newCredits,
});


    return NextResponse.json({ image: base64ImageWithMime });

  } catch (e) {
    console.error("Error generating image:", e);
    return NextResponse.json({ error: e.message || "Unknown error" });
  }
}
