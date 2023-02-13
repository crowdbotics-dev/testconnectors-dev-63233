import axios from "axios"
import {
  NEW_CONNECTOR112233445566_USERNAME,
  NEW_CONNECTOR112233445566_PASSWORD
} from "react-native-dotenv"
const newConnector = axios.create({
  baseURL: "http://cbtcms.herokuapp.com/case/2830/",
  auth: {
    username: NEW_CONNECTOR112233445566_USERNAME,
    password: NEW_CONNECTOR112233445566_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
