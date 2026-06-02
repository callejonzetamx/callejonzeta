"use client";

import { useEffect, useState } from "react";
const products = [
  {
    id: 1,
    drop: "DROP 001",
    name: "Tabasco Urbano Oversized",
    price: 449,
    image: "/Images/Tabasco Urbano.png",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Playera oversized con estética urbana, corte amplio y diseño limpio.",
  },
];
export default function Home() {
  const [selectedSize, setSelectedSize] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };
  setTimeout(() => {
  setLoading(false);
}, 1200);
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
if (loading) {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <h1 className="text-xl font-light uppercase tracking-[0.6em]">
        Callejón Zeta
      </h1>
    </div>
  );
}
  return (
  <main className="min-h-screen bg-white text-black">

    {menuOpen && (
  <div className="fixed inset-0 z-[999] flex flex-col bg-white px-8 py-10 md:hidden">
    <div className="mb-12 flex items-center justify-between">
      <h2 className="text-sm uppercase tracking-[0.35em]">
        Callejón Zeta
      </h2>

      <button
        type="button"
        onClick={() => setMenuOpen(false)}
        className="text-sm uppercase tracking-[0.3em]"
      >
        Cerrar
      </button>
    </div>

    <div className="flex flex-col gap-8 text-3xl font-light uppercase tracking-[-0.04em]">
      <a href="#coleccion" onClick={() => setMenuOpen(false)}>
        Colección
      </a>

      <a href="#nosotros" onClick={() => setMenuOpen(false)}>
        Nosotros
      </a>

      <a href="#carrito" onClick={() => setMenuOpen(false)}>
        Carrito
      </a>
    </div>
    <div className="mt-auto flex gap-6 border-t border-black/10 pt-6 text-xs uppercase tracking-[0.25em] text-black/50">
  <a
    href="https://www.instagram.com/callejonzetamx?igsh=Z3NkNm9xaW5zaDUy&utm_source=qr"
    target="_blank"
  >
    Instagram
  </a>

  <a
    href="https://www.facebook.com/share/17bGzsyoTy/?mibextid=wwXIfr"
    target="_blank"
  >
    Facebook
  </a>

  <a
    href="https://wa.me/529932191300"
    target="_blank"
  >
    WhatsApp
  </a>
</div>
  </div>
)}
     <section className="fixed top-0 left-0 z-[60] w-full bg-black py-2 text-center text-[10px] uppercase tracking-[0.3em] text-white md:text-xs">
  ENVÍOS A TODO MÉXICO • CALIDAD PREMIUM • OVERSIZED FIT
</section>
<header
  className={`fixed left-1/2 z-50 w-[88%] -translate-x-1/2 rounded-full border border-black/5 bg-white/60 backdrop-blur-xl ${
    scrolled ? "top-9 py-3 shadow-lg" : "top-10 py-3"
  }`}
>
  <div className="flex items-center justify-between px-5 py-2 text-[10px] uppercase tracking-[0.22em]">
    <a
      href="#inicio"
      className="font-light tracking-[0.28em] transition duration-300 hover:opacity-50"
    >
      <img
  src="/Images/logo-cz.png"
  alt="Callejón Zeta"
  className="h-14 w-auto object-contain"
/>
    </a>
    <div className="hidden items-center gap-6 md:flex">
  <a href="#coleccion" className="transition duration-300 hover:opacity-50">
    Colección
  </a>

  <a href="#producto" className="transition duration-300 hover:opacity-50">
    Producto
  </a>

  <a href="#nosotros" className="transition duration-300 hover:opacity-50">
    Nosotros
  </a>

  <a href="#carrito" className="transition duration-300 hover:opacity-50">
    Carrito
  </a>
</div>

    <button
      type="button"
      onClick={() => setMenuOpen(true)}
      className="block text-2xl font-light text-black md:hidden"
    >
      ☰
    </button>
  </div>
</header>

      <section
  id="inicio"
  className="grid min-h-[110vh] grid-cols-1 pt-32 md:min-h-screen md:grid-cols-2 md:pt-20"
>
        <div className="animate-[fadeIn_1s_ease-out] flex flex-col justify-center px-8 pt-28 md:px-24 xl:px-32">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] animate-fadeUp delay-100">
            MADE IN TABASCO
          </p>

          <h2 className="max-w-4xl text-[3rem] font-extralight leading-[0.8] tracking-[-0.08em] md:text-7xl xl:text-[7rem]">
            CALLEJÓN
            <br />
            ZETA
          </h2>

          <p className="mb-10 max-w-md text-base md:text-lg leading-relaxed text-gray-600">
            Del sur, con identidad.
          </p>

          <a
  href="#coleccion"
  className="w-fit border border-black px-8 py-4 text-xs uppercase tracking-[0.28em] transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-xl md:px-10 md:text-sm animate-fadeUp delay-300"
>
  VER DROP 001
</a>
        </div>

        <div className="min-h-[70vh] bg-black md:min-h-screen">
  <img
    src={products[0].image}
    alt="Diseño editorial de Callejón Zeta"
    className="h-[70vh] w-full object-cover md:h-screen"
  />
</div>
      </section>
      <section className="border-y border-black/10 bg-white py-8">
  <div className="flex flex-wrap items-center justify-center gap-6 px-8 text-center text-xs uppercase tracking-[0.35em] text-black/60 md:gap-14">
    <p>Oversized premium</p>
    <p>Diseñado en Tabasco</p>
    <p>Envíos a todo México</p>
  </div>
</section>
<section className="bg-white px-8 py-28 text-center md:px-20">
  <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
    Primera edición
  </p>

  <h2 className="mx-auto max-w-4xl text-5xl font-extralight leading-none tracking-[-0.04em] md:text-7xl">
    DROP 001
  </h2>

  <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-gray-500">
    Una primera selección de piezas oversized creadas para representar identidad,
    calle y presencia desde el sur.
  </p>
</section>
      <section
  id="coleccion"
  className="bg-white px-8 py-32 md:px-20"
>
  <div className="mb-14">
    <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-500">
      Callejón Zeta
    </p>

    <h3 className="text-4xl font-light md:text-5xl">
      NUEVA COLECCIÓN
    </h3>
  </div>

  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">

    <div className="group cursor-pointer transition duration-500 hover:scale-[1.01]">
      <div className="relative mb-5 overflow-hidden bg-[#f4f4f4] transition duration-500 ...">

  <span className="absolute left-4 top-4 z-10 bg-black px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white">
    Nuevo
  </span>
        <img
          src="/images/MODELO.png"
          alt="Playera Callejón Zeta"
          className="h-[420px] w-full object-cover"
        />
      </div>
      <div className="mb-5 inline-flex border border-black/10 bg-[#f7f7f7] px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-gray-600">
  Drop limitado
</div>
      <h4 className="mb-1 text-lg">
        DROP 001 — EDÉN URBANO
      </h4>

      <div className="mb-5 flex gap-2 text-xs">
  {products[0].sizes.map((size) => (
    <button
      key={size}
      onClick={() => setSelectedSize(size)}
      className={`border px-4 py-2 transition duration-300 ${
        selectedSize === size
          ? "border-black bg-black text-white"
          : "border-black/20 bg-white hover:bg-black hover:text-white"
      }`}
    >
      {size}
    </button>
  ))}
</div>

{selectedSize && (
  <p className="mb-5 text-sm text-gray-500">
    Talla seleccionada: {selectedSize}
  </p>
)}

  <a
  href="#producto"
  className="block w-full border border-black px-5 py-4 text-center text-xs uppercase tracking-[0.3em] transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-xl"
>
  Ver producto
</a>
    </div>

  </div>
</section>
<section className="bg-[#f7f7f7] px-8 py-20 md:px-20">
  <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
    <div>
      <h4 className="mb-3 text-sm uppercase tracking-[0.3em]">
        Corte oversized
      </h4>
      <p className="text-sm leading-relaxed text-gray-500">
        Silueta amplia, cómoda y con presencia urbana.
      </p>
    </div>

    <div>
      <h4 className="mb-3 text-sm uppercase tracking-[0.3em]">
        Textil premium
      </h4>
      <p className="text-sm leading-relaxed text-gray-500">
        Prendas pensadas para sentirse firmes, limpias y duraderas.
      </p>
    </div>

    <div>
      <h4 className="mb-3 text-sm uppercase tracking-[0.3em]">
        Drop limitado
      </h4>
      <p className="text-sm leading-relaxed text-gray-500">
        Diseños creados en cantidades reducidas para conservar exclusividad.
      </p>
    </div>
  </div>
</section>
<section id="producto" className="bg-white px-8 py-32 md:px-20">
  <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
    <div className="group rounded-[32px] bg-[#f7f7f7] p-6 transition duration-500 hover:shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-12">
      <img
        src="/Images/MODELO.png"
        alt="Playera oversized Callejón Zeta"
        className="h-[700px] w-full object-contain transition duration-700 group-hover:-translate-y-2 group-hover:scale-105 md:h-[720px]"
        
      />
    </div>

    <div className="flex flex-col justify-center">
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
        Callejón Zeta
      </p>

      <h3 className="mb-4 text-4xl font-light">
  {products[0].name}
</h3>

      <p className="mb-6 text-xl">
        {`$${products[0].price} MXN`}
        </p>
        <div className="mt-8 space-y-3 text-xs uppercase tracking-[0.25em] text-black/60">
  <p>• Oversized Fit</p>
  <p>• 300 GSM Premium</p>
  <p>• Edición limitada</p>
  <p>• Hecho en México</p>
</div>

      <p className="mb-10 max-w-lg text-[15px] leading-[1.9] text-gray-500">
  {products[0].description}
</p>
      <div className="mb-8">
  <p className="mb-3 text-xs uppercase tracking-[0.25em]">
    Talla
  </p>

  <div className="flex gap-3">
    {["S", "M", "L", "XL"].map((size) => (
      <button
        type="button"
        key={size}
        onClick={() => setSelectedSize(size)}
        className={`border px-5 py-3 text-sm transition duration-300 ${
          selectedSize === size
            ? "border-black bg-black text-white"
            : "border-black/20 bg-white hover:bg-black hover:text-white"
        }`}
      >
        {size}
      </button>
    ))}
  </div>

  {selectedSize && (
    <p className="mt-4 text-sm text-gray-500">
      Talla seleccionada: {selectedSize}
    </p>
  )}
</div>

{selectedSize ? (
  <a
    href="#carrito"
    className="block w-full bg-black px-6 py-4 text-center text-xs uppercase tracking-[0.3em] text-white transition duration-300 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-xl"
  >
    Agregar talla {selectedSize} al carrito
  </a>
) : (
  <button
    type="button"
    className="block w-full cursor-not-allowed bg-gray-300 px-6 py-4 text-center text-xs uppercase tracking-[0.3em] text-gray-500"
  >
    Selecciona una talla
  </button>
)}

<div className="mt-8 space-y-3 border-t border-black/10 pt-6 text-sm text-gray-500">
  <p>Envíos disponibles a todo México.</p>
  <p>Cambios sujetos a disponibilidad de talla.</p>
  <p>Atención directa por WhatsApp.</p>
</div>

</div>
</div>
</section>
<section className="bg-[#f7f7f7] px-8 py-32 md:px-20">
  <div className="mx-auto max-w-5xl text-center">
    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
      Callejón Zeta
    </p>
    <h2 className="text-5xl font-extralight tracking-[-0.04em] md:text-7xl">
  ¿POR QUÉ
<br />
CALLEJÓN ZETA?
</h2>
<p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-gray-500">
  Diseño inspirado en el sur. Prendas premium en drops limitados.
</p>
  </div>
</section>
<section id="nosotros" className="bg-black px-8 py-32 text-white md:px-20">
  <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
        Nuestra esencia
      </p>

      <h3 className="text-4xl font-light leading-tight md:text-6xl">
        IDENTIDAD
<br />
CON CARÁCTER
      </h3>
    </div>

    <div className="flex items-end">
      <p className="max-w-xl text-lg leading-relaxed text-white/70">
        Callejón Zeta nace del sur, de la autenticidad y de la ambición por crear algo diferente. Inspirada en quienes encuentran grandeza en lo cotidiano, la marca transforma identidad y cultura en piezas con carácter, hechas para destacar sin perder el origen.
      </p>
    </div>
  </div>
</section>

<section className="bg-black px-8 py-32 text-white md:px-20">
  <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/50">
    Callejón Zeta
  </p>

  <h2 className="text-5xl font-light leading-none tracking-[-0.06em] md:text-8xl">
    DEL SUR.
    <br />
    CON IDENTIDAD.
  </h2>

  <p className="mt-10 text-sm uppercase tracking-[0.3em] text-white/50">
    Villahermosa, Tabasco
  </p>
</section>
<footer className="bg-white px-8 py-12 text-black md:px-20">
  <div className="flex flex-col gap-8 border-t border-black/10 pt-8 md:flex-row md:items-center md:justify-between">
    <h4 className="text-lg font-extralight uppercase tracking-[0.45em]">
  CALLEJÓN ZETA
</h4>
<p className="mt-4 text-xs uppercase tracking-[0.25em] text-black/40">
  Villahermosa, Tabasco
</p>
    <div className="flex gap-10 text-[11px] uppercase tracking-[0.28em] text-black/70">
      <a
  href="https://www.instagram.com/callejonzetamx?igsh=Z3NkNm9xaW5zaDUy&utm_source=qr"
  target="_blank"
  className="transition duration-300 hover:opacity-50"
>
  Instagram
</a>

<a
  href="https://www.facebook.com/share/17bGzsyoTy/?mibextid=wwXIfr"
  target="_blank"
  className="transition duration-300 hover:opacity-50"
>
  Facebook
</a>

<a
  href="https://wa.me/529932191300"
  target="_blank"
  className="transition duration-300 hover:opacity-50"
>
  WhatsApp
</a>
    </div>
  </div>
  <section id="carrito" className="bg-[#f7f7f7] px-8 py-32 md:px-20">
  <div className="mx-auto max-w-4xl">
    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
      Compra segura
    </p>

    <h3 className="mb-8 text-4xl font-light">
      Carrito
    </h3>
    <p className="mb-8 text-sm text-gray-500">
  Selecciona tu talla y finaliza tu pedido por WhatsApp.
</p>
    <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm transition duration-500 hover:shadow-xl md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="mb-2 text-lg">
  Tabasco Urbano Oversized
</h4>

<div className="mb-6 flex items-center gap-3">
  <p className="text-3xl font-extralight tracking-[-0.03em]">
    $449 MXN
  </p>

  <span className="text-sm uppercase tracking-[0.25em] text-gray-400">
    MXN
  </span>
</div>
<p className="text-[11px] uppercase tracking-[0.32em] text-gray-500">
  Oversized fit • Drop 001 • Streetwear premium
</p>
<p className="mb-8 text-sm text-gray-500">
  Stock limitado • Disponible ahora
</p>
          <div className="text-gray-500">
  <p className="text-sm text-gray-500">
  Talla:{" "}
  <span className="font-medium text-black">
    {selectedSize || "Selecciona una talla"}
  </span>
</p>
<p className="mt-2 text-sm text-gray-500">
  Cantidad: <span className="font-medium text-black">{quantity}</span>
</p>
  <div className="mt-3 flex items-center gap-3">
    <button
  type="button"
  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
  className="border border-black/10 px-4 py-3 transition duration-300 hover:bg-black hover:text-white hover:shadow-md"
>
  -
</button>

    <span>{quantity}</span>

    <button
  type="button"
  onClick={() => setQuantity((prev) => prev + 1)}
  className="border border-black/10 px-4 py-3 transition duration-300 hover:bg-black hover:text-white hover:shadow-md"
>
  +
</button>
  </div>
</div>
        </div>

        <p className="text-lg">
          ${449 * quantity} MXN
        </p>
      </div>

      <div className="my-8 border-t border-black/10"></div>

      <div className="flex items-center justify-between">
        <p className="uppercase tracking-[0.25em]">
          Total
        </p>

        <p className="text-xl">
          $449 MXN
        </p>
      </div>

      {selectedSize ? (
  <a
    href={`https://wa.me/529932191300?text=Hola,%20quiero%20realizar%20un%20pedido%20de%20Callej%C3%B3n%20Zeta.%0A%0AProducto:%20DROP%20001%20%E2%80%94%20ED%C3%89N%20URBANO%0ATalla:%20${selectedSize}%0APrecio:%20%24449%20MXN`}
    target="_blank"
    className="mt-6 block w-full bg-black px-5 py-3 text-center text-[11px] uppercase tracking-[0.3em] text-white transition duration-300 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-xl"
  >
    Finalizar compra · Talla {selectedSize}
  </a>
) : (
  <button
    type="button"
    className="mt-6 block w-full cursor-not-allowed bg-gray-300 px-6 py-4 text-center text-xs uppercase tracking-[0.3em] text-gray-500"
  >
    Selecciona una talla
  </button>
)}
<p className="mt-4 text-center text-xs tracking-[0.15em] text-gray-400">
  Pago seguro • Atención personalizada • Envíos a todo México
</p>
    </div>
  </div>
</section>
<section className="bg-white px-8 py-16 md:px-20">
  <div className="grid grid-cols-1 gap-10 border-y border-black/10 py-14 text-center md:grid-cols-3">
    <div>
      <h4 className="mb-3 text-xs uppercase tracking-[0.35em]">
        Pago seguro
      </h4>
      <p className="text-sm text-gray-500">
        Aceptaremos tarjeta, transferencia y pagos digitales.
      </p>
    </div>

    <div>
      <h4 className="mb-3 text-xs uppercase tracking-[0.35em]">
        Atención directa
      </h4>
      <p className="text-sm text-gray-500">
        Podrás confirmar tu pedido por WhatsApp o redes sociales.
      </p>
    </div>

    <div>
      <h4 className="mb-3 text-xs uppercase tracking-[0.35em]">
        Envíos
      </h4>
      <p className="text-sm text-gray-500">
        Preparado para envíos locales y nacionales.
      </p>
    </div>
  </div>
</section>
</footer>
<a
  href="https://wa.me/529932191300"
  target="_blank"
  className="fixed bottom-4 right-4 z-50 rounded-full border border-black/10 bg-white px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-black shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-black hover:text-white md:bottom-6 md:right-6 md:px-5 md:py-4 md:text-xs"
>
  WhatsApp
</a>
    </main>
  );
}