"use server"
import youtubeHandler from './youtubeSearch';
import wikipediahandler from './wikipediaSearch';
import openstackHandler from './openStaxSearch';

export default async function aggregateHandler(query: string) {
  

  try {
    // Fetch data from YouTube, Wikipedia, OpenStax APIs
    // const youtubeData = await axios.post('/api/youtubeSearch', { query: youtubeQuery });
    const youtubeData = await youtubeHandler(query);
    const wikipediaData = await wikipediahandler(query);
    const openStaxData = await openstackHandler(query);

    // Combine data
    const aggregatedData = {
      youtube: youtubeData.videos,
      wikipedia: wikipediaData.pages,
      openStax: openStaxData.content
    };

    return {
        status: 200,
        data: aggregatedData
    }
  } catch (error) {
    return {
        error
    }
  }
}
