"use client"

import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Lightbulb, LightbulbOff, X } from "lucide-react"
import CursorGlow from "@/components/cursor-glow"

export function LightSwitch() {
  const pathname = usePathname()
  const [isEnabled, setIsEnabled] = useState(true)
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasSeenTooltip, setHasSeenTooltip] = useState(false)
  const [manuallyToggledOff, setManuallyToggledOff] = useState(false)
  const isWorkPage = pathname?.startsWith("/work/") ?? false

  useEffect(() => {
    if (isWorkPage) {
      setIsEnabled(false)

      if (hasSeenTooltip) {
        setShowTooltip(false)
        return
      }

      const dismissed = window.localStorage.getItem("cursor-glow-tooltip-dismissed")
      setShowTooltip(!dismissed)
      return
    }

    setShowTooltip(false)
    if (!manuallyToggledOff) {
      setIsEnabled(true)
    }
  }, [isWorkPage, hasSeenTooltip, pathname, manuallyToggledOff])

  const handleDismiss = () => {
    setShowTooltip(false)
    setHasSeenTooltip(true)
    window.localStorage.setItem("cursor-glow-tooltip-dismissed", "true")
  }

  const tooltipMessage = useMemo(
    () =>
      "I've automatically turned off the cursor glow for easy reading. Feeling a little dark in here? Turn the cursor glow back on here!",
    []
  )

  return (
    <>
      <CursorGlow isEnabled={isEnabled} />

      {showTooltip ? (
        <div className="fixed bottom-24 right-5 z-[3] w-[min(320px,calc(100vw-2rem))] rounded-2xl border border-border/70 bg-background/95 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_28px_rgba(114,9,183,0.28)] backdrop-blur">
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Dismiss tooltip"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="pr-6 text-sm leading-relaxed text-foreground">{tooltipMessage}</p>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          setIsEnabled((value) => {
            const nextValue = !value
            setManuallyToggledOff(!nextValue)
            return nextValue
          })
        }}
        aria-pressed={isEnabled}
        className="fixed bottom-5 right-5 z-[2] inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur transition-colors hover:border-primary hover:text-primary"
      >
        {isEnabled ? <Lightbulb className="h-4 w-4" /> : <LightbulbOff className="h-4 w-4" />}
        <span>{isEnabled ? "Light on" : "Light off"}</span>
      </button>
    </>
  )
}
