import './main.styles.scss';
import { ReactComponent as Phone } from '../../svgs/phone.svg';
import { ReactComponent as VideoCamera } from '../../svgs/video-camera.svg';
import CircleEH from '../circle-horizontal-ellipsis/circle.eh.component';
import { useEffect } from 'react';

const Main = () => {
  const toggleLiBackground = (e) => {
    const link = e.target;
    const parent = link.closest('.friend');
    const parentClass = parent.classList;
    const circleStyle = parent.querySelector('.circle').style;

    // MouseLeave/UnHover
    if (parentClass.contains('hover')) {
      const circleParent = link.closest('.circle');
      let opacity = 0;

      if (circleParent) opacity = 1;

      circleStyle.opacity = opacity;

      parentClass.remove('hover');

      return;
    }

    //  MouseEnter/Hover
    circleStyle.opacity = 1;
    parentClass.add('hover');
  };

  return (
    <main className='main'>
      <section className='main-header '>
        <h1 className='title'>Friend List</h1>
        <form action='' className='search-friends '>
          <input type='text' placeholder='search friends' />
        </form>
        <ul className='friends-list'>
          <li
            onMouseEnter={toggleLiBackground}
            onMouseLeave={toggleLiBackground}
            className='friends-list__item friend'
          >
            <figure>
              <img
                className='align-center justify-start border-circle order-1'
                height={70}
                width={70}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
              <figcaption className='flex-col order-2'>
                <span className='friend-name'>
                  <strong>Christopher Olano</strong>
                </span>
                <span className='friend-message'>messages</span>
              </figcaption>
              <CircleEH toggleCircleBackground={toggleLiBackground} />
              <img
                className='align-center justify-start border-circle order-4'
                height={20}
                width={20}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
            </figure>
          </li>

          <li
            onMouseEnter={toggleLiBackground}
            onMouseLeave={toggleLiBackground}
            className='friends-list__item friend'
          >
            <figure>
              <img
                className='align-center justify-start border-circle order-1'
                height={70}
                width={70}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
              <figcaption className='flex-col order-2'>
                <span className='friend-name'>
                  <strong>Christopher Olano</strong>
                </span>
                <span className='friend-message'>messages</span>
              </figcaption>
              <CircleEH toggleCircleBackground={toggleLiBackground} />
              <img
                className='align-center justify-start border-circle order-4'
                height={20}
                width={20}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
            </figure>
          </li>

          <li
            onMouseEnter={toggleLiBackground}
            onMouseLeave={toggleLiBackground}
            className='friends-list__item friend'
          >
            <figure>
              <img
                className='align-center justify-start border-circle order-1'
                height={70}
                width={70}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
              <figcaption className='flex-col order-2'>
                <span className='friend-name'>
                  <strong>Christopher Olano</strong>
                </span>
                <span className='friend-message'>messages</span>
              </figcaption>
              <CircleEH toggleCircleBackground={toggleLiBackground} />
              <img
                className='align-center justify-start border-circle order-4'
                height={20}
                width={20}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
            </figure>
          </li>

          <li
            onMouseEnter={toggleLiBackground}
            onMouseLeave={toggleLiBackground}
            className='friends-list__item friend'
          >
            <figure>
              <img
                className='align-center justify-start border-circle order-1'
                height={70}
                width={70}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
              <figcaption className='flex-col order-2'>
                <span className='friend-name'>
                  <strong>Christopher Olano</strong>
                </span>
                <span className='friend-message'>messages</span>
              </figcaption>
              <CircleEH toggleCircleBackground={toggleLiBackground} />
              <img
                className='align-center justify-start border-circle order-4'
                height={20}
                width={20}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
            </figure>
          </li>

          <li
            onMouseEnter={toggleLiBackground}
            onMouseLeave={toggleLiBackground}
            className='friends-list__item friend'
          >
            <figure>
              <img
                className='align-center justify-start border-circle order-1'
                height={70}
                width={70}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
              <figcaption className='flex-col order-2'>
                <span className='friend-name'>
                  <strong>Christopher Olano</strong>
                </span>
                <span className='friend-message'>messages</span>
              </figcaption>
              <CircleEH toggleCircleBackground={toggleLiBackground} />
              <img
                className='align-center justify-start border-circle order-4'
                height={20}
                width={20}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
            </figure>
          </li>
        </ul>
      </section>

      {/* <ul className='align-center justify-center'>
        <li>
          <Phone />
        </li>
        <li>
          <VideoCamera />
        </li>
      </ul> */}
    </main>
  );
};

export default Main;
