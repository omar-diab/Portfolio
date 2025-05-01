import { JSX } from "react";

interface ContactItemProps {
  icon: JSX.Element;
  label: string;
  content: string | JSX.Element;
  bgColor: string;
}

// Reusable Contact Item Component
const ContactItem = ({ icon, label, content, bgColor }: ContactItemProps) => (
  <div className="flex items-center gap-4">
    <div className={`${bgColor} rounded-full p-3 flex-shrink-0`}>{icon}</div>
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
      <p className="text-lg text-gray-800 dark:text-gray-200">{content}</p>
    </div>
  </div>
);

export default ContactItem;