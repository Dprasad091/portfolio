import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[15px]"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* ✅ Separate Contact Row */}
        <div className="flex flex-col items-center my-6">
          <a
            href="mailto:prasaddumpala2004@gmail.com"
            className="text-[15px] my-1 hover:underline"
          >
            📧 Email: prasaddumpala2004@gmail.com
          </a>
          <a
            href="tel:+919876543210"
            className="text-[15px] my-1 hover:underline"
          >
            📞 Call: +91 83283 40344
          </a>
        </div>

        <div className="mb-[20px] mt-[20px] text-[15px] text-center">
          &copy; Dumpala Durga Prasad {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
