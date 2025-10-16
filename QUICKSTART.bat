@echo off
color 0E
echo ============================================
echo    cursortryout - Forum App
echo    Navy Blue ^& Gold Edition
echo ============================================
echo.
echo Step 1: Installing dependencies...
echo.
call "C:\Program Files\nodejs\npm.cmd" install
echo.
echo ============================================
echo Dependencies installed!
echo.
echo Step 2: Starting servers...
echo.
echo Starting backend server (Port 3001)...
start "cursortryout Server" cmd /k ""C:\Program Files\nodejs\node.exe" server.js"
timeout /t 3 /nobreak >nul
echo.
echo Starting frontend (Port 3000)...
start "cursortryout Frontend" cmd /k ""C:\Program Files\nodejs\npm.cmd" run dev"
echo.
echo ============================================
echo cursortryout is starting!
echo ============================================
echo.
echo Backend API: http://localhost:3001
echo Frontend App: http://localhost:3000
echo.
echo Your browser should open automatically.
echo If not, navigate to: http://localhost:3000
echo.
echo Press any key to exit this window...
pause >nul

