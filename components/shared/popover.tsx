import { Dispatch, SetStateAction, ReactNode, useRef,useEffect } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import useWindowSize from "@/lib/hooks/use-window-size";
import Leaflet from "./leaflet";

export default function Popover({
  children,
  content,
  align = "center",
  openPopover,
  setOpenPopover,
}: {
  children: ReactNode;
  content: ReactNode | string;
  align?: "center" | "start" | "end";
  openPopover: boolean;
  setOpenPopover: Dispatch<SetStateAction<boolean>>;
}) {
  const { isMobile, isDesktop } = useWindowSize();
  return (
    <>
      {isMobile && children}
      {openPopover && isMobile && (
        <Leaflet setShow={setOpenPopover}>{content}</Leaflet>
      )}
      {isDesktop && openPopover && (
        <PopoverPrimitive.Root>
          <PopoverPrimitive.Trigger className="inline-flex" asChild>
            {children}
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Content
            sideOffset={4}
            align={align}
            className="z-20 items-center bg-white rounded-md border border-gray-200 drop-shadow-lg animate-slide-up-fade"
          >
            {content}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Root>
      )}
    </>
  );
}



export  function VidPopover({
  children,
  content,
  align = "center",
  openPopover,
  setOpenPopover,
}: {
  children: ReactNode;
  content: ReactNode | string;
  align?: "center" | "start" | "end";
  openPopover: boolean;
  setOpenPopover: Dispatch<SetStateAction<boolean>>;
}) {
  const { isMobile, isDesktop } = useWindowSize();

  useEffect(() => {
    if (openPopover && isDesktop) {
      setOpenPopover(true);
    }
  }, [openPopover, isDesktop, setOpenPopover]);

  return (
    <>
      {isMobile && children && (
        <>
         
          {openPopover && (
            <Leaflet setShow={setOpenPopover}>{content}</Leaflet>
          )}
        </>
      )}
      {(openPopover && isDesktop) ? (
        <Leaflet setShow={setOpenPopover}>{content}</Leaflet>
      ) : (<div>{children}</div>)}
    </>
  );
}
