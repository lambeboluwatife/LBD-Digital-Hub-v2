import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LBD Digital Hub",
    short_name: "LBD Hub",
    description:
      "Engineering modern web platforms, mobile applications, and intelligent AI automation workflows for growing businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#080D0E",
    theme_color: "#080D0E",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
