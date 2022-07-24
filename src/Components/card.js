import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getProducts } from "../Redux/Actions/actionCreator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MediaCard() {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.products.title);

    const actionTest = () => {
        dispatch(getProducts("Dummy data"));
    };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {selector}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={actionTest} size="small">
                    Buy
                </Button>
                <Button size="small">Details</Button>
            </CardActions>
        </Card>
    );
}
