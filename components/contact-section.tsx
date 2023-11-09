import { ContactForm } from "./contact-form";

export default function ContactSection() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-4">What we have to offer</h2>
            <p className="text-xl text-gray-600">
              With over a decade of experience in mobile and web app development, we enable businesses to bolster their digital presence in the fiercely competitive global market.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-4xl lg:max-w-none">
            <div>Left section</div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
