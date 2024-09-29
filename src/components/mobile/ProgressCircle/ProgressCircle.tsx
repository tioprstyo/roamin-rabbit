/* eslint-disable react/react-in-jsx-scope */
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProgressCircle = (
  props: CircularProgressProps & { value: number; total?: number },
) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        size={130}
        thickness={5}
        sx={{
          color: '#9E9E9E',
          boxShadow: 'inset 0 0 0px 15px #FFEC69',
          width: '120px',
          height: '100px',
          borderRadius: '100%',
          backgroundColor: 'transparent',
          padding: 9,
        }}
        variant='determinate'
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='caption'
          component='div'
          textAlign='center'
          color='text.secondary'
        >
          <b className='text-sm text-black dark:text-white'>{`${props.total} MB`}</b>{' '}
          <br />{' '}
          <span className='text-[10px] text-black dark:text-white'>
            REMAINING DATA
          </span>{' '}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressCircle;
