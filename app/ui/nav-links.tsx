"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Define the array of link objects
const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  console.log(pathName, "path name");
  return (
    <>
      {links.map((link) => {
        console.log(link.href, "href");
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${pathName === link.href ? "text-red-600" : ""} flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
