import { useEffect, useState } from 'react';
import EmployeeModel from '../models/EmployeeModel';
import { ReturnEmployee } from '../components/ReturnEmployee';
import { PageLayout } from 'src/components/page-layout';
import { CodeSnippet } from 'src/components/code-snippet';


export const Employee = () => {

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);
    const [httpError, setHttpError] = useState(null);


    useEffect(() => {
        const fetchEmployees = async () => {

            const url: string = "http://localhost:6060/api/employees";
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Something went wrong!")
            }
            const responseJson = await response.json();
            const responseData = responseJson._embedded.employees;

            const loadedEmployees: EmployeeModel[] = [];
            for (const key in responseData) {
                loadedEmployees.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                });
            }
            setEmployees(loadedEmployees);
        };
        fetchEmployees().catch((error: any) => {
            setHttpError(error.message)
        })
    }, []);

    return (

        <PageLayout>
            <><div className="content-layout">
                <h1 id="page-title" className="content__title">
                    Employee Page
                </h1>
                <div className="content__body">
                    <h3 className="content__title">
                        {employees.slice(0, 3).map(employee => (
                            <ReturnEmployee employee={employee} key={employee.id} />
                        ))}
                    </h3>
                </div>
            </div>
            </>
        </PageLayout>

    );
}