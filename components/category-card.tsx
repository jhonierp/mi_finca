"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

type CategoryCardProps = {
  title: string
  icon: React.ReactNode
  href: string
  color?: string
  hoverColor?: string
}

export function CategoryCard({
  title,
  icon,
  href,
  color = "bg-primary-button",
  hoverColor = "bg-primary-button/80",
}: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href}>
      <motion.div
        className={`${color} rounded-3xl flex flex-col items-center justify-center p-6 aspect-square transition-all duration-300 shadow-sm`}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          backgroundColor: hoverColor,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="mb-3 h-16 flex items-center justify-center"
          animate={{
            y: isHovered ? -5 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <motion.span
          className="text-xl font-medium text-center"
          animate={{
            y: isHovered ? 5 : 0,
            fontWeight: isHovered ? "600" : "500",
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.span>
      </motion.div>
    </Link>
  )
}

