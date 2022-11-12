import { GroupValues } from 'shared/types';
import './Level.css';

export interface ILevelProps {
  name: string;
  qtyWords: string;
  sign: string;
  group: GroupValues;
  status?: 'active' | 'disable';
  onClick?: (group: GroupValues) => void;
}

function Level(props: ILevelProps) {
  const { name, qtyWords, sign, status, group, onClick } = props;

  function renderClassName(status: string | undefined) {
    let agrClass = 'level';
    agrClass = status ? `${agrClass} ${status}` : agrClass;
    return agrClass;
  }

  function handleClick() {
    if (onClick && status != 'disable') {
      onClick(group);
    }
  }

  return (
    <div className={renderClassName(status)} onClick={handleClick}>
      <div>
        <div className="level__name">{name}</div>
        <div className="level__qty-words">{qtyWords}</div>
      </div>
      <div className={`level__sign level__sign--${sign.toLocaleLowerCase()}`}>{sign}</div>
    </div>
  );
}

export default Level;
