interface ScallopBorderProps {
    color?: "pink" | "orange" | "purple" | "blue"
    className?: string
  }

  export default function ScallopBorder({ color = "pink", className = "" }: ScallopBorderProps) {
    const colorClasses = {
      pink: "bg-pink-400",
      orange: "bg-amber-500",
      purple: "bg-purple-600",
      blue: "bg-indigo-600",
    }

    return (
      <div
        className={`w-full h-16 ${colorClasses[color]} ${className}`}
        style={{
          maskImage: "radial-gradient(circle at center top, transparent 25px, #000 26px)",
          maskSize: "50px 50px",
          maskRepeat: "repeat-x",
          maskPosition: "top",
        }}
      />
    )
  }
