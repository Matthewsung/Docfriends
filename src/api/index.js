import axios from 'axios'

const INFO =  axios.get('https://docfriends.github.io/Docfriends_Front_Recruit/api/company.json')
const EXPERTS = axios.get('https://docfriends.github.io/Docfriends_Front_Recruit/api/companyExpert.json')
const EXPERTSDETAIL = axios.get('https://docfriends.github.io/Docfriends_Front_Recruit/api/expert.json')

export {INFO, EXPERTS, EXPERTSDETAIL}