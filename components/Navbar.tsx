import Image from "next/image";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <header className="w-full border-b border-border flex justify-between items-center py-6 px-20">
      <div className="flex items-center gap-2">
        <Image src="/logo-small.svg" alt="logo" width={32} height={37.81} />
        <h1 className="font-semibold text-lg">ImageUpload</h1>
      </div>
      <ThemeButton />
    </header>
  );
};

export default Navbar;
