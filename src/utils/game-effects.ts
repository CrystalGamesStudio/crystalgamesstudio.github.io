import { cn } from "./helpers"

export const pulseAnimation = "animate-[pulse_2s_ease-in-out_infinite]"
export const glowAnimation = "animate-[glow_1.5s_ease-in-out_infinite]"
export const pixelBorder = "border-2 border-gray-800 [box-shadow:4px_4px_0_0_rgba(0,0,0,0.8)]"
export const gameButton = "transition-all active:translate-y-1 active:[box-shadow:0_0_0_0_rgba(0,0,0,0.8)]"
export const pixelateAnimation = "animate-[pixelate_2s_ease-in-out_infinite]"
export const floatAnimation = "animate-[float_3s_ease-in-out_infinite]"
export const shineAnimation = "animate-[shine_2s_linear_infinite]"
export const pixelCard = cn(
  "relative overflow-hidden",
  "before:absolute before:inset-0",
  "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
  "before:translate-x-[-200%] before:animate-[shine_3s_ease-in-out_infinite]"
)
export const neonText = "text-shadow-[0_0_5px_theme(colors.indigo.400),0_0_20px_theme(colors.indigo.600)]"

// New effects for GoodBuySection
export const energyField = cn(
  "relative overflow-hidden",
  "after:absolute after:inset-0",
  "after:bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)]",
  "after:animate-[energyPulse_4s_ease-in-out_infinite]"
)

export const glitchText = "animate-[glitch_3s_infinite]"

export const cyberpunkCard = cn(
  pixelBorder,
  "relative bg-gradient-to-br from-gray-900 to-gray-800",
  "before:absolute before:inset-0",
  "before:bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.2)_50%,transparent_75%)]",
  "before:bg-[length:250%_250%]",
  "before:animate-[cyberpunkGlow_8s_linear_infinite]"
) 