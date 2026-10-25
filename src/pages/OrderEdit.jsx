import { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function OrderEdit() {
    const order = useLoaderData()
    const { id } = useParams()

    const [name, setName] = useState(order.name)
    const [phone, setPhone] = useState(order.phone)
    const [address, setAddress] = useState(order.address)

    function updatedJob() {

    }

    return(
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div>
                    <form action="">
                        <h2 className="text-center text-3xl font-semibold mb-6 ">Update Order</h2>

                        {/* <div className="mb-4">
                            <label htmlFor="Order" className="block text-grey-700 font-bold mb-2">Order</label>
                            
                            <select 
                                name="Order" 
                                id="Order"
                            >
                                <option value={name}></option>
                            </select>
                        </div> */}

                        <div>
                            <p> id: {id} </p>
                        </div>
                        <div>
                            <p> name: {name} </p>
                        </div>
                        <div>
                            <p> phone: {phone} </p>
                        </div>
                        <div>
                            <p> address: {address} </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}