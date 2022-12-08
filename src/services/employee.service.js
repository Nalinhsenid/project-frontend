import authHeader from "@/services/auth-header";
import httpCommon from "@/http-common";

class EmployeeService {

    getALlEmployees() {
        return httpCommon.get('/employees',{ headers: authHeader() });
    }

    createEmployee(data) {
        return httpCommon.post(
            "/register",
            data,
            { headers: authHeader()});
    }

    // updateEmployee(id, data) {
    //     return httpCommon.put(`/tutorials/${id}`, data,{ headers: authHeader() });
    // }

    deleteEmployee(id) {
        return httpCommon.delete(`/employees/${id}`,{ headers: authHeader() });
    }



}

export default new EmployeeService();