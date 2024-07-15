import { FC } from 'react';
import { IFile } from '../types/types';
import { DownloadIcon } from './icons';

interface IProps {
  data: IFile;
}

export const Link: FC<IProps> = ({ data }) => (
  <a href={`https://emma.maryland.gov/${data.link}`} target='_blank' rel='noopener' className='flex gap-1 flex-grow text-right items-center justify-between'>
    {data.fileName} <DownloadIcon />
  </a>
);
