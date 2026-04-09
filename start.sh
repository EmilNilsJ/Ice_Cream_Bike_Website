#!/bin/bash
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
  echo "Generating Prisma client..."
  npm run prisma:generate
fi
npm run dev
