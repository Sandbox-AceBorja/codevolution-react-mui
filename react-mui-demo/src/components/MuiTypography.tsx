import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant={'h1'} gutterBottom>h1 Heading</Typography>
        <Typography variant={'h2'}>h2 Heading</Typography>
        <Typography variant={'h3'}>h3 Heading</Typography>
        <Typography variant={'h4'} component={`h1`} gutterBottom>h4 Heading</Typography>
        <Typography variant={'h5'}>h5 Heading</Typography>
        <Typography variant={'h6'}>h6 Heading</Typography>

        <Typography variant={'subtitle1'}>Sub Title 1</Typography>
        <Typography variant={'subtitle2'}>Sub Title 2</Typography>

        <Typography variant={'body1'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Qui nihil fuga, deleniti repellat optio perferendis laboriosam voluptatibus modi recusandae 
          voluptas harum quia veniam rerum magni necessitatibus accusamus debitis vel numquam.
        </Typography>
        <Typography variant={'body2'} gutterBottom>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Error numquam ullam delectus deserunt. Ratione fuga dolor officiis architecto tenetur id 
          accusamus corporis porro optio dolorum eum temporibus aliquid, voluptatibus nisi.
        </Typography>
    </div>
  )
}
