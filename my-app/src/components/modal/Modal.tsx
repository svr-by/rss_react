import { MouseEvent, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface IModalProps {
  children?: ReactNode;
  className?: string;
  onClose: () => void;
}

function Modal(props: IModalProps) {
  const { children, className, onClose } = props;

  function renderClassName(className: string | undefined) {
    let agrClass = 'modal__content';
    agrClass = className ? `${agrClass} ${className}` : agrClass;
    return agrClass;
  }

  function handleClick(e: MouseEvent<HTMLDivElement | HTMLButtonElement>) {
    const target = e.target as HTMLElement;
    if (target?.classList.contains('modal__btn-remove') || target?.classList.value === 'modal') {
      onClose();
    }
  }

  const modal = (
    <div className="modal" onClick={(e) => handleClick(e)}>
      <div className={renderClassName(className)}>
        <button className="modal__btn-remove" onClick={(e) => handleClick(e)}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );

  const elem = document.getElementById('modal-root');

  return elem ? ReactDOM.createPortal(modal, elem) : null;
}

export default Modal;
