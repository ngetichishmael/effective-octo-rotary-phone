import React from 'react';

interface ArticleProps {
    article: {
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
    };
}
const NewCard: React.FC<ArticleProps> = ({article}) => {
    return (
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap -mx-3">
        <div
            className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
            {article.urlToImage && (
                <img className="max-w-full w-full mx-auto" src={article.urlToImage} alt={article.title}/>
            )}
            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                <h2 className="text-lg font-bold leading-tight mb-2">{article.title}</h2>
                <p className="hidden md:block text-gray-600 leading-tight mb-1">{article.description}</p>
                <p className="text-gray-600 text-sm mb-2"><strong>Source:</strong> {article.source.name}</p>
                <p className="text-gray-600 text-sm mb-2"><strong>Author:</strong> {article.author}</p>
                <p className="text-gray-600 text-sm mb-2"><strong>Published
                    At:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
            </div>
        </div>
        </div>
        </div>
    );
}

export default NewCard;
