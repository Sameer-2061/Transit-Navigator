@echo off
echo =========================================
echo Starting Transit Navigator Pro...
echo =========================================

:: Start Backend (cmd /k keeps the window OPEN even if there's an error)
:: --yes flag automatically accepts any npx prompts
start "Backend Server" cmd /k "cd backend && npx --yes ts-node src/server.ts"

:: Start Frontend 
start "Frontend Client" cmd /k "cd frontend && npm run dev"

echo Both servers are launching. Please check the new terminal windows.