import React, { useState, useEffect } from 'react'
import { storyUrl, getStory } from '../services/hnApi';


const Story = ({ storyId }) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);
    console.log('story', story)
    return story && story.url ? (
        JSON.stringify(story)
        // <>
        //     <a href={story.url}> <p> {story.title} </p> </a>
        // By: <p>{story.by}</p>
        // Posted: <p>{story.time}</p>
        // </>
    ): null;
};

export default Story;