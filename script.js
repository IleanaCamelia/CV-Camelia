// ============================================================
// INTRO VIDEO
// Paste a YouTube link, a Vimeo link or a direct .mp4 link
// between the quotes to show the "Watch my intro" section.
// Leave it empty ("") to keep the section hidden.
// ============================================================
const INTRO_VIDEO_URL = "";


// ---------- Video intro ----------
function videoEmbed(url) {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return `<iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="Intro video" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `<iframe src="https://player.vimeo.com/video/${vimeo[1]}" title="Intro video" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>`;

  return `<video src="${url}" controls playsinline preload="metadata"></video>`;
}

if (INTRO_VIDEO_URL.trim()) {
  document.getElementById("video-frame").innerHTML = videoEmbed(INTRO_VIDEO_URL.trim());
  document.getElementById("intro-video").hidden = false;
}


// ---------- Spanish translations (English is in the HTML) ----------
const ES = {
  tagline: "Orientada al cliente · Generadora de confianza · Autónoma · Detallista",
  stat1: "años de experiencia",
  stat2: "países",
  stat3: "idiomas",
  download: "Descargar PDF",

  t_video: "Mira mi presentación",
  t_profile: "Perfil",
  p1: "Apasionada por la estética, el arte y las experiencias que crean conexiones auténticas, cuento con más de 20 años de experiencia internacional trabajando directamente con personas en España, Austria y otros países.",
  p2: "Uno de mis puntos fuertes es la capacidad de entender rápidamente las necesidades y preferencias de cada cliente e identificar la solución que realmente encaja con él. Creo en las relaciones basadas en la confianza, la atención y la profesionalidad, no en la presión — y que la gente vuelva es, para mí, la mejor confirmación.",
  p3: "Tengo experiencia en venta directa de productos cosméticos, incluidas demostraciones personalizadas, y actualmente dirijo mi propio negocio inmobiliario, gestionando todo el proceso: desde la captación de clientes y la construcción de la relación con ellos hasta la negociación y el cierre de la venta.",
  p4: "Soy autónoma, organizada, curiosa y orientada a soluciones. Me gusta aprender cosas nuevas y convertir ideas en proyectos concretos — actualmente estoy desarrollando soluciones y automatizaciones basadas en IA para restaurantes.",
  p5: "Me atraen las nuevas experiencias y estoy abierta a oportunidades en las que pueda seguir creciendo, aprendiendo y aportando valor gracias a mi experiencia, mi energía y mi capacidad para trabajar directamente con las personas.",

  t_bring: "Lo que aporto a Germaine de Capuccini",
  bring: "Conozco bien el sur de Tenerife y a su gente: salones de belleza, centros de estética, hoteles y la clientela internacional que llega hasta aquí. Hablo español, inglés y rumano, por lo que puedo comunicarme con naturalidad con propietarios y esteticistas de cualquier origen. Sé lo que significa presentar un producto de forma directa, con demostraciones en vivo, y construir relaciones a largo plazo. Organizo mi propia zona y mi agenda con la disciplina de quien dirige su propio negocio.",

  t_philosophy: "Mi filosofía",
  philosophy: "No creo en «vender». Creo en escuchar, en entender lo que la persona que tengo delante busca de verdad y en ofrecerle el producto que realmente le conviene. Cuando el producto es bueno y la relación es honesta, la venta llega de forma natural y el cliente vuelve.",

  t_experience: "Experiencia",
  j1_title: "Agente Inmobiliaria Independiente – Cilioaica Realty",
  j1_meta: "Tenerife · Mayo 2026 – Actualidad",
  j1_b1: "Representación de compradores y vendedores en toda la isla",
  j1_b2: "Captación de clientes, presentación de inmuebles, negociación y cierre",
  j1_b3: "Clientes internacionales, comunicación en 3 idiomas",
  j2_title: "Automatizaciones con IA para restaurantes",
  j2_meta: "Actualidad",
  j2_b1: "Desarrollo de sistemas automatizados para aumentar las reseñas y la visibilidad online",
  j3_title: "Asesora de Ventas de Belleza – Premier",
  j3_meta: "C.C. Oasis y C.C. Duque, Tenerife · Sep – Dic 2023",
  j3_b1: "Captación de clientes directamente en el centro comercial mediante la entrega de muestras de producto",
  j3_b2: "Demostraciones de producto en vivo",
  j3_b3: "Recomendaciones personalizadas según el tipo de piel",
  j3_b4: "Venta directa y cierre en el momento",
  j4_title: "Hostelería y Atención al Cliente",
  j4_meta: "Austria, España (Mallorca), Chipre, Rumanía, Carnival Cruise Line",
  j4_text: "Bartender, Jefa de Sala / Supervisora de Turno, Camarera VIP, Subdirectora. Coordinación de equipos, altos estándares de servicio bajo presión, relaciones duraderas con los clientes.",

  t_recs: "Recomendaciones",
  r1_quote: "“Camelia tiene una capacidad poco común para entender lo que los clientes realmente quieren, incluso antes de que lo digan. Trabajar con ella es fácil: es organizada, honesta y siempre va un paso por delante.”",
  r1_role: "Colega del sector inmobiliario",
  r2_quote: "“Fiable, cercana e increíblemente profesional. Camelia genera confianza de forma natural, y la gente se siente cómoda con ella desde la primera conversación.”",
  r2_role: "Colaboración profesional",
  r3_quote: "“Camelia es autónoma, trabajadora y tiene un trato excelente con las personas. Gestiona la presión con calma y siempre deja a los clientes una impresión positiva.”",
  r3_role: "Exgerente, sector inmobiliario",
  refs: "Referencias disponibles bajo petición",

  t_education: "Formación",
  e1: "Instituto Decebal",
  e1_d: "Matemáticas e Informática",
  e2_d: "Ventas y Marketing",
  e3: "Programación IT y Desarrollo Web",

  t_languages: "Idiomas",
  l1: "Rumano",
  l2: "Inglés",
  l3: "Español",

  t_contact: "Contacto",
  call: "Llamar",
  nationality: "Nacionalidad: rumana",
  location: "Tenerife, España",
};


// ---------- Language toggle ----------
const EN = {};
document.querySelectorAll("[data-i18n]").forEach(el => {
  EN[el.dataset.i18n] = el.textContent;
});

function setLang(lang) {
  const dict = lang === "es" ? ES : EN;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  const pdf = document.getElementById("pdf-link");
  pdf.href = lang === "es" ? "cv-es.pdf" : "cv.pdf";
  pdf.download = lang === "es" ? "Ileana-Camelia-Cilioaica-CV-ES.pdf" : "Ileana-Camelia-Cilioaica-CV.pdf";
}

document.querySelectorAll(".lang-toggle button").forEach(b => {
  b.addEventListener("click", () => setLang(b.dataset.lang));
});

// Optional: open the page directly in Spanish with ?lang=es
if (new URLSearchParams(location.search).get("lang") === "es") setLang("es");
