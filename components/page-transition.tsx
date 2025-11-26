"use client"

import { ReactNode, useEffect, useState } from "react"

interface PageTransitionProps {
  children: ReactNode
  currentPage: string
}

export default function PageTransition({ children, currentPage }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    setIsVisible(false)
    
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsVisible(true)
    }, 150)

    return () => clearTimeout(timer)
  }, [currentPage, children])

  return (
    <div className="relative overflow-hidden">
      <div
        className={`transition-all duration-500 ease-in-out transform ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95"
        }`}
      >
        {displayChildren}
      </div>
    </div>
  )
}