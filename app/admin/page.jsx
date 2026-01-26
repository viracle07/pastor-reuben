"use client";
import React, { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { IoTrashSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const [processing, setProcessing] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [loading, setLoading] = useState(true);

    // modal state
    const [open, setOpen] = useState(null);

    const handleOpen = (id) => setOpen(id);
    const handleClose = () => setOpen(null);


   

    // ADMIN VERIFY
    useEffect(() => {
        const token = sessionStorage.getItem("adminToken");

        if (!token) {
            router.push("/admin/login");
            return;
        }

        async function verify() {
            const res = await fetch("/api/admin/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            });

            if (!res.ok) {
                sessionStorage.removeItem("adminToken");
                router.push("/admin/login");
            } else {
                setProcessing(false);
            }
        }

        verify();
    }, []);

    // fetch feedback when verified
    useEffect(() => {
        if (!processing) fetchFeedback();
    }, [processing]);

    const fetchFeedback = async () => {
        const arr = [];
        const snapshot = await getDocs(collection(db, "feedback"));

        snapshot.forEach((doc) => {
            arr.push({ id: doc.id, ...doc.data() });
        });

        setFeedback(arr);
        setLoading(false);
    };

    // DELETE ONE FEEDBACK
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "feedback", id));
        setFeedback((prev) => prev.filter((item) => item.id !== id));
        
    };

    if (processing)
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <p>Loading admin...</p>
            </div>
        );

    return (
        <main className="min-h-dvh">
            <div className="lg:px-10 px-4 py-10">
                <h1 className="text-center text-2xl font-bold">Feedbacks</h1>
                <div className="border-b w-auto pt-5 border-gray-300 shadow-b shadow-md"></div>

                <div className="py-10">
                    {loading ? (
                        <div className="h-[80vh] flex items-center justify-center">
                            <BiLoaderCircle className="text-4xl animate-spin" />
                        </div>
                    ) : (
                        <section>
                            <div className="flex flex-col">
                                <div className="lg:grid space-y-7 grid-cols-3 gap-8">
                                    {feedback.map((feed) => (
                                        <div
                                            key={feed.id}
                                            className="bg-gray-100/50  animate-[slideIn_.5s_ease-out] border border-gray-300 p-5 shadow-md rounded-sm"
                                        >
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between text-gray-800 text-sm font-semibold">
                                                    <p>{feed.name}</p>
                                                    <p>{feed.date}</p>
                                                </div>

                                                <div className="flex items-center justify-between text-xs text-gray-800">
                                                    <p>{feed.email}</p>
                                                    <p>{feed.phoneNumber}</p>
                                                </div>

                                                <div className="flex items-center text-sm text-gray-800">
                                                    <span className="flex gap-2">
                                                        <p className="font-semibold">Message:</p>
                                                        <p>{feed.message}</p>
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between text-sm text-gray-800">
                                                    <span className="flex items-center gap-2">
                                                        <p className="font-semibold">Subject:</p>
                                                        <p>{feed.subject}</p>
                                                    </span>

                                                    {/* delete button */}
                                                    <button onClick={() => handleOpen(feed.id)}>
                                                        <IoTrashSharp className="cursor-pointer" />
                                                    </button>

                                                    {open === feed.id && (
                                                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                                            <div
                                                                className="bg-white p-5 rounded-md shadow-lg w-72
                       animate-[slideIn_.5s_ease-out]"
                                                            >
                                                                <h2 className="font-semibold text-gray-800 text-lg mb-4">
                                                                    Delete Feedback?
                                                                </h2>

                                                                <div className="flex justify-between">
                                                                    <button
                                                                        onClick={() => handleDelete(feed.id)}
                                                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                                                    >
                                                                        Yes
                                                                    </button>

                                                                    <button
                                                                        onClick={handleClose}
                                                                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                                                    >
                                                                        No
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Page;
