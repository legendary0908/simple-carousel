import { useState } from "react";

import ArrowNextIcon from "assets/images/arrow_right.svg";
import ArrowPrevIcon from "assets/images/arrow_left.svg";
import "./swiper.styles.scss";

type Props = {
  children: any;
  itemWidth: number;
};

const Swiper: React.FC<Props> = ({ children, itemWidth }: Props) => {
  const [offsetX, setOffsetX] = useState<number>(0);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const length = children.length;

  const moveItem = (idx: number) => {
    setCurrentIdx(idx);
    setOffsetX(-((itemWidth + 30) * idx));
  };

  const onPrev = () => {
    const idx = !currentIdx ? length - 4 : currentIdx - 1;
    moveItem(idx);
  };

  const onNext = () => {
    const idx = currentIdx >= length - 4 ? 0 : currentIdx + 1;
    moveItem(idx);
  };

  return (
    <div className="swiper">
      <img
        src={ArrowPrevIcon}
        alt="arrow-prev"
        className="swiper-list-prev"
        onClick={onPrev}
      />
      <div className="swiper-container">
        <ul
          className="swiper-list"
          style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
        >
          {children}
        </ul>
      </div>
      <img
        src={ArrowNextIcon}
        alt="arrow-next"
        className="swiper-list-next"
        onClick={onNext}
      />
    </div>
  );
};

export default Swiper;
