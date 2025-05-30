Five m bot discord thai
คำอธิบายโดยรวม (Overview)

ภาษาไทย : 

โค้ดชุดนี้เป็น Discord Bot ที่เขียนด้วย JavaScript ใช้ Discord.js ไลบรารี สำหรับจัดการระบบสมัคร Whitelist ผ่านแบบฟอร์ม Modal ภายใน Discord
หลักการทำงานของบอทคือ:

- เมื่อล็อกอินและพร้อมใช้งาน จะส่งข้อความในช่อง Discord ที่กำหนดไว้ ให้ผู้ใช้สามารถกดปุ่ม “สมัคร Whitelist” เพื่อเปิดฟอร์มกรอกข้อมูล
- ฟอร์มประกอบด้วยช่องกรอก ชื่อ IC, อายุ, เพศ, และ Steam HEX ซึ่งแต่ละช่องจะมีการตรวจสอบความถูกต้องของข้อมูล (validation)
- หากข้อมูลถูกต้อง ระบบจะบันทึกข้อมูลลงไฟล์ JSON (ผ่าน formLogger.js) และส่งข้อมูลนั้นในรูปแบบ Embed ไปยังช่องรายงานที่ Admin ดูแล
- หลังจากนั้นระบบจะมอบ Role Whitelist ให้ผู้สมัคร และแจ้งเตือนในช่องแจ้งเตือนว่าได้รับ Role เรียบร้อยแล้ว
- มีระบบจัดการ Error ทั้งจาก process unhandledRejection และ client error เพื่อส่งแจ้งเตือนหรือเก็บ log ใน Discord
- ยังมีฟังก์ชันช่วยลบข้อความเก่าที่บอทเคยส่งในช่องนั้น เพื่อลดความรก และแสดงข้อความเริ่มต้นพร้อมคำแนะนำและรูปภาพประกอบ
- bot ยังใช้ไฟล์ config.json เพื่อเก็บ token, id ของ channel และ role ต่าง ๆ เพื่อให้ง่ายต่อการปรับแต่ง
- โดยรวมบอทนี้ถูกออกแบบมาเพื่อให้การสมัคร Whitelist ง่ายและเป็นระเบียบมากขึ้นใน Discord server ด้วยระบบ modal ฟอร์มและการแจ้งเตือนอัตโนมัติ

English :

This code is a Discord Bot written in JavaScript using the Discord.js library, designed to manage a Whitelist application system via a modal form inside Discord.
The bot workflow is as follows:

- When logged in and ready, the bot sends a message in a specified Discord channel with a "Apply Whitelist" button.
- When a user clicks the button, a modal form appears, requesting inputs: IC Name, Age, Gender, and Steam HEX, each with validation checks.
- If the inputs are valid, the bot logs the submission to a JSON file (handled by formLogger.js) and sends an embed message with the application details to an admin report channel.
- The bot then assigns the Whitelist role to the applicant and notifies in a specified notification channel that the user has received the role.
- It handles errors from unhandled promise rejections and client errors, logging and optionally sending alerts in Discord.
- The bot also cleans up old messages it sent previously in the form channel to keep things tidy and posts a startup embed with instructions and images.
- Configuration data such as bot token, channel IDs, and role IDs are stored in a config.json file for easy management and customization.
- Overall, this bot is designed to streamline and automate the Whitelist application process on a Discord server, providing a user-friendly form, validation, logging, and automatic role assignment with notifications.

นี่คือบอทตัวแรกที่ผมได้พัฒนาขึ้น โค้ดอาจดูซับซ้อนหรือไม่เป็นระเบียบในบางส่วน
แต่สิ่งที่สำคัญที่สุดคือมันสามารถทำงานได้อย่างถูกต้องโดยไม่มีข้อผิดพลาด
ผมยินดีรับคำแนะนำและข้อคิดเห็นเพื่อนำไปพัฒนาและปรับปรุงบอทให้ดียิ่งขึ้นต่อไป

This is the first bot I have developed. The code may appear complex or somewhat disorganized in parts
but the most important thing is that it runs correctly without errors. 
I welcome any suggestions and feedback to further improve and enhance the bot.

ขอบคุณ จิมมี่
Thanks, Jimmy.

contact 
discord : jiimmmmy._.
facebook : https://www.facebook.com/jimmy.lionez
