import Image, { StaticImageData } from "next/image"
import Navbar from "@/components/navbar"
import ScallopBorder from "@/components/scallop-border"
import ArtGrid from "@/components/art-grid"
import NewsletterForm from "@/components/newsletter-form"

import traceyKatieImg from "@/public/tracey_katie_photo.png"
import iconPinkChildrenImg from "@/public/icon_pink_children.png"
import iconOrangeTeacherImg from "@/public/icon_orange_teacher.png"
import iconPurplePaletteImg from "@/public/icon_purple_palette.png"
import iconBlueCupImg from "@/public/icon_blue_cup.png"
import logoSmallImg from "@/public/logo_creative_collab_small.png"

const features: { icon: StaticImageData; title: string; description: string }[] = [
  {
    icon: iconPinkChildrenImg,
    title: "SMALL CLASSES",
    description: "Limited to 8-15 children per session, ensuring personal attention and space for each young artist.",
  },
  {
    icon: iconOrangeTeacherImg,
    title: "TEACHER LED",
    description: "Our experienced teachers make sure every child feels welcome, encouraged, and ready to unleash their creativity.",
  },
  {
    icon: iconPurplePaletteImg,
    title: "QUALITY ART PROJECTS",
    description: "Thoughtfully designed projects using high-quality art materials that encourage artistic growth and expression.",
  },
  {
    icon: iconBlueCupImg,
    title: "UNIQUE CAFE SETTING",
    description: "Make art in the laid-back atmosphere of Cigana Café after hours.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 md:px-12 lg:px-20 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Inspiring young artists
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4 mb-6 max-w-md">
              Small group art classes and school holiday workshops for kids in Auckland
            </p>
            <a
              href="https://events.mcgrath.nz/events/1/creative-collab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-creative-purple text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-creative-purple/90 transition-colors shadow-lg hover:shadow-xl"
            >
              View upcoming classes →
            </a>
          </div>
          <div className="hidden lg:flex w-1/2 justify-end">
            <ArtGrid />
          </div>
        </div>
        {/* Mobile art strip */}
        <div className="lg:hidden mt-6">
          <ArtGrid />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-amber-500 py-10 lg:py-24 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <Image
              src={traceyKatieImg}
              alt="Tracey and Katie"
              width={500}
              height={350}
              className="rounded-lg max-w-[280px] md:max-w-none mx-auto lg:mx-0"
              placeholder="blur"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-8">Hello!</h2>
            <p className="text-gray-900 text-base lg:text-lg mb-4 lg:mb-6">
              As experienced teachers (and art enthusiasts!), we have seen the magic of art and creativity for children.
              Our focus is on building creative confidence and technical skills through quality, small group
              instruction. Can&apos;t wait to meet you and start this artistic adventure!
            </p>
            <p className="text-gray-900 text-lg lg:text-xl font-medium">Tracey Taylor & Katie Pearce</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24 px-4 md:px-12 lg:px-20">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={96}
                  height={96}
                  placeholder="blur"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="pt-16 lg:pt-20 pb-32 lg:pb-36 px-4 md:px-12 lg:px-20 bg-creative-purple/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
          <p className="text-lg text-gray-700 mb-8">
            Be the first to know about new classes, workshops, and creative adventures.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <ScallopBorder color="orange" className="-mt-16" />

      {/* Instagram Feed Section */}
      <section id="gallery" className="bg-amber-500 py-16 lg:py-24 px-4 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-6">
          See What We&apos;ve Been Creating
        </h2>
        <p className="text-center text-gray-800 text-lg mb-12 max-w-2xl mx-auto">
          Follow along on Instagram for videos and photos from our latest art classes and workshops.
        </p>
        {/* TODO: Instagram feed integration */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-400/50 rounded-2xl p-12 text-center border-2 border-dashed border-amber-600">
            <p className="text-amber-800 font-medium mb-4">Instagram feed coming soon</p>
            <a
              href="https://www.instagram.com/creativecollab.co.nz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Image src="/instagram.svg" alt="" width={20} height={20} />
              Follow @creativecollab.co.nz
            </a>
          </div>
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
                target="_blank"
                rel="noopener noreferrer"
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
      <footer className="bg-creative-purple text-white py-8 px-4 md:px-12 lg:px-20">
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
