@echo off
echo Starting cursortryout forum app...
echo.
echo Starting backend server on port 3001...
start "cursortryout Server" cmd /k ""C:\Program Files\nodejs\node.exe" server.js"
timeout /t 3 /nobreak >nul
echo.
echo Starting frontend on port 3000...
start "cursortryout Frontend" cmd /k ""C:\Program Files\nodejs\npm.cmd" run dev"
echo.
echo cursortryout is starting!
echo Backend: http://localhost:3001
echo Frontend: http://localhost:3000
echo.
pause

