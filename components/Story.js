import React from 'react';

const Story = ({ story, removeStory }) => {
    const placeholderImage = 'https://placehold.co/600x400';
    const imageUrl = story.image_url || placeholderImage;

    return (
        <div className="story">
            <img src={imageUrl} alt="Story" className="story-image" />
            <div className="story-content">
                <h2>{story.title}</h2>
                <p>{story.description}</p>
                <p><strong>Author:</strong> {story.creator || 'Unknown'}</p>
                <a href={story.link} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
};

export default Story;
