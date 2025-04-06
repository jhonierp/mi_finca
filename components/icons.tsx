export function HouseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="none" />
      <g transform="translate(25, 0)">
        {/* Left tree */}
        <circle cx="50" cy="120" r="30" fill="#5f855b" />
        <rect x="45" y="120" width="10" height="60" fill="#5f855b" />

        {/* House */}
        <polygon points="200,20 100,100 300,100" fill="#5f855b" />
        <rect x="120" y="100" width="160" height="100" fill="#5f855b" />

        {/* Door */}
        <rect x="150" y="100" width="50" height="100" fill="#d2ee36" />

        {/* Window */}
        <rect x="220" y="120" width="40" height="40" fill="#ffffff" />
        <line x1="220" y1="140" x2="260" y2="140" stroke="#5f855b" strokeWidth="2" />
        <line x1="240" y1="120" x2="240" y2="160" stroke="#5f855b" strokeWidth="2" />

        {/* Right tree */}
        <circle cx="350" cy="120" r="30" fill="#5f855b" />
        <rect x="345" y="120" width="10" height="60" fill="#5f855b" />
      </g>

      {/* Ground */}
      <line x1="0" y1="180" x2="400" y2="180" stroke="#5f855b" strokeWidth="4" />
    </svg>
  )
}

export function HouseLogoSmall({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 50" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(0.25) translate(25, 0)">
        {/* Left tree */}
        <circle cx="50" cy="120" r="30" fill="#5f855b" />
        <rect x="45" y="120" width="10" height="60" fill="#5f855b" />

        {/* House */}
        <polygon points="200,20 100,100 300,100" fill="#5f855b" />
        <rect x="120" y="100" width="160" height="100" fill="#5f855b" />

        {/* Door */}
        <rect x="150" y="100" width="50" height="100" fill="#d2ee36" />

        {/* Window */}
        <rect x="220" y="120" width="40" height="40" fill="#ffffff" />
        <line x1="220" y1="140" x2="260" y2="140" stroke="#5f855b" strokeWidth="2" />
        <line x1="240" y1="120" x2="240" y2="160" stroke="#5f855b" strokeWidth="2" />

        {/* Right tree */}
        <circle cx="350" cy="120" r="30" fill="#5f855b" />
        <rect x="345" y="120" width="10" height="60" fill="#5f855b" />
      </g>
    </svg>
  )
}

