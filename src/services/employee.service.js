import authHeader from "@/services/auth-header";
import httpCommon from "@/http-common";

class EmployeeService {

    getALlEmployees() {
        return httpCommon.get('/employees',{ headers: authHeader() });
    }
    getALlLeaveRequests() {
        return httpCommon.get('/leaves',{ headers: authHeader() });
    }
    getALlLeaveRequestsOfEmployee(id){
        return httpCommon.get(`/leaves/${id}`,{ headers: authHeader() });
    }
    getALlAcceptedLeaveRequestsOfEmployee(id){
        return httpCommon.get(`/leaves/approved/${id}`,{ headers: authHeader() });
    }

    getEmployee(id) {
        return httpCommon.get(`/employees/${id}`,{ headers: authHeader() });
    }


    createEmployee(data) {
        return httpCommon.post(
            "/employees",
            data,
            { headers: authHeader()});
    }

    updateEmployee(id, data) {
        return httpCommon.put(`/employees/${id}`, data,{ headers: authHeader() });
    }

    deleteEmployee(id) {
        return httpCommon.delete(`/employees/${id}`,{ headers: authHeader() });
    }

    createLeaveRequest(data) {
        return httpCommon.post(
            "/leaves",
            data,
            { headers: authHeader()});
    }

    updateLeaveRequestStatus(employeeId,leaveId,data){
        return httpCommon.patch(
            `/leaves/${employeeId}/${leaveId}`,
            data,
            { headers: authHeader()}
        )
    }



}

export default new EmployeeService();