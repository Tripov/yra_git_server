import mysql from "mysql"

export const db = mysql.createConnection({
    host:"cfif31.ru",
    user:"ISPr24-40_CeluikoAV",
    password:"ISPr24-40_CeluikoAV",
    database:"ISPr24-40_CeluikoAV_studentbookdb",
    port:'3306',
})