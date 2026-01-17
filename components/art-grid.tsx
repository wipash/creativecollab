import Image from "next/image"

import brushImg from "@/public/grid/brush.png"
import heartImg from "@/public/grid/heart.png"
import splotchImg from "@/public/grid/splotch.png"
import ciganacupImg from "@/public/grid/ciganacup.png"
import dripsImg from "@/public/grid/drips.png"
import personsprinklesImg from "@/public/grid/personsprinkles.png"
import scissorsImg from "@/public/grid/scissors.png"
import paletteImg from "@/public/grid/palette.png"
import pencilsImg from "@/public/grid/pencils.png"

const images = [
  { src: brushImg, alt: "Paintbrush" },
  { src: heartImg, alt: "Heart" },
  { src: splotchImg, alt: "Paint splotch" },
  { src: ciganacupImg, alt: "Cigana cup" },
  { src: dripsImg, alt: "Paint drips" },
  { src: personsprinklesImg, alt: "Person with sprinkles" },
  { src: scissorsImg, alt: "Scissors" },
  { src: paletteImg, alt: "Paint palette" },
  { src: pencilsImg, alt: "Pencils" },
]

export default function ArtGrid() {
  return (
    <>
      {/* Mobile/Tablet: Centered row, wraps and hides overflow */}
      <div className="lg:hidden flex flex-wrap justify-center gap-3 max-h-20 overflow-hidden mb-4">
        {images.slice(0, 6).map((img, i) => (
          <div
            key={i}
            className="w-20 h-20 relative rounded-xl overflow-hidden"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" placeholder="blur" />
          </div>
        ))}
      </div>

      {/* Desktop: 4x4 Grid */}
      <div className="hidden lg:grid grid-cols-4 grid-rows-4 w-full max-w-[600px]">
        {/* Row 1 */}
        <div className="bg-warm-white aspect-square w-full" />
        <div className="aspect-square w-full relative">
          <Image src={brushImg} alt="Paintbrush" fill className="object-cover" placeholder="blur" />
        </div>
        <div className="bg-warm-white aspect-square w-full" />
        <div className="aspect-square w-full relative">
          <Image src={heartImg} alt="Heart" fill className="object-cover" placeholder="blur" />
        </div>

        {/* Row 2 */}
        <div className="bg-warm-white aspect-square w-full" />
        <div className="bg-warm-white aspect-square w-full" />
        <div className="aspect-square w-full relative">
          <Image src={splotchImg} alt="Paint splotch" fill className="object-cover" placeholder="blur" />
        </div>
        <div className="aspect-square w-full relative">
          <Image src={ciganacupImg} alt="Cigana cup" fill className="object-cover" placeholder="blur" />
        </div>

        {/* Row 3 */}
        <div className="bg-warm-white aspect-square w-full" />
        <div className="aspect-square w-full relative">
          <Image src={dripsImg} alt="Paint drips" fill className="object-cover" placeholder="blur" />
        </div>
        <div className="aspect-square w-full relative">
          <Image src={personsprinklesImg} alt="Person with sprinkles" fill className="object-cover" placeholder="blur" />
        </div>
        <div className="bg-warm-white aspect-square w-full" />

        {/* Row 4 */}
        <div className="aspect-square w-full relative">
          <Image src={scissorsImg} alt="Scissors" fill className="object-cover" placeholder="blur" />
        </div>
        <div className="bg-warm-white aspect-square w-full" />
        <div className="aspect-square w-full relative">
          <Image src={paletteImg} alt="Paint palette" fill className="object-cover" placeholder="blur" />
        </div>
        <div className="aspect-square w-full relative">
          <Image src={pencilsImg} alt="Pencils" fill className="object-cover" placeholder="blur" />
        </div>
      </div>
    </>
  )
}