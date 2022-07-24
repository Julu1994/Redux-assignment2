import * as React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
} from "@mui/material";

export default function ProductCard({ title, price, description, productImg }) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
                sx={{ maxWidth: 250, minHeight: 300 }}
                alignItems="center"
                justify="center"
                style={{ margin: "auto" }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={productImg}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rating ⭐ {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">BUY</Button>
                    <Button size="small">{price}</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
