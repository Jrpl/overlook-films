import Link from "next/link";

export default function Home() {
  const links = [
    {
      name: "Shift Left",
      img: "shiftLeft.png",
      href: "https://www.youtube.com/watch?v=Ypjy_dDBWMA",
    },
    {
      name: "V9",
      img: "v9.png",
      href: "https://www.youtube.com/watch?v=dd8_FlNK734",
    },
    {
      name: "Now You See Me",
      img: "nowYouSeeMe.png",
      href: "https://www.youtube.com/watch?v=WEe-Zs3JwMQ",
    },
    {
      name: "Elephants Can Fly",
      img: "elephantsCanFly.png",
      href: "https://www.youtube.com/watch?v=uU4ipp4HqGU",
    },
    {
      name: "Uproot: The Venezuelan Exodus (2021)",
      img: "uproot.png",
      href: "https://www.youtube.com/watch?v=uXQ7qr0xbvs",
    },
    {
      name: "Freedom",
      img: "freedom.png",
      href: "https://www.youtube.com/watch?v=CD3ljo5RqOw",
    },
    {
      name: "The Infinite Data Sprawl",
      img: "dataSprawl.png",
      href: "https://www.youtube.com/watch?v=tfwwkMJr7G4",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-14">
      <div className="text-7xl col-span-2">
        <img src="logo.png" />
        <div>
          Hi! I'm Tucker Johnson, a producer/video maker from Salt Lake City. To
          the right are some of my recent video projects. For any inquiries,
          send an email to tuckerjohnson100@gmail.com and i'll get right back to
          you. Thank you for stopping by!
        </div>
      </div>
      <div className="col-span-3">
        <div className="grid grid-rows-3 grid-flow-col gap-6 text-5xl">
          {links.map((link) => {
            return (
              <div
                key={link.name}
                className="flex flex-wrap justify-center text-center items-end"
              >
                <p>{link.name}</p>
                <Link
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={link.img} className="max-w-[17vw]" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
