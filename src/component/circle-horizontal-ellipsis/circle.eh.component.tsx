import React, { MouseEventHandler } from 'react';
import './circle.eh.styles.scss';

type CircleEHProps = {
  toggleCircleBackground: MouseEventHandler;
};

// const CircleEH: React.FC<CircleEHProps> = ({ toggleCircleBackground }:CircleEHProps) => {
const CircleEH = ({ toggleCircleBackground }: CircleEHProps) => {
  return (
    <div
      onMouseEnter={toggleCircleBackground}
      onMouseLeave={toggleCircleBackground}
      className='align-center justify-start circle border-circle position-relative order-3'
    >
      <div className='flex abs-center'>
        <div className='circle-sm border-circle'></div>
        <div className='circle-sm border-circle'></div>
        <div className='circle-sm border-circle'></div>
      </div>
    </div>
  );
};

export default CircleEH;
