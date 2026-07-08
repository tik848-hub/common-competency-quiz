// ตั้งค่าระบบ — แก้ URL ด้านล่างหลัง Deploy Google Apps Script แล้ว
const CONFIG = {
  // วาง URL ที่ได้จากการ Deploy Apps Script เป็น Web App (ลงท้ายด้วย /exec)
  GAS_URL: "https://script.google.com/macros/s/AKfycbwwqXDay_-EQrfMxXYPJK3oX3PGWZQhW1Kh6_bne2GfxlztGYVrdP47dGzdzOCuV0ZSyQ/exec",
  PASS_THRESHOLD: 0.8, // เกณฑ์ผ่าน 80%
  HOSPITAL_NAME: "โรงพยาบาลจักรีนฤบดินทร์ คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี",
  SYSTEM_NAME: "ระบบทดสอบความรู้ Common Competency พยาบาล"
};
