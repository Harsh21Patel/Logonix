"use client";
import React, { useEffect, useState } from "react";
import Header from "./_components/Header";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { UserDetailContex } from "./_context/UserDetailContext";

function Provider({ children }) {
    const { user } = useUser();
    const [userDetail,setUserDetail]= useState();
    useEffect(() => {
        const CheckUserAuth = async () => {
            if (!user) return;

            try {
                const result = await axios.post("/api/users", {
                    userName: user?.fullName,
                    userEmail: user?.primaryEmailAddress?.emailAddress
                });
                console.log("User response:", result.data);
                setUserDetail(result.data);
            } catch (error) {
                console.error("Error saving user:", error.response?.data || error.message);
            }


        };

        if (user) {
            CheckUserAuth();
        }
    }, [user]);

    return (
        <div>
            <UserDetailContex.Provider value={{userDetail,setUserDetail}}>
            <Header />
            <div className="px-10 lg:px-32 xl:px-48 2xl:px-56">{children}</div>
            </UserDetailContex.Provider>
        </div>
    );
}

export default Provider;
