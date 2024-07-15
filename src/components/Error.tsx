import { FC } from 'react';

interface IProps {
  text: string;
}

export const Error: FC<IProps> = ({ text }) => (
  <div className='w-full max-w-96 p-6 rounded-lg shadow-sm bg-red-200'>
    <span className="text-red-700 font-semibold">{text}</span>
  </div>
);
