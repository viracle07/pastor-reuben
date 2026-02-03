"use client"
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

const page = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            sessionStorage.setItem("adminToken", data.token);
            router.push("/admin");
        } else {
            alert(data.message);
        }
    }

    return (
        <main className="h-screen bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat ">
            <div className='relative px-4 h-screen  flex items-center justify-center'>
                {/* Background video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://res.cloudinary.com/du5odjbs0/video/upload/v1769470442/bg1_nmfkjt.mp4"
                    autoPlay
                    loop
                    muted
                />

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#0A2342]/75"></div>

                <div className=' relative z-10 bg-[#0A2342]  animate-[slideIn_.5s_ease-out]  p-15 space-y-5 rounded-lg shadow-lg shadow-white/50'>
                    <h1 className='text-yellow-400 '>Input email and password to login as an admin</h1>
                    <form onSubmit={handleLogin} className='text-white space-y-5'>
                        <div className='flex flex-col'>
                            <label>Email</label>
                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)} className='border rounded-md p-1' type="email" />
                        </div>

                        <div className='flex flex-col'>
                            <label>Password</label>
                            <input value={password}
                                onChange={(e) => setPassword(e.target.value)} className='border rounded-md p-1' type="text" />
                        </div>

                        <div className='flex items-center justify-end'>
                            <button className='border px-3 py-1 text-black font-semibold bg-yellow-400 rounded-md cursor-pointer'>Login</button>
                        </div>

                    </form>
                </div>
            </div>

        </main>
    )
}

export default page
