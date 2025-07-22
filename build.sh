#!/bin/bash
set -e

echo "🚀 Starting build..."

# Clean install for production
echo "📦 Installing dependencies..."
npm ci

# Build client using workspace command
echo "🔨 Building client..."
npm run build --workspace=client

echo "✅ Build complete!"
echo "📁 Built files in client/dist/"
