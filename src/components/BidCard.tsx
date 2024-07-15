import { FC } from 'react';
import { IBidData } from '../types/types';
import { BidInfoItem } from './BidInfoItem';
import { Attachment } from './Attachment';

interface IProps {
  data: IBidData;
}

export const BidCard: FC<IProps> = ({ data }) => {
  return (
    <div className='w-full max-w-[768px] p-6 rounded-lg shadow-sm flex flex-wrap gap-2 max-h-max bg-white'>
      <div className='flex items-center justify-between w-full'>
        <BidInfoItem label='ID' value={data.id} />
        <BidInfoItem
          label='Due / Close Date (EST)'
          value={data.dueDate}
          className='max-w-max w-full'
        />
      </div>
      <h2 className='my-4 font-bold text-3xl'>{data.title}</h2>
      <BidInfoItem
        label='Main Category'
        value={data.mainCategory}
        className='w-full'
      />
      <BidInfoItem
        label='Solicitation Type'
        value={data.solicitationType}
        className='w-full'
      />
      <BidInfoItem
        label='Solicitation Summary'
        value={data.solicitationSummary}
        className='w-full flex-col'
      />

      <h5 className='font-bold my-4 text-2xl'>Attachments:</h5>
      <ul className='w-full flex flex-col'>
        {data.attachments?.map((attachment, index) => (
          <Attachment data={attachment} key={index + attachment.title} />
        ))}
      </ul>
    </div>
  );
};
