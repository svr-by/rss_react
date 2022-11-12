import { UseFormRegister, Path } from 'react-hook-form';
import { IFormInputs } from '../../WordForm';
import './Switch.css';

interface ISwitchProps {
  name: Path<IFormInputs>;
  register: UseFormRegister<IFormInputs>;
  text?: string;
  type?: 'checkbox' | 'switch';
}

function Switch({ text, name, register, type = 'switch', ...atrs }: ISwitchProps) {
  const inputClassName = type === 'checkbox' ? 'switch__checkbox' : 'switch__input';

  return (
    <div className="switch">
      {type === 'switch' && <span>{text}</span>}
      <label className="switch__label">
        <input type="checkbox" className={inputClassName} {...register(name)} {...atrs} />
        {type === 'checkbox' && <span>{text}</span>}
        {type === 'switch' && <span className="switch__slider"></span>}
      </label>
    </div>
  );
}

export default Switch;
