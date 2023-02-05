
type button = "number" | "button" | "clear" | "reset" | "enter";

export type ButtonType = {
  id: number;
  text: string;
  type: button;
  className?: string;
};

export const buttons: ButtonType[] = [
  {
    id: 0,
    text: "Ac",
    type: "reset",
    className: "text-[#858585] bg-white",
  },
  {
    id: 1,
    text: "Del",
    type: "clear",
    className: "text-[#858585] bg-white",
  },
  {
    id: 2,
    text: "/",
    type: "button",
    className: "text-[#109DFF] bg-[#ADE2FF]",
  },
  {
    id: 3,
    text: "*",
    type: "button",
    className: "text-[#109DFF] bg-[#ADE2FF]",
  },
  {
    id: 4,
    text: "7",
    type: "number",
    className: "text-[#38B9FF] bg-white",
  },
  {
    id: 5,
    text: "8",
    type: "number",
    className: "text-[#38B9FF] bg-white",
  },
  {
    id: 6,
    text: "9",
    type: "number",
    className: "text-[#38B9FF] bg-white",
  },
  {
    id: 7,
    text: "-",
    type: "button",
    className: "text-[#109DFF] bg-[#ADE2FF]",
  },
  {
    id: 8,
    text: "4",
    type: "number",
    className: "text-[#38B9FF] bg-white",
  },
  {
    id: 9,
    text: "5",
    type: "number",
    className: "text-[#38B9FF] bg-white",
  },
  {
    id: 10,
    text: "6",
    type: "number",
    className: "text-[#38B9FF] bg-white",
  },
  {
    id: 11,
    text: "+",
    type: "button",
    className: "text-[#109DFF] bg-[#ADE2FF]",
  },
  {
    id: 12,
    text: "1",
    type: "number",
    className: "text-[#38B9FF] bg-white",
  },
  {
    id: 13,
    text: "2",
    type: "number",
    className: "text-[#38B9FF] bg-white",
  },
  {
    id: 14,
    text: "3",
    type: "number",
    className: "text-[#38B9FF] bg-white",
  },
  {
    id: 15,
    text: "=",
    type: "enter",
    className: "h-auto row-span-2 text-[#109DFF] bg-[#ADE2FF]",
  },
  {
    id: 16,
    text: "0",
    type: "number",
    className: "w-auto col-span-2 text-[#38B9FF] bg-white",
  },
  {
    id: 17,
    text: ".",
    type: "button",
    className: "text-[#38B9FF] bg-white",
  },
];
