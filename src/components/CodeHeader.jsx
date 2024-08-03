import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { changeLanguage, changeFontSize } from "@/redux/slices/codeSlice";
import { useMediaQuery } from "react-responsive";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

const CodeHeader = ({ renderCodeRef }) => {
  const { currentLanguage, fontSize } = useSelector((state) => state.codeSlice);
  const codeFormats = ["html", "css", "javascript"];
  const fileIcons = [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />];
  const fontSizeList = Array.from({ length: 8 }, (_, i) => `${12 + i * 2}px`);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const dispatch = useDispatch();

  const handlePreview = () => {
    renderCodeRef.current.style.right = 0;
  };

  return (
    <>
      <div className="h-12 flex items-center justify-between mx-2">
        <div>
          {isMobile ? (
            <Menubar className="space-x-0 p-0 h-0">
              <MenubarMenu>
                <MenubarTrigger
                  className="bg-secondary rounded-sm text-md"
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                    dispatch(changeLanguage(format));
                  }}
                >
                  <span className="pr-2">
                    {currentLanguage === "html"
                      ? fileIcons[0]
                      : currentLanguage === "css"
                        ? fileIcons[1]
                        : fileIcons[2]}
                  </span>
                  {(currentLanguage === "javascript"
                    ? "js"
                    : currentLanguage
                  ).toUpperCase()}
                  <RiArrowDropDownLine className="pt-1 pl-1 text-3xl" />
                </MenubarTrigger>
                <MenubarContent>
                  {codeFormats.map((format, idx) => (
                    <MenubarRadioGroup key={idx}>
                      <MenubarRadioItem
                        value={format}
                        onClick={() => dispatch(changeLanguage(format))}
                        className="px-4"
                      >
                        <div className="pr-3">{fileIcons[idx]}</div>
                        {format.toUpperCase()}
                      </MenubarRadioItem>
                    </MenubarRadioGroup>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ) : (
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
          )}
        </div>

        <div className="flex items-center gap-2">
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

          {isMobile && (
            <div>
              <Button onClick={handlePreview} variant="success">
                Preview
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CodeHeader;
