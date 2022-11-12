import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { changeGroup } from 'redux/slices/dictionarySlice';
import { GroupValues } from 'shared/types';
import Level, { ILevelProps } from '../level/Level';
import './LevelList.css';

function LevelList() {
  const { searchedWord, group } = useSelector((state: RootState) => state.dictionary);
  const dispatch = useDispatch();

  const levels: ILevelProps[] = [
    { name: 'Easy', qtyWords: '1-600', sign: 'A1', group: 0 },
    { name: 'Easy', qtyWords: '601-1200', sign: 'A2', group: 1 },
    { name: 'Medium', qtyWords: '1201-1800', sign: 'B1', group: 2 },
    { name: 'Medium', qtyWords: '1801-2400', sign: 'B2', group: 3 },
    { name: 'Hard', qtyWords: '2401-3000', sign: 'C1', group: 4 },
    { name: 'Hard', qtyWords: '3001-3600', sign: 'C2', group: 5 },
  ];

  function handleLevelClick(group: GroupValues) {
    dispatch(changeGroup(group));
  }

  return (
    <div className="level-list">
      {levels.map((level) => {
        let status: undefined | 'active' | 'disable';
        if (group === level.group) status = 'active';
        if (searchedWord.length) status = 'disable';
        return (
          <Level
            key={level.group}
            name={level.name}
            qtyWords={level.qtyWords}
            sign={level.sign}
            group={level.group}
            status={status}
            onClick={handleLevelClick}
          />
        );
      })}
    </div>
  );
}

export default LevelList;
