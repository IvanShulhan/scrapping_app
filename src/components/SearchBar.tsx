import { FC } from 'react';
import { Button } from './Button';

interface IProps {
  value: string;
  loading: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  error: boolean;
}

export const SearchBar: FC<IProps> = ({
  value,
  onChange,
  onSubmit,
  loading,
  error,
}) => {
  return (
    <div className='w-full max-w-96 p-8 rounded-lg shadow-sm flex gap-2 max-h-max mb-10 bg-white'>
      <div className='relative flex-grow'>
        <input
          className={`border rounded-sm p-2 w-full ${
            error ? 'border-red-700' : 'border-slate-300'
          }`}
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter bid ID'
        />
        {error && (
          <span className='absolute top-full left-0 text-red-700 text-xs'>
            Invalid type of id
          </span>
        )}
      </div>

      <Button text='Submit' onClick={onSubmit} loading={loading} />
    </div>
  );
};
