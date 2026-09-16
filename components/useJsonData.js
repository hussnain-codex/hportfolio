'use client';

import { useEffect, useState } from 'react';

/**
 * Fetches a JSON file from /public (e.g. "/data/services.json") on mount.
 * Returns { data, loading, error }.
 */
export default function useJsonData(path) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        fetch(path)
            .then((res) => {
                if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
                return res.json();
            })
            .then((json) => {
                if (!cancelled) {
                    setData(json);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (!cancelled) {
                    setError(err);
                    setLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [path]);

    return { data, loading, error };
}
