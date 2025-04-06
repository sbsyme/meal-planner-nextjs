import {useFormStatus} from "react-dom";

export default function SupermarketInput() {
    const { pending } = useFormStatus();

    return (
        <div className="mb-5">
            <label htmlFor="supermarket"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Preferred supermarket</label>
            <select id="supermarket"
                    name="supermarket"
                    disabled={pending}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled>Choose a supermarket</option>
                <option value="Tesco">Tesco</option>
                <option value="Asda">Asda</option>
                <option value="Sainsburys">Sainsbury's</option>
                <option value="Morrisons">Morrison's</option>
                <option value="Aldi">Aldi</option>
                <option value="Lidl">Lidl</option>
                <option value="Waitrose">Waitrose</option>
            </select>
        </div>
    )
}