import React, { useState, useEffect } from 'react';
import Story from '../components/Story';

const Home = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch('/sample_news_stories.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched data:', data);
                if (data.results && Array.isArray(data.results)) {
                    setStories(data.results);
                    console.log('Stories set:', data.results);
                } else {
                    console.error('Invalid data structure:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchStories();
    }, []);

    const removeStory = (id) => {
        const updatedStories = stories.filter(story => story.id !== id);
        setStories(updatedStories);
    };

    return (
        <div className="app">
            <h1>News Feed</h1>
            <div className="stories">
                {stories.length > 0 ? (
                    stories.map(story => (
                        <Story key={story.id} story={story} removeStory={removeStory} />
                    ))
                ) : (
                    <p>No stories to display</p>
                )}
            </div>
        </div>
    );
};

export default Home;
