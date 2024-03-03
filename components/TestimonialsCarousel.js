import { useState } from "react";
// import {getAllTestimonials} from "../helpers/testimonials";
import { getLocaleStrings } from "../helpers/languages";
import { useRouter } from "next/router";

export default function TestimonialsCarousel({ className = "", ...rest }) {
  const testimonials = getLocaleStrings(useRouter().locale, "testimonials");

  const [active, setActive] = useState(0);
  // const [testimonials] = useState(getAllTestimonials());

  const handleChangeSlide = (num) => setActive(num);

  return (
    <section className={`flex flex-col gap-10 ${className}`}>
      <div className="flex flex-col gap-6">
        <p className="max-w-[65ch] mx-auto leading-[1.7]">
          {testimonials[active].body}
        </p>

        <div>
          <p className="uppercase font-sans-alt font-extrabold text-lg tracking-tighter md:text-xl">
            {testimonials[active].name}
          </p>
          <p className="uppercase text-sm text-black/70">
            {testimonials[active].company}
          </p>
        </div>
      </div>
      <nav className="flex items-center justify-center gap-6">
        {testimonials.map((testimonial, key) => {
          return (
            <button
              onClick={() => handleChangeSlide(key)}
              key={`Testimonial: ${key}`}
              className={`inline-flex w-12 rounded-full aspect-square bg-transparent items-center justify-center leading-none border ${
                active === key
                  ? "border-primary text-primary"
                  : "border-black/50 text-black/50 mouse-hover:border-primary mouse-hover:text-primary"
              } transition-colors duration-300`}
            >
              {key + 1}
            </button>
          );
        })}
      </nav>
    </section>
  );
}
