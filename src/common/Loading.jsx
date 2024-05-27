import { FadeLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='h-[70vh] flex flex-col justify-center items-center'>
      <FadeLoader color='#d63031' size={100} />
    </div>
  );
};

export default Loading;
