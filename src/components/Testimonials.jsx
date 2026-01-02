import { testimonials } from "../data/aureliaData";

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl text-center mb-16">
        Client Experiences
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map(t => (
          <div
            key={t.id}
            className="border border-[#c9a36b]/30 p-8 rounded-xl"
          >
            <p className="text-gray-300 mb-6">“{t.text}”</p>

            <div className="text-sm">
              <p className="text-[#c9a36b]">{t.name}</p>
              <p className="text-gray-500">{t.location}</p>
              <p className="mt-2 text-xs italic">
                {t.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
