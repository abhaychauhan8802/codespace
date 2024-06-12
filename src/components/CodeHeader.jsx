import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { changeLanguage, changeFontSize } from "@/redux/slices/codeSlice";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

const CodeHeader = () => {
  const { currentLanguage, fontSize } = useSelector((state) => state.codeSlice);
  const codeFormats = ["html", "css", "javascript"];
  const fileIcons = [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />];
  const fontSizeList = Array.from({ length: 8 }, (_, i) => `${12 + i * 2}px`);

  const dispatch = useDispatch();

  return (
    <>
      <div className="h-12 flex items-center justify-between mx-2">
        <div className="flex gap-1">
          {codeFormats.map((format, idx) => (
            <Button
              className="w-20 rounded-sm text-xs"
              variant={currentLanguage === format ? "secondary" : "outline"}
              onClick={() => dispatch(changeLanguage(format))}
              key={idx}
            >
              <div className="pr-1">{fileIcons[idx]}</div>
              {(format === "javascript" ? "js" : format).toUpperCase()}
            </Button>
          ))}
        </div>
        <div>
          <Menubar className="space-x-0 p-0 h-0">
            <MenubarMenu>
              <MenubarTrigger
                className="bg-background"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{fontSize}</span>
                <RiArrowDropDownLine className="pt-1 pl-1 text-3xl" />
              </MenubarTrigger>
              <MenubarContent>
                {fontSizeList.map((size, idx) => (
                  <MenubarRadioGroup value={fontSize} key={idx}>
                    <MenubarRadioItem
                      value={size}
                      onClick={() => dispatch(changeFontSize(size))}
                    >
                      {size}
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </>
  );
};

export default CodeHeader;
