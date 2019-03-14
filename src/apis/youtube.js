import axios from 'axios';
const KEY = 'AIzaSyBZsHAZJ6vgQJzt0NWQkV3GkYdi3SbBGpg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params :{
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});