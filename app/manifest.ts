import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Care4Solar — Powering Solar. Protecting Performance.",
    short_name: "Care4Solar",
    description:
      "Engineering-driven solar solutions, rooftop installations, operations and maintenance, and system performance care.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7F3",
    theme_color: "#15532E",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48 32x32 16x16",
        type: "image/x-icon",
      },
    ],
  };
}
