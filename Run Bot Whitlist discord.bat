@echo off
REM ตั้งรหัสภาษาเป็น UTF-8
chcp 65001 >nul

REM ไปยังโฟลเดอร์บอท
cd /d "xxxxx"

REM ใช้ Node โดยตรง แสดงสีใน console
REM และใช้ tee.exe เก็บ log โดยไม่ผ่าน PowerShell (เพื่อไม่ตัด ANSI สี)
REM ถ้าไม่มี tee.exe จะใช้ fallback ด้านล่าง

REM ตรวจว่ามี tee.exe หรือไม่ (อยู่ใน Git Bash หรือ Git for Windows)
where tee >nul 2>&1
if %errorlevel%==0 (
    node --trace-warnings index.js 2>&1 | tee -a bot.log
) else (
    echo ⚠️ ไม่พบ tee.exe จะไม่เก็บ log (แสดงสีใน console ได้เท่านั้น)
    node --trace-warnings index.js
)

pause
