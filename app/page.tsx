'use client';
import { SonnerDemo } from "@/components/SonnerDemo";
import { Button } from "@/components/ui/button";
import { getPost } from "./api/postApi";
import { useEffect } from "react";
import Posts from "@/components/Posts";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getPost();
        console.log("Data fetched from API:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
    {/* <nav className="  items-center justify-center flex border-b-1 border-black  py-2 shadow-2xs fixed top-0 w-full bg-white z-10">
<  Navbar />
    </nav> */}
    
    <main>  Hello world!</main>
    <a href="Contact"  rel="noopener noreferrer">Contact Us</a>
    <SonnerDemo />
    <Button variant="outline" asChild>
      <a
        href="https://wa.me/916201167902"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
      </a>
    </Button>

    <Posts />


    </>
  );
}
