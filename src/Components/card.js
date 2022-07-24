import * as React from "react";
import { styled } from "@mui/material/styles";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Box,
    Grid,
} from "@mui/material";

export default function ProductCard({ title, price, description, productImg }) {
    // const actionTest = () => {
    //     dispatch(getProducts("Dummy data"));
    // };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={productImg}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">BUY</Button>
                            <Button size="small">{price}</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
