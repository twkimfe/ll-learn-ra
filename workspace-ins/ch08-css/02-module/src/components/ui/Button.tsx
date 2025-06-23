interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset";
  color?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, type="button", color, onClick: handleClick }: ButtonProps){
  return (
    <button type={ type } onClick={ handleClick } style={{ backgroundColor: color }} className="rounded-button">{ children }</button>
  );
}

export default Button;