import axios from "../../axios";
import Menu from "./Menu";
import { Box,Link } from '@mui/material';

const Header = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridAutoColumns: '1fr',
                gap: 1,
                alignItems: 'center',
                marginLeft:4
            }}
        >
            <Box sx={{ gridRow: '1'}}>
                <Link href="/"><img src={`${axios.defaults.apiURL}/img/logo.png`} alt="logo"/></Link>
            </Box>

            <Box
                sx={{ gridRow: '1', gridColumn: '5/6' }}
            >
                <Menu classname={"link"}/>
            </Box>
        </Box>
    )
}

export default Header;