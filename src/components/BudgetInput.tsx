import {useFormStatus} from "react-dom";

export default function BudgetInput() {
    const { pending } = useFormStatus();

    return (
        <div className="mb-5">
            <label htmlFor="budget"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Budget</label>
            <div className="mx-auto flex">
                <input type="number"
                       id="budget"
                       name="budget"
                       disabled={pending}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="£50"/>
            </div>
        </div>
    )
}