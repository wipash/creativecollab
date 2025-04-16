import Image from "next/image"

export default function ArtGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-2">
      <div className="bg-pink-400 row-span-1 col-span-1 aspect-square relative">
        <Image src="/paintbrush.svg" alt="Paintbrush" fill className="p-6 object-contain" />
      </div>
      <div className="bg-amber-500 row-span-1 col-span-1 aspect-square relative">
        <Image src="/heart.svg" alt="Heart" fill className="p-6 object-contain" />
      </div>
      <div className="bg-indigo-600 row-span-1 col-span-1 aspect-square relative">
        <Image src="/splatter.svg" alt="Paint splatter" fill className="p-6 object-contain" />
      </div>
      <div className="bg-pink-400 row-span-1 col-span-1 aspect-square relative">
        <Image src="/coffee.svg" alt="Coffee cup" fill className="p-6 object-contain" />
      </div>
      <div className="bg-indigo-600 row-span-1 col-span-1 aspect-square relative">
        <Image src="/drip.svg" alt="Paint drip" fill className="p-6 object-contain" />
      </div>
      <div className="bg-gray-100 row-span-1 col-span-1 aspect-square relative">
        <Image src="/person.svg" alt="Person" fill className="p-6 object-contain" />
      </div>
      <div className="bg-orange-500 row-span-1 col-span-1 aspect-square relative">
        <Image src="/scissors.svg" alt="Scissors" fill className="p-6 object-contain" />
      </div>
      <div className="bg-gray-100 row-span-1 col-span-1 aspect-square relative">
        <Image src="/palette.svg" alt="Palette" fill className="p-6 object-contain" />
      </div>
      <div className="bg-indigo-600 row-span-1 col-span-1 aspect-square relative">
        <Image src="/pencils.svg" alt="Pencils" fill className="p-6 object-contain" />
      </div>
    </div>
  )
}
