
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography, styled } from '@mui/material';
import {Link} from 'react-router-dom';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const Home = () => {

    return (
        <Header>
            <Typography variant="h4">Welcome</Typography>
            <Stack spacing={2} direction="row">
            <Link to='/add'><Button variant="contained">Add User</Button></Link>
            </Stack>
        </Header>
    )
}

export default Home;