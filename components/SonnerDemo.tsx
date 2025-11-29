"use client"

import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"

export function SonnerDemo() {
  return (
    <>
    <Toaster 
    position="bottom-right"
    richColors
    expand={true}
     />
    <Button
      variant="outline"
      onClick={() =>
        toast.success("Event has been created")
      }
          
        
    >
      Show Toast
    </Button>
    </>
  )
}
