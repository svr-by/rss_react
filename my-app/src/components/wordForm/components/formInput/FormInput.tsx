import { UseFormRegister, Path, ValidationRule } from 'react-hook-form';
import { IFormInputs } from '../../WordForm';
import './FormInput.css';

type InputTypes = 'text' | 'file' | 'date' | 'checkbox';

interface IFormInputProps {
  type: InputTypes;
  label?: string;
  name: Path<IFormInputs>;
  register: UseFormRegister<IFormInputs>;
  required?: string;
  minLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
  errorMes?: string;
  autoComplete?: 'off';
  accept?: 'image/*' | 'audio/*';
  defaultValue?: string;
}

function FormInput(props: IFormInputProps) {
  const { type, label, name, register, required, minLength, pattern, errorMes, ...atrs } = props;

  function renderClassName(error?: string) {
    let agrClass = 'form-input__input';
    agrClass = error ? `${agrClass} form-input__input--error` : agrClass;
    return agrClass;
  }

  return (
    <label className="form-input">
      {label}
      <input
        type={type}
        className={renderClassName(errorMes)}
        {...register(name, { required, minLength, pattern })}
        {...atrs}
      />
      <div className="form-input__error-mes">{errorMes}</div>
    </label>
  );
}

export default FormInput;
