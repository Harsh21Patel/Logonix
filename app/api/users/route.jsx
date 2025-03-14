import { db } from "@/configs/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Received request body:", body);

        const { userEmail, userName } = body;

        if (!userEmail || !userName) {
            console.error("❌ Missing required fields:", { userEmail, userName });
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const docRef = doc(db, "users", userEmail);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("✅ User already exists:", docSnap.data());
            return NextResponse.json(docSnap.data());
        } else {
            const data = { name: userName, email: userEmail, credits: 5 };
            await setDoc(docRef, data);
            console.log("✅ New user saved:", data);
            return NextResponse.json(data);
        }
    } catch (error) {
        console.error("❌ Error in API route:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
