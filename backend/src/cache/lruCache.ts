class LRUCache {
    private capacity: number;
    private cache: Map<string, any>;
    private hits: number = 0;
    private misses: number = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: string) {
        if (!this.cache.has(key)) {
            this.misses++;
            return null;
        }
        this.hits++;
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }

    put(key: string, value: any) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const firstKey = this.cache.keys().next().value;
            if (firstKey) this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }

    // New telemetry metric extraction
    getTelemetry() {
        const total = this.hits + this.misses;
        const rate = total === 0 ? 0 : Math.round((this.hits / total) * 100);
        return {
            hits: this.hits,
            misses: this.misses,
            totalRequests: total,
            hitRate: `${rate}%`
        };
    }

    clear() {
        this.cache.clear();
        this.hits = 0;
        this.misses = 0;
        console.log("[CACHE] Memory Wiped (Graph Topology Changed)");
    }
}

export const routeCache = new LRUCache(100);
