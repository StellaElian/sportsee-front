import { useState, useEffect } from 'react';
import { USER_MOCK_DATA } from '../../data/mock';

// Interrupteur
const IS_MOCKED = true;


export function useFetch(url, token = null) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (IS_MOCKED) {
            // MODE MOCK: simu de 500ms
            setTimeout(() => {
                const mockUser = USER_MOCK_DATA[0];

                if (url.includes('user-info')) {
                    const stats = {
                        totalSessions: mockUser.runningData.length,
                        totalDistance: mockUser.runningData.reduce((total, jour) => total + jour.distance, 0),
                        totalDuration: mockUser.runningData.reduce((total, jour) => total + jour.duration, 0),
                        totalCalories: mockUser.runningData.reduce((total, jour) => total + jour.caloriesBurned, 0)
                    };
                    setData({
                        profile: mockUser.userInfos,
                        statistics: stats
                    });

                } else if (url.includes('user-activity')) {
                    setData(mockUser.runningData);
                }

                setLoading(false);
            }, 500);

        }
        else {
            const fetchData = async () => {
                try {
                    const response = await fetch(url, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [url, token]);

    return { data, isLoading, error };
}
