import { useEffect, useState } from 'react';
import './App.css';
import NewCard from './components/NewCard';
import axios from 'axios';

interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

function App() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2024-06-02&sortBy=publishedAt&apiKey=${import.meta.env.VITE_REACT_APP_NEWS_API_KEY}`);
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchNews().then(r => console.log(r));
    }, []);

    return (
        <div>
            <h1>Latest News</h1>
            {articles.map((article, index) => (
                <NewCard key={index} article={article} />
            ))}
        </div>
    );
}

export default App;
