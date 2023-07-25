import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width={`300px`}>
      <Card>
        <CardMedia
          component={`img`}
          height={`auto`}
          image={`https://source.unsplash.com/random`}
          alt={`unsplash image`}
        />
        <CardContent>
          <Typography gutterBottom={true} variant={`h5`} component={`div`}>
            React
          </Typography>
          <Typography variant={`body2`} color={`text.secondary`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            commodi sit eligendi suscipit, autem fugit cumque praesentium quos
            rem beatae consequuntur aliquam, fugiat pariatur ullam, enim quasi
            temporibus sapiente molestias?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size={`small`} variant={`contained`}>
            Share
          </Button>
          <Button size={`small`}>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
