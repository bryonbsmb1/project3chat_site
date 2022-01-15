import React from 'react';
import { Grid } from '@mui/material';
import Leftbar from '../components/Leftbar'
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
import { QUERY_POSTS, QUERY_CATEGORIES } from '../utils/queries';
import { useQuery } from '@apollo/client';



const Home = () => {

  const { loading, error, data } = useQuery(QUERY_POSTS);
  const { loading:categoriesLoading, error:categoriesError, data:categoriesData } = useQuery(QUERY_CATEGORIES);
  

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
    <Grid container>
    <Grid item sm={2} xs={2}>
      {categoriesData && <Leftbar categories={categoriesData.categories} />}
    </Grid>
    <Grid item sm={7} xs={10}>
      <Feed posts={data.posts}/>

    </Grid>
    <Grid item sm={3} xs={3}>
      {categoriesData && <Rightbar categories={categoriesData.categories} />}
    </Grid>
  </Grid>
    </>
  )
}

export default Home;
