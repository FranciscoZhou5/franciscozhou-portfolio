import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark py-8">
      <div className="max-w-2xl mx-auto text-center md:text-left px-6 flex items-center justify-between flex-col gap-4 md:flex-row">
        <span className="text-gray text-sm">© Todos os Diretos Reservados - Francisco Zhou.</span>

        <div>
          <Link href="https://github.com/FranciscoZhou5/franciscozhou" className="group">
            <Github size={18} className="text-gray group-hover:text-white duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
