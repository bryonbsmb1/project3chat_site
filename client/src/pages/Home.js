import React from 'react';
import { Grid } from '@mui/material';
import Leftbar from '../components/Leftbar'
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
import { QUERY_POSTS } from '../utils/queries';
import { useQuery } from '@apollo/client';



const Home = () => {

  const { loading, error, data } = useQuery(QUERY_POSTS);
  console.log(loading, error, data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
    <Grid container>
    <Grid item sm={2} xs={2}>
      <Leftbar />
    </Grid>
    <Grid item sm={7} xs={10}>
      <Feed posts={data.posts}/>

    </Grid>
    <Grid item sm={3} xs={3}>
      <Rightbar />
    </Grid>
  </Grid>
    </>
  )
}

export default Home;
