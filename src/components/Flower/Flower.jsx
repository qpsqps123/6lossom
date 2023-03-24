import style from './Flower.module.scss';
import classNames from 'classnames';
import messageContext from '@/contexts/messageContext';
import { useContext } from 'react';

const Flower = ({ uid, item, handleOpenMessageDetail }) => {
  const messageVisibility = useContext(messageContext);
  const { id, flowerSrc, nickname } = item;
  const localUid = JSON.parse(localStorage.getItem('uid'));

  const handleFlower = () => {
    handleOpenMessageDetail(messageVisibility, item);
  };

  return (
    <>
      <li
        className={classNames(
          style.flower,
          id % 6 === 0
            ? style.flower0
            : id % 6 === 1
            ? style.flower1
            : id % 6 === 2
            ? style.flower2
            : id % 6 === 3
            ? style.flower3
            : id % 6 === 4
            ? style.flower4
            : style.flower5
        )}
        key={id}
      >
        <button onClick={handleFlower}>
          <img src={flowerSrc} alt="벚꽃 메세지" />
          {nickname}
        </button>
      </li>
    </>
  );
};

export default Flower;
