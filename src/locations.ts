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
        description:
          "Monaliza Point is a renowned point break that has been featured prominently in recent WSL events and the SEA Games. Situated in a picturesque location, this wave offers a fairly long right-hand ride, making it ideal for all styles of surfing. While it's common to see longboarders showcasing their skills, the wave's lower tide also provides an excellent canvas for shortboarders. Although it may have slightly less power compared to waves on the east coast, a long-period north or northwest swell can certainly deliver a punch. The optimal swell direction ranges from north to west, but even a southwest swell can align perfectly with the inside beach bay. The best wind conditions are typically from the east, ensuring an exceptional surfing experience at Monaliza Point",
      },
      {
        name: "Carille 🚧",
        src: "http://wavecheck.ph:8080/memfs/810e6686-8bf7-4220-a489-281992ab5421.m3u8",
        hostLogo: SurfMaidLogo,
        hostWebsite: "https://surfmaid.wixsite.com/surfmaid",
        comingSoon: true,
        description:
          "Carile is renowned as one of the longest accessible right-hand point breaks in the Philippines. On the right day, this wave can provide an incredible ride lasting more than a minute. It's a paradise for longboarders, offering a great pace and very user-friendly waves. The wave at Caril Point is perfect for those seeking a long and enjoyable surfing experience. For the best conditions at Caril Point, a large north (N) or northeast (NE) swell is required. Additionally, north to east winds are ideal, enhancing the quality of the waves and ensuring an unforgettable surfing session at this picturesque point break. ",
      },
      {
        name: "Urbiztondo Beach 🚧",
        src: "http://wavecheck.ph:8080/memfs/810e6686-8bf7-4220-a489-281992ab5421.m3u8",
        hostLogo: SurfMaidLogo,
        hostWebsite: "https://surfmaid.wixsite.com/surfmaid",
        comingSoon: true,
        description:
          "Urbiztondo Beach, known as The Bay, offers a fantastic sand bottom alternative to Monaliza Point. It's an excellent choice for surfers ranging from learners to experienced riders. With approximately 200 meters of beach, there's always a spot to catch waves and enjoy the surf. The wave at The Bay provides a versatile surfing experience, making it suitable for surfers at various skill levels. Whether you're just starting or looking to refine your techniques, The Bay offers a welcoming environment for all surfers. For optimal surfing conditions at Urbiztondo Beach, look for winds with east in them, as they provide the best performance. Additionally, swells from the west or north contribute to a great surfing experience, making The Bay an all-around favorite among surfers seeking diverse and enjoyable waves.",
      },
      {
        name: "Flotsam & Jetsam 🚧",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
        description:
          "Flotsam and Jetsam offers a surfing experience similar to Urbiztondo Beach, with the added benefit of fewer crowds. Located in a quieter area, this surf spot provides a more laid-back atmosphere for surfers to enjoy the waves. The waves at Flotsam and Jetsam are suitable for learners to experienced surfers, offering a sand bottom alternative that caters to a wide range of skill levels. With ample space along the beach, surfers can find their own spot and catch waves without the congestion often found at busier beaches. Ideal conditions at Flotsam and Jetsam include winds with east in them, which enhance the quality of the waves. Swells from the west or north contribute to a versatile surfing experience, making this spot a great choice for surfers looking for a relaxed yet exciting surfing session away from the crowds",
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
        description:
          "Sabang beach wide open beachfront with softer beach break waves. on the lower tide you can generally surf the outer bank with cosistant left and right hanedrs on offer and as the tide fills in you may get the oportinity to link the outter bank to the shorebreak. great conditions for all levels and beginners have great safe environment to practice on sandy bottom beach. best swell is E to NE and ideal wind from the south and west",
      },
      {
        name: "Cemento",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
        description:
          "Cemento, also known as Cobra Reef, is a dynamic surf spot known for its great short right-hand waves. This wave offers a variety of experiences, from slab-style barrels to open sections perfect for turns and even the occasional opportunity for aerial maneuvers. Surfers can also find a short left on offer here. Cobra Reef performs best when hit by east to northeast swells, with south winds providing the optimal conditions. When the swell size reaches overhead, this wave truly comes alive, delivering a powerful and exhilarating experience that challenges surfers to push their limits.",
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
        description:
          "Magic Left, true to its name, is a stunning surf spot located in Zambales. This wave is known for its user-friendly characteristics, making it a must-surf destination for surfers of all levels. The wave at Magic Left is beautiful and inviting, perfect for beginners looking to catch their first waves and for intermediate surfers to hone their skills. It offers a smooth and consistent ride, allowing surfers to practice and improve their techniques. The best swell direction for Magic Left is from the north (N) and northeast (NE), while the ideal wind conditions are from almost any direction except a direct northeast (NE) wind. These conditions create a perfect setup for enjoyable and memorable surfing sessions at Magic Left",
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
        description:
          "Cloud 9 is renowned for its powerful right-hand slab-style barrels running over a shallow reef. Despite offering a relatively short ride, its intensity is unmatched. As a swell magnet, Cloud 9 captures the majority of the Pacific Ocean's swells. The peak conditions for this wave are characterized by westerly winds and a northeast swell, typically ranging from 5 to 8 feet, creating an exhilarating experience for surfers.",
      },
      {
        name: "Tuason",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
        description:
          "A left-hand reef break, known for its mix of perfection and unpredictability, can handle waves ranging from 2 feet to a challenging 10 feet, depending on the swell direction. The optimal surfing conditions are achieved with a northeast to north swell and a west to north wind, creating ideal settings for surfers seeking thrilling rides. However, surfers should be mindful of the large boils and holes at the reef, which can significantly affect the wave as it breaks down the line",
      },
      {
        name: "Jacking Horse",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
        description:
          "Jacking Horse is an all-around surf break known for its versatility. The outer ledge produces a powerful right-hander that, although typically short, can occasionally run all the way to the shore, making it quite a leg burner. The wave's energy dissipates as it moves toward the shore, creating an ideal setup for intermediate surfers and offering a beginner-friendly section closer to the inside. The optimal swell direction for Jacking Horse is from the north to east, while the best wind conditions are from the south and southwest. This combination of factors makes Jacking Horse a great spot for surfers of varying skill levels to enjoy a range of waves.",
      },
      {
        name: "Pacifico Big Wish",
        src: "",
        hostLogo: SurfMaidLogo,
        hostWebsite: "",
        comingSoon: true,
        description:
          "Big wish is a long left-hander located in the north of Siargao, offering world-class waves when weather patterns align. Surfers with moderate ability will find this wave challenging yet rewarding, with barrels and turn sections along its length. On the right day, Big Wish can provide rides of 200 meters or more, making it a dream for surfers seeking long rides. The wave size at Big Wish ranges from 2 feet to triple overhead, providing a variety of conditions for surfers of different skill levels and preferences. The best wind for Big Wish is from the west, with the mountain range providing shelter and making the wave surfable even when winds are strong in other locations. Additionally, the optimal swell direction is from the north to northeast, ensuring the best conditions for catching epic waves at Big Wish.",
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
        description:
          "Dahican Beach in Mati is a surfers paradise, offering exhilarating waves that can leave you stoked for days on a sand bottom. The steep sand banks meeting the ocean create perfect wave setups for surfers of all levels. Whether you're a beginner looking to catch your first waves or an experienced surfer seeking thrilling rides, Dahican Beach has something for everyone. The ideal swell range at Dahican Beach is from the east to southeast, providing consistent and enjoyable waves for surfers. The best winds for surfing here come from the southwest, west, and north, creating optimal conditions for smooth and exciting rides along the coast. With its versatile wave conditions and stunning natural beauty, Dahican Beach is a must-visit destination for surfers looking for an unforgettable surfing experience in the Philippines.",
      },
    ],
  },
];

export default locations;
