import CircularProgress, {
CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProgressCircle = (props: CircularProgressProps & { value: number, total?: number },) => {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress size={130} thickness={5} sx={{ 
                color: '#FFEC69',
                boxShadow: "inset 0 0 0px 15px #9E9E9E",
                width: "120px",
                height: "100px",
                borderRadius: "100%",
                backgroundColor: "transparent",
            }} variant="determinate" {...props} />
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
                variant="caption"
                component="div"
                textAlign='center'
                color="text.secondary"
                ><b className='text-sm'>{`${props.total} MB`}</b> <br /> <span className='text-[10px]'>REMAINING DATA</span> </Typography>
            </Box>
        </Box>
    );
}

export default ProgressCircle;