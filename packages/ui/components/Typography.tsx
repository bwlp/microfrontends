import { createElement, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  as: "h1" | "h2" | "h3" | "span";
}

export const Typography = ({ as = "span", children }: IProps) => {
  return createElement(as, { children, style: { margin: 0 } });
};
