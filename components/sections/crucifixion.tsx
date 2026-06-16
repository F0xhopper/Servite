import Image from "next/image";

export function CrucifixionSection() {
  return (
    <section className="relative aspect-[16/7] w-full overflow-hidden">
      <Image
        src="/images/Rogier_van_der_Weyden_Crucifixion.jpg"
        alt="Rogier van der Weyden — Crucifixion"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />
    </section>
  );
}
