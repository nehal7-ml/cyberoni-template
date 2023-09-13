import { useState } from "react";
import { LayoutDashboard, LogOut } from "lucide-react";
import Popover from "@/components/shared/popover";
import Image from "next/image";
import { motion } from "framer-motion";
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function UserDropdown() {
  const { user } = useUser();
  const { email, picture } = user || {};
  const [openPopover, setOpenPopover] = useState(false);

  if (!email) return null;

  return (
    <motion.div
      className="relative inline-block text-left"
      {...FADE_IN_ANIMATION_SETTINGS}
    >
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-56">
            {/* <Link
              className="flex items-center justify-start space-x-2 relative w-full rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              href="/dashboard"
            >
              <LayoutDashboard className="h-4 w-4" />
              <p className="text-sm">Dashboard</p>
            </Link> */}
            <button
              className="relative flex w-full cursor-not-allowed items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              disabled
            >
              <LayoutDashboard className="h-4 w-4" />
              <p className="text-sm">Dashboard</p>
            </button>
            <Link
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              href="/api/auth/logout"
            >
              <LogOut className="h-4 w-4" />
              <p className="text-sm">Logout</p>
            </Link>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >

      </Popover>
      <button
        onClick={() => setOpenPopover(!openPopover)}
        className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
      >
        <Image
          alt={email}
          src={picture as string || `https://avatars.dicebear.com/api/micah/${email}.svg`}
          width={40}
          height={40}
        />
      </button>
    </motion.div>

  );
}
