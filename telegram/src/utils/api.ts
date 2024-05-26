import axios from 'axios';
import { Campaign } from '../types';

const API_URL = 'http://localhost:3000/campaigns';

export const getCampaigns = async (): Promise<Campaign[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};
