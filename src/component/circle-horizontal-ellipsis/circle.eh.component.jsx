import './circle.eh.styles.scss';

const CircleEH = ({ toggleCircleBackground }) => {
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
