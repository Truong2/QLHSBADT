import React from "react";
import wrapIcon from "./WrapIcon";

function Icon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0417 22.1563L29.7523 27.8657L27.8657 29.7523L22.1563 24.0417C20.032 25.7446 17.3897 26.6709 14.667 26.667C8.04299 26.667 2.66699 21.291 2.66699 14.667C2.66699 8.04299 8.04299 2.66699 14.667 2.66699C21.291 2.66699 26.667 8.04299 26.667 14.667C26.6709 17.3897 25.7446 20.032 24.0417 22.1563ZM21.367 21.167C23.0591 19.4268 24.0041 17.0942 24.0003 14.667C24.0003 9.50966 19.823 5.33366 14.667 5.33366C9.50966 5.33366 5.33366 9.50966 5.33366 14.667C5.33366 19.823 9.50966 24.0003 14.667 24.0003C17.0942 24.0041 19.4268 23.0591 21.167 21.367L21.367 21.167Z"
        fill="currentColor"
      />
    </svg>
  );
}

const IconExport = wrapIcon(Icon);
IconExport.displayName = "searchIcon";
export default IconExport;
