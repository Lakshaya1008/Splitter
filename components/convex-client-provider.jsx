"use client";

import { ConvexReactClient } from "convex/react";
import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useEffect } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }) {
  useEffect(() => {
    console.log("🔍 Convex Client Debug:", {
      convexUrl: process.env.NEXT_PUBLIC_CONVEX_URL,
      clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      clerkIssuerDomain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      hasConvexClient: !!convex,
      isProduction: process.env.NODE_ENV === 'production',
    });
  }, []);

  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
