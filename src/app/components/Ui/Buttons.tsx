import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
  className?: string;
}

const Buttons = ({ href, label, className }: ButtonProps) => {
  return (
    <button
      className={`block px-4 py-2 border-l-2 border-b-2 border-white text-white hover:text-primary hover:border-primary rounded-lg shadow-lg text-sm font-medium transition-colors duration-500 ${className}`}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </Link>
    </button>
  );
};

export default Buttons;
