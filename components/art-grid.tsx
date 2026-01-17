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

export default function ArtGrid() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full max-w-[600px]">
      {/* Row 1 */}
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="aspect-square w-full relative">
        <Image src={brushImg} alt="Paintbrush" fill className="object-cover" placeholder="blur" />
      </div>
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="aspect-square w-full relative">
        <Image src={heartImg} alt="Heart" fill className="object-cover" placeholder="blur" />
      </div>

      {/* Row 2 */}
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="aspect-square w-full relative">
        <Image src={splotchImg} alt="Paint splotch" fill className="object-cover" placeholder="blur" />
      </div>
      <div className="aspect-square w-full relative">
        <Image src={ciganacupImg} alt="Cigana cup" fill className="object-cover" placeholder="blur" />
      </div>

      {/* Row 3 */}
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="aspect-square w-full relative">
        <Image src={dripsImg} alt="Paint drips" fill className="object-cover" placeholder="blur" />
      </div>
      <div className="aspect-square w-full relative">
        <Image src={personsprinklesImg} alt="Person with sprinkles" fill className="object-cover" placeholder="blur" />
      </div>
      <div className="bg-[#FFF8F0] aspect-square w-full" />

      {/* Row 4 */}
      <div className="aspect-square w-full relative">
        <Image src={scissorsImg} alt="Scissors" fill className="object-cover" placeholder="blur" />
      </div>
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="aspect-square w-full relative">
        <Image src={paletteImg} alt="Paint palette" fill className="object-cover" placeholder="blur" />
      </div>
      <div className="aspect-square w-full relative">
        <Image src={pencilsImg} alt="Pencils" fill className="object-cover" placeholder="blur" />
      </div>
    </div>
  )
}