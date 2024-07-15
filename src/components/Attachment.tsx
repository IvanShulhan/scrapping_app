import { FC } from 'react';
import { IAttachment } from '../types/types';
import { Link } from './Link';

interface IProps {
  data: IAttachment;
}

export const Attachment: FC<IProps> = ({ data }) => (
  <li className='flex justify-between gap-4 p-2 border-b-2'>
    <span className='font-semibold max-w-52'>{data.title}</span>
    <ul className='flex flex-col gap-1'>
      {data.files.map((file, idx) => (
        <Link data={file} key={idx + file.fileName} />
      ))}
    </ul>
  </li>
);
