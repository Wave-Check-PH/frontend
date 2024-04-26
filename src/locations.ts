import SurfTown from "./interfaces/SurfTown";
import SurfMaidLogo from "./img/surfmaidlogo.png";

const locations: SurfTown[] = [
  {
    name: "La Union",
    cams: [
      {
        name: "Point",
        src: "https://wavecheckapi.com/memfs/75bb22e6-9861-4bc9-8978-f84a75bcc51c.m3u8",
        hostLogo: SurfMaidLogo,
        image:
          "https://wavecheckapi.com/memfs/75bb22e6-9861-4bc9-8978-f84a75bcc51c.jpg",
        hostWebsite: "https://surfmaid.wixsite.com/surfmaid",
      },
      {
        name: "Carille 🚧",
        src: "http://wavecheck.ph:8080/memfs/810e6686-8bf7-4220-a489-281992ab5421.m3u8",
        hostLogo: SurfMaidLogo,
        hostWebsite: "https://surfmaid.wixsite.com/surfmaid",
        comingSoon: true,
      },
      {
        name: "Urbiztondo Beach 🚧",
        src: "http://wavecheck.ph:8080/memfs/810e6686-8bf7-4220-a489-281992ab5421.m3u8",
        hostLogo: SurfMaidLogo,
        hostWebsite: "https://surfmaid.wixsite.com/surfmaid",
        comingSoon: true,
      },
      {
        name: "Flotsam & Jetsam 🚧",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
      },
      {
        name: "Clean Beach 🚧",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
      },
    ],
  },
  {
    name: "Baler 🚧",
    cams: [
      {
        name: "Sabang beach",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
      },
      {
        name: "Cemento",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
      },
    ],
  },
  {
    name: "Zamables 🚧",
    cams: [
      {
        name: "Magic Left",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
      },
    ],
  },
  {
    name: "Siargao 🚧",
    cams: [
      {
        name: "Cloud 9",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
      },
      {
        name: "Tuason",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
      },
      {
        name: "QuickSilver/Jacking Horse",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
      },
      {
        name: "Pacifico Big Wish",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
      },
    ],
  },
  {
    name: "Mati 🚧",
    cams: [
      {
        name: "Dahican",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
      },
    ],
  },
];

export default locations;
