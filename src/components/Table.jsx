const Table = () => {

    const tableItems = [
              {
            name: "Olivia Rodrigo",
            email: "oliviaemma@example.com",
            Date: "10/10/2021",
            Visit: "8:00-8:50",
            condition: "Pnemonia"
        },
        {
            name: "Ben Affleck",
            email: "benjamin.affleck@example.com",
            Date: "10/10/2021",
            Visit: "9:00-9-30",
            condition: "Back Pain"
        },
        {
            name: "Thierry Henry",
            email: "thierryhenry@example.com",
            Date: "10/10/2021",
            Visit: "10:15-10:45",
            condition: "Fever"
        },
        {
            name: "Doja Cat",
            email: "doja.cat@example.com",
            Date: "10/10/2021",
            Visit: "11:15-11:45",
            condition: "Urinary Tract Infection"
        },
        {
            name: "Bukayo Saka",
            email: "saka.buks@example.com",
            Date: "10/10/2021",
            Visit: "12:15-12:45",
            condition: "Fracture"
        },
        {
            name: "Blake Davis",
            email: "Blake.davis@example.com",
            Date: "10/10/2021",
            Visit: "2:15-2:45",
            condition: "Acute Bronchitis"
        },
        {
            name: "Alexis Lindsey",
            email: "alexis.lindsey@example.com",
            Date: "10/10/2021",
            Visit: "3:00-3:30",
            condition: "Fracture"
        },
    ]

    return (
        <div className="max-w-screen-xl  px-4 md:px-8">
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Date</th>
                            <th className="py-3 px-6">Visit Time</th>
                            <th className="py-3 px-6">Condition</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 font-bold text-black whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-8 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-8 whitespace-nowrap">{item.Date}</td>
                                    <td className="px-6 py-8 whitespace-nowrap">{item.Visit}</td>
                                    <td className="px-6 py-8 whitespace-nowrap">{item.condition}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;