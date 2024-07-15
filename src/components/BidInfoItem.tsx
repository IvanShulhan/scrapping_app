import { FC } from 'react';

interface IProps {
  label: string;
  value?: string | string[];
  className?: string;
}

export const BidInfoItem: FC<IProps> = ({ label, value, className = '' }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <span>{label}:</span>
      <h6 className='font-bold'>{value}</h6>
    </div>
  );
};
