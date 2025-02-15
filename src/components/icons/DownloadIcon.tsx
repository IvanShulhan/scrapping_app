import { FC } from 'react';

interface IProps {
  height?: number | string;
  width?: number | string;
  fill?: string;
}

export const DownloadIcon: FC<IProps> = ({
  width = 24,
  height = 24,
  fill = '#b91c1c',
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={height}
    viewBox='0 -960 960 960'
    width={width}
    fill={fill}
    style={{
      minWidth: width,
    }}
  >
    <path
      xmlns='http://www.w3.org/2000/svg'
      d='M260-200q-74.85 0-127.42-52.23Q80-304.46 80-379.31q0-68.77 47-122.07 47-53.31 116.85-57.24 10.07-74.3 74.61-136.61Q383-757.54 460-757.54q16.08 0 28.04 11.96T500-717.54v291.23l82.46-82L610.77-480 480-349.23 349.23-480l28.31-28.31 82.46 82v-291.23q-75.23 3.23-127.62 65.42Q280-589.92 280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-49.54-22-91.04-22-41.5-58-68.96v-47.62q56.31 31.16 88.15 86.97Q720-584.85 720-520v40h24.62q57.46 1.85 96.42 42.19Q880-397.46 880-340q0 58.85-40.58 99.42Q798.85-200 740-200H260Zm220-298.77Z'
    />
  </svg>
);
