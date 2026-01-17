import Image from "next/image"
import Navbar from "@/components/navbar"
import ScallopBorder from "@/components/scallop-border"
import ArtGrid from "@/components/art-grid"

import traceyKatieImg from "@/public/tracey_katie_photo.png"
import iconPinkChildrenImg from "@/public/icon_pink_children.png"
import iconOrangeTeacherImg from "@/public/icon_orange_teacher.png"
import iconPurplePaletteImg from "@/public/icon_purple_palette.png"
import iconBlueCupImg from "@/public/icon_blue_cup.png"
import classDescriptionImg from "@/public/class_description_april.png"
import logoSmallImg from "@/public/logo_creative_collab_small.png"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 lg:px-20">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 pt-16 lg:pt-24">
          <div className="max-w-md">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Inspiring young artists
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <ArtGrid />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-amber-500 py-16 lg:py-24 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src={traceyKatieImg}
              alt="Tracey and Katie"
              width={500}
              height={350}
              className="rounded-lg"
              placeholder="blur"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Hello!</h2>
            <p className="text-gray-900 text-lg mb-6">
              As experienced teachers (and art enthusiasts!), we have seen the magic of art and creativity for children.
              Our focus is on building creative confidence and technical skills through quality, small group
              instruction. Can&apos;t wait to meet you and start this artistic adventure!
            </p>
            <p className="text-gray-900 text-xl font-medium">Tracey Taylor & Katie Pearce</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24 px-4 md:px-12 lg:px-20">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6">
              <Image
                src={iconPinkChildrenImg}
                alt="Small Classes"
                width={96}
                height={96}
                placeholder="blur"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">SMALL CLASSES</h3>
            <p className="text-gray-700">
              Limited to 8-15 children per session, ensuring personal attention and space for each young artist.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6">
              <Image
                src={iconOrangeTeacherImg}
                alt="Teacher Led"
                width={96}
                height={96}
                placeholder="blur"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">TEACHER LED</h3>
            <p className="text-gray-700">
              Our experienced teachers make sure every child feels welcome, encouraged, and ready to unleash their
              creativity.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6">
              <Image
                src={iconPurplePaletteImg}
                alt="Quality Art Projects"
                width={96}
                height={96}
                placeholder="blur"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">QUALITY ART PROJECTS</h3>
            <p className="text-gray-700">
              Thoughtfully designed projects using high-quality art materials that encourage artistic growth and
              expression.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6">
              <Image
                src={iconBlueCupImg}
                alt="Unique Cafe Setting"
                width={96}
                height={96}
                placeholder="blur"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">UNIQUE CAFE SETTING</h3>
            <p className="text-gray-700">Make art in the laid-back atmosphere of Cigana Café after hours.</p>
          </div>
        </div>
        <div className="mt-16 w-full overflow-hidden">

        </div>
      </section>
<ScallopBorder color="orange" />
      {/* Upcoming Classes Section */}
      <section id="classes" className="bg-amber-500 py-16 lg:py-24 px-4 md:px-12 lg:px-20">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16">Upcoming Classes</h2>
        <div className="max-w-4xl mx-auto bg-background rounded-lg overflow-hidden">
          <Image
            src={classDescriptionImg}
            alt="April 2025 Classes"
            width={1000}
            height={700}
            className="w-full"
            placeholder="blur"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start justify-between max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">Contact</h2>
            <div className="mb-10">
              <h3 className="text-2xl font-bold uppercase mb-4">EMAIL</h3>
              <a href="mailto:hello@creativecollab.co.nz" className="text-xl text-gray-700 hover:text-purple-600">
                hello@creativecollab.co.nz
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4">SOCIAL</h3>
              <a
                href="https://instagram.com/creativecollab.co.nz"
                className="inline-flex items-center text-xl text-gray-700 hover:text-purple-600"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="mr-2"
                />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <ArtGrid />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-8 px-4 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src={logoSmallImg}
              alt="Creative Collab"
              width={150}
              height={80}
              className="brightness-0 invert"
              placeholder="blur"
            />
          </div>
          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} Creative Collab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
