import * as React from "react";
import "./MusicCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const cardList = [
  {
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DWXe9gFZP0gtP?utm_source=generator",
    name: "Stress Relief Sounds",
    picUrl: "https://picsum.photos/id/10/340/140",
  },
  {
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0jgyAiPl8Af?utm_source=generator",
    name: "Peaceful Guitar",
    picUrl: "https://picsum.photos/id/10/340/140",
  },
  {
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2pMckE?utm_source=generator",
    name: "Calm Nature Sounds",
    picUrl: "https://picsum.photos/id/10/340/140",
  },
];

export default function MusicCard() {
  return (
    <div>
      {cardList.map((card, index) => {
        return (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/340/140"
              alt="green iguana"
            />
            <CardContent>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                class="collection"
              >
                <Typography gutterBottom variant="h5" component="div">
                  {card.name}
                </Typography>

                <div className="playlist">
                  <iframe
                    //style="border-radius: 12px"
                    src={card.url}
                    width="100%"
                    height="380"
                    frameborder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  /*  */
}
