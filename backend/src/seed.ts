// backend/src/seed.ts

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Station } from './models/Station';
import { existingMetroGraph } from './algorithms/graphData';

dotenv.config();

async function seedDatabase() {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_URI || "");
        console.log("Connected Successfully.");

        // SDE NUCLEAR OPTION: Drop the entire collection to destroy stubborn indexes permanently
        try {
            await mongoose.connection.db!.dropCollection('stations');
            console.log("Wiped old collection and stubborn indexes completely.");
        } catch (err) {
            console.log("No old collection found. Fresh start.");
        }

        // Force Mongoose to build only the NEW correct rules (City + Station Name combination)
        await Station.syncIndexes();

        const stationsArray: any[] = [];

        Object.keys(existingMetroGraph).forEach(cityName => {
            const cityNetwork = existingMetroGraph[cityName];
            Object.keys(cityNetwork).forEach(stationName => {
                stationsArray.push({
                    name: stationName,
                    city: cityName,
                    lat: cityNetwork[stationName].lat,
                    lng: cityNetwork[stationName].lng,
                    connections: cityNetwork[stationName].connections,
                    isOperational: true
                });
            });
        });

        await Station.insertMany(stationsArray);
        console.log("Metro Network Data seeded into MongoDB successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Database Seeding Error:", error);
        process.exit(1);
    }
}

seedDatabase();