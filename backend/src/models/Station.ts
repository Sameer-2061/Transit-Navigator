import mongoose from 'mongoose';

const connectionSchema = new mongoose.Schema({
    distance: { type: Number, required: true },
    time: { type: Number, required: true },
    fare: { type: Number, required: true },
    line: { type: String, required: true }
}, { _id: false });

const stationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    connections: {
        type: Map,
        of: connectionSchema
    },
    isOperational: { type: Boolean, default: true }
});

// Ensures no duplicate stations in the SAME city
stationSchema.index({ name: 1, city: 1 }, { unique: true });

export const Station = mongoose.model('Station', stationSchema);