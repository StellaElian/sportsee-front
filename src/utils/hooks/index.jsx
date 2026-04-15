import { useState, useEffect } from 'react';

export function useFetch(url, token) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;

        setLoading(true);

        async function fetchData() {
            try {
                const options = token ? { headers: { 'Authorization': `Bearer ${token}` } } : {};
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }

                const result = await response.json();

                setData(result);
            } catch (err) {
                console.log("Erreur API :", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { isLoading, data, error };
}
