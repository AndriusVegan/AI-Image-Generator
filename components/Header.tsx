import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between sticky top-0 bg-white z-50 shadow-md px-3 py-3 ">
      <div className="flex space-x-2 items-center justify-center ">
        <Image
          className="rounded-full"
          src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*bf37-lAuwi6_Wx5-e5EJ1Q.jpeg"
          alt="ChatGPT logo"
          height={30}
          width={30}
        />
        <h1 className="font-bold">
          <span className="text-green-600">Vegan AI</span> Image Generator
        </h1>
        <h2 className="text-xs">Powered by Dall E 2 and ChatGPT</h2>
      </div>
      {/* Right side */}
      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          href="https://plantbasednews.org/"
          className="px-2 text-right text-green-500"
        >
          Join Vegan community
        </Link>
        <Link
          href="https://github.com/AndriusVegan/chatGPT-bot"
          className="px-2 font-light"
        >
          GitHub Repo
        </Link>
        {/* need to replace with correct repo */}
      </div>
    </header>
  );
}

export default Header;
