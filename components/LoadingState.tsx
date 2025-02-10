"use client";

import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function LoadingState({ children} : {children: React.ReactNode}) {
  return (
    <>
      <ClerkLoading>
        <div className="h-screen w-screen flex flex-col items-center text-sm justify-center font-mono p-4 bg-slate-100">
          Loading...
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        {children} 
      </ClerkLoaded>
    </>
  );
}