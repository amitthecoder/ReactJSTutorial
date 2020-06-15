import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KiPP_BSdwhQD_izF8UdYySML0xy9X2Ob-5ElRrUAfE4",
  },
});
