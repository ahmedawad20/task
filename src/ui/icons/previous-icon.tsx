import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgPreviousIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 6 8"
    {...props}
  >
    <path fill="#000" d="M1.44 0 .5.94 3.553 4 .5 7.06l.94.94 4-4-4-4Z" />
  </svg>
);
const Memo = memo(SvgPreviousIcon);
export default Memo;
