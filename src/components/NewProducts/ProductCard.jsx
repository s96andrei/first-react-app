import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

const ProductCard = ({ id, product, price, quantity, clearProduct }) => {
	//const { product, price, quantity, clearProduct } = props;
	return (
		<>
			<Card sx={{ height: 100, width: 100, border: 0, boxShadow: 0 }}>
				<CardActionArea>
					{/* <CardMedia
          component="img"
          height="140"
          image="https://www.istockphoto.com/ro/fotografie/t%C3%A2n%C4%83r-manager-fat%C4%83-schimbare-un-semn-de-la-%C3%AEnchis-la-semn-deschis-pe-u%C8%99%C4%83-gm1356666723-430786989?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fstore&utm_term=store%3A%3A%3A"
          alt="green iguana"
        /> */}
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{product}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{price}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{quantity}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<IconButton onClick={() => clearProduct(id)}>
				<ClearIcon></ClearIcon>
			</IconButton>
			{/* child-parent communication */}
		</>
	);
};

export default ProductCard;
