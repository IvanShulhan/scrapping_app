import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => (
  <div className='p-4 bg-slate-50 w-full min-h-screen'>
    <div className='container mx-auto'>
      <div className='flex flex-col items-center'>
        <h1 className='mb-5 text-4xl font-bold text-slate-700'>Web Scraper App</h1>
        <div className="h-[1px] w-full bg-slate-500 mb-4" />
        <div className='w-full flex-grow flex flex-col items-center'>{children}</div>
      </div>
    </div>
  </div>
);
