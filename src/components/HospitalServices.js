import axios from 'axios'

const HOSPITAL_API_BASE_URL = "http://localhost:8010/api/test/showhospital";

class HospitalServices {
    getHospital() {
        return axios.get(HOSPITAL_API_BASE_URL);
    }
}

export default new HospitalServices();