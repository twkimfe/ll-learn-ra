interface ButtonProps {
  children: string;
  type?: 'button' | 'reset' | 'submit';
  color?: 'red' | 'green' | 'blue';
  onClick: (event: React.MouseEvent) => void;
}

function Button({ children, type="button", color, onClick: handleClick }: ButtonProps){
  return (
    <button 
      type={ type }
      onClick={ handleClick } 
      style={{ backgroundColor: color }}
      className="rounded-button"
    >{ children }</button>
  );
}

export default Button;