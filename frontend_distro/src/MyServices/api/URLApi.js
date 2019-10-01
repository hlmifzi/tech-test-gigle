import axios from 'axios';
import cookie from 'react-cookies'

export default axios.create({
   baseURL: 'http://localhost:3001/',
   headers: {
      'Authorization': `Bearer ${cookie.load('JWT')}` ,
      'Content-Type': 'application/json',

   }
})
