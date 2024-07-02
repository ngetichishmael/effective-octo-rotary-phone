import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Article {
    title: string;
    description: string;
    url: string;
}

const NewsApp = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
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
                <NewsCard key={index} article={article} />
            ))}
        </div>
    );
};

const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
    return (
        <div className="news-card">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
};

export default NewsApp;
