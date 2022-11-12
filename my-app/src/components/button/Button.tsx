import { ReactNode, MouseEvent } from 'react';
import './Button.css';

interface IButtonProps {
  children?: ReactNode;
  className?: string;
  active?: boolean;
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, className, active, onClick, ...atrs }: IButtonProps) {
  function renderClassName(className?: string, active?: boolean) {
    let agrClass = 'button';
    agrClass = className ? `${agrClass} ${className}` : agrClass;
    agrClass = active ? `${agrClass} active` : agrClass;
    return agrClass;
  }

  return (
    <button className={renderClassName(className, active)} onClick={onClick} {...atrs}>
      {children}
    </button>
  );
}

export default Button;
