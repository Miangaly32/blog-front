import {Box, CardActions, CardMedia,CardContent ,Card,Button ,Typography } from '@mui/material';
import {Link} from "react-router-dom";
import {FacebookShareButton} from "react-share";
import { useLocation } from 'react-router-dom';
import axios from "../../axios";

const ArticleCard = ({article}) => {
    const img = article['thumbnail']!=='' ? `${axios.defaults.apiURL}/uploads/${article['thumbnail']}` : `${axios.defaults.apiURL}/img/thumbnail.png`

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none"
    };

    const location = useLocation()

    const buttonStyle = { textTransform: 'none',fontSize:"14px", color:"#0061AE"};

    return (
        <Card sx={{ maxWidth: 350,minHeight:500 }}>
            <CardMedia
                component="img"
                image={img}
                height="300"
                alt={article['title']}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {article['title']}
                </Typography>
                <Typography variant="body2" dangerouslySetInnerHTML={{ __html: article['extract'] }}  sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }} />
            </CardContent>
            <CardActions>
                <Box
                    sx={{
                        display: 'grid',
                        gridAutoColumns: '1fr',
                        gap: 1,
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ gridRow: '1', gridColumn: 'span 2' }}>
                        <FacebookShareButton
                            disabledStyle
                            size="small"
                            url={`${axios.defaults.baseURL}/${location.pathname}`}
                            // quote={props.joke.setup + props.joke.punchline}
                            // hashtag="#programing joke"
                            >
                            <Button size="small" sx={buttonStyle}> Partager</Button>
                        </FacebookShareButton>
                    </Box>
                    <Box
                        sx={{ gridRow: '1', gridColumn: '3 / 4' }}
                    >
                        <Link
                            to={{
                                pathname: "/articleDetail",
                                state: { article }
                            }}
                            style={linkStyle}
                        >
                            <Button size="small" sx={buttonStyle}> Voir plus </Button>
                        </Link>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
}

export default ArticleCard;