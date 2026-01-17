import Image from "next/image"

export default function ArtGrid() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full max-w-[600px]">
      {/* Row 1 */}
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="aspect-square w-full relative">
        <Image src="/grid/brush.png" alt="Paintbrush" fill className="object-cover" />
      </div>
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="aspect-square w-full relative">
        <Image src="/grid/heart.png" alt="Heart" fill className="object-cover" />
      </div>

      {/* Row 2 */}
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="aspect-square w-full relative">
        <Image src="/grid/splotch.png" alt="Paint splotch" fill className="object-cover" />
      </div>
      <div className="aspect-square w-full relative">
        <Image src="/grid/ciganacup.png" alt="Cigana cup" fill className="object-cover" />
      </div>

      {/* Row 3 */}
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="aspect-square w-full relative">
        <Image src="/grid/drips.png" alt="Paint drips" fill className="object-cover" />
      </div>
      <div className="aspect-square w-full relative">
        <Image src="/grid/personsprinkles.png" alt="Person with sprinkles" fill className="object-cover" />
      </div>
      <div className="bg-[#FFF8F0] aspect-square w-full" />

      {/* Row 4 */}
      <div className="aspect-square w-full relative">
        <Image src="/grid/scissors.png" alt="Scissors" fill className="object-cover" />
      </div>
      <div className="bg-[#FFF8F0] aspect-square w-full" />
      <div className="aspect-square w-full relative">
        <Image src="/grid/palette.png" alt="Paint palette" fill className="object-cover" />
      </div>
      <div className="aspect-square w-full relative">
        <Image src="/grid/pencils.png" alt="Pencils" fill className="object-cover" />
      </div>
    </div>
  )
}
