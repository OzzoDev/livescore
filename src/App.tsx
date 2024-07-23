import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import APIClient from './services/api-client' 
import axios from 'axios'

interface Data{ 
  id: number,
  name: string
}

const apiClient = new APIClient('/fixtures');

function App() {
  useEffect(() => {
    const fetchFootballData = async () => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            headers: {
                'X-RapidAPI-Key': '371f3a3923mshd7c1b5aa7dce86ep17b1b0jsn9fcd770bb9ee',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    fetchFootballData();
}, []);

  return <h1>hej</h1>
}

export default App
