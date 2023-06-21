import EmployeeModel from "../models/EmployeeModel";

export const ReturnEmployee: React.FC<{employee: EmployeeModel}> = (props) => {
    return (
        <div>
            {props.employee.name}
        </div>
    );
}