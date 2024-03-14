import { MouseEventHandler } from "react";

interface IButtonProps {
  children: React.ReactNode;
  onClick:
    | MouseEventHandler<HTMLButtonElement>
    | (() => void)
    | ((param: boolean) => void);
  className?: string;
}

export default function Button({ children, onClick, className }: IButtonProps) {
  return (
    <button
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      className={`${className} rounded-md bg-white px-3 py-2.5 text-black transition-all hover:bg-opacity-85`}
    >
      {children}
    </button>
  );
}
