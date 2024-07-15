import { FC } from 'react';
import { Spinner } from './Spinner';

interface IProps {
  onClick?: () => void;
  loading: boolean;
  text: string;
}

export const Button: FC<IProps> = ({ onClick, loading, text }) => {
  return (
    <button
      onClick={onClick}
      className='w-max min-w-16 py-2 px-3 text-white bg-slate-900 h-max rounded-sm flex justify-center items-center'
    >
      {loading ? <Spinner /> : text}
    </button>
  );
};
