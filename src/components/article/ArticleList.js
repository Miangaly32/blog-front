import { useState } from 'react';
import {Select,MenuItem,OutlinedInput , FormControl,Grid,Divider, Box, Typography,Breadcrumbs } from '@mui/material';
import StyledBreadcrumb from "../StyledBreadcrumb";
import {ArticleCard} from "../index";

const ArticleList = ({articles,categories}) => {

    const [currentCategory, setCurrentCategory] = useState("");

    const filteredArticles = currentCategory === "" ? articles : articles.filter(article => (
        article["category"].toLowerCase().includes(currentCategory.toLowerCase())
    ))

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCurrentCategory(value);
    };

    return (
        <Grid
            sx={{ml:15,mt:5,mr:18,mb:10}}
        >
            <Breadcrumbs aria-label="breadcrumb">
                <StyledBreadcrumb
                    component="a"
                    href="/articles"
                    label="Catégories"
                />
                <StyledBreadcrumb label="Liste" />
            </Breadcrumbs>

            <Box
                sx={{
                    display: 'grid',
                    gridAutoColumns: '1fr',
                    gap: 1,
                    alignItems:'center',
                    mt:4
                }}
            >
                <Box sx={{ gridRow: '1', gridColumn: 'span 2' }}>
                    <Typography variant="h5">
                        LISTE DES ARTICLES
                    </Typography>
                    <Divider />
                </Box>

                <Box
                    sx={{ gridRow: '1', gridColumn: '5/6' }}
                >
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <Select
                            displayEmpty
                            value={currentCategory}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <Typography variant="subtitle1">Catégories</Typography>;
                                }
                                return selected;
                            }}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <Typography variant="subtitle1">Catégories</Typography>
                            </MenuItem>
                            <MenuItem value="">
                                <Typography variant="subtitle1">Tous</Typography>
                            </MenuItem>
                            {categories.map(category => (
                                <MenuItem key={category.id} value={category.name} >{category.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            <Grid container  rowSpacing={2}  sx={{mt:5}} >
                {
                    filteredArticles.map(article => (
                    <Grid item xs={4} key = {article['id']} sx={{alignItems: "center"}}>
                        <ArticleCard article = {article} />
                    </Grid>
                    ))
                }
            </Grid>
        </Grid>
    );
}

export default ArticleList;