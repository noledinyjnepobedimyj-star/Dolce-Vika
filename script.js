const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav a");

const additionalWorks = [
  "4a923180-b370-11f1-bef7-4bf3d4f2c1e9.jpg",
  "4ab83010-b370-11f1-bc75-09e64632abe2.jpg",
  "4af05710-b370-11f1-96b1-771fa827da42.jpg",
  "4b0b3210-b370-11f1-986e-d318c6cce958.jpg",
  "4b4cf600-b370-11f1-b05c-5757204ef6fb.jpg",
  "4b6ade40-b370-11f1-90bc-dd4791e1ed0e.jpg",
  "4b901980-b370-11f1-a299-eba422d94ec1.jpg",
  "4bb358f0-b370-11f1-8469-693f34321337.jpg",
  "4c1a3110-b370-11f1-91db-dbac80b9ba95.jpg",
  "4c2f3fb0-b370-11f1-bcff-9f910144d1f1.jpg",
  "4c414110-b370-11f1-8ef3-ebc2ca7f7aaf.jpg",
  "4c542cd0-b370-11f1-8f12-9dacf744cfd2.jpg",
  "4c782f90-b370-11f1-a684-9fd9786785da.jpg",
  "4cb27970-b370-11f1-9cb3-254b9d031683.jpg",
  "4cd6ca50-b370-11f1-8001-5fcb72f8d49c.jpg",
  "4ceb8ad0-b370-11f1-b445-352a408224ef.jpg",
  "4cff39e0-b370-11f1-88c2-3506e27cf39d.jpg",
  "4d4bfa50-b370-11f1-ba4a-abfb4064ed24.jpg",
  "4d5b63a0-b370-11f1-9d5c-ff51ca33675a.jpg",
  "4d7cf560-b370-11f1-87c5-1d64e827b009.jpg",
  "4d9fbfa0-b370-11f1-b1b4-9f39d21ac6f8.jpg",
  "4db124c0-b370-11f1-b3fa-95b896345cd5.jpg",
  "4dc32620-b370-11f1-95f9-d5a2e4aef1b6.jpg",
  "4dd5c3c0-b370-11f1-8ea7-63ce248c44cf.jpg",
  "4df66b20-b370-11f1-aa5f-5d36cc82216c.jpg",
  "4e17d5d0-b370-11f1-9fa2-25b2cbe85e65.jpg",
  "4e3aee30-b370-11f1-ab00-db75095d2eb3.jpg",
  "4e5e0690-b370-11f1-84be-2b940c17729a.jpg",
  "4e820950-b370-11f1-b152-a9c6a6a206ad.jpg",
  "4ebb1ab0-b370-11f1-9263-0b7e6064473c.jpg",
  "4ec505c0-b370-11f1-b229-21024089b245.jpg",
  "4eec3cd0-b370-11f1-bab8-b95c5a5e3193.jpg",
  "4f237970-b370-11f1-b9b9-d1e59c0b391d.jpg",
  "4f4902d0-b370-11f1-8167-0dcfbbf51423.jpg",
  "4f6c6950-b370-11f1-a7fd-d9e54b185b58.jpg",
  "4f7b8480-b370-11f1-a361-ebf5db3cf7c0.jpg",
  "4f948ac0-b370-11f1-ba92-5b26251eeb4e.jpg",
  "4fd82370-b370-11f1-a77a-dd5a084c6f8e.jpg",
  "5004d8c0-b370-11f1-879c-5573354d27d1.jpg",
  "5019c050-b370-11f1-914d-1770ec050042.jpg"
];

const gallery = document.querySelector(".gallery");
additionalWorks.forEach((fileName, index) => {
  const item = document.createElement("button");
  item.className = "gallery-item";
  if (index % 5 === 0) item.classList.add("gallery-item-wide");
  if (index % 7 === 0) item.classList.add("gallery-item-tall");
  item.dataset.full = fileName;
  item.innerHTML = `<img src="${fileName}" alt="Работа Dolce Vika" loading="lazy"><span>${String(index + 9).padStart(2, "0")}</span>`;
  gallery.appendChild(item);
});

menuToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => link.addEventListener("click", () => {
  header.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
};

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
