import React, {useState, useEffect} from 'react';
import { getStoryIds, getStory } from '../services/hnApi';
import Story from '../components/Story';

const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(response => setStoryIds(response));
    }, []);

    return storyIds.map(storyId => (
        <Story key = {storyId} storyId = {storyId} />
    ));
}

export default StoriesContainer;