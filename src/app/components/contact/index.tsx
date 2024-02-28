"use client"

import { Box, Text, TextArea} from "@radix-ui/themes";
import React, { FormEvent, useState } from "react";
import Card from "../ui/pagelayout/Card";
import { Button } from "../ui/button";
import { Icons } from "../ui/images";

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const contact = {name, email, phone, desc}
        console.log(contact)
        alert("Your form has been successfully submitted")
    }

    return(
        <>
            <Card className="w-full">
                <form onSubmit={handleSubmit}>
                    <Box className="w-fit mx-auto my-4">
                        <Text className="text-yellow text-xl font-bold">Please Fill Your Information</Text>
                    </Box>

                    <Box className=" my-4">
                        <label className="text-yellow font-semibold text-lg">Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name" className="mt-2 block w-full h-9 rounded-md p-2"/>
                    </Box>
                    <Box my="4">
                        <label className="text-yellow font-semibold text-lg">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" className="mt-2 block w-full h-9 rounded-md p-2"/>
                    </Box>
                    <Box my="4">
                        <label className="text-yellow font-semibold text-lg">Phone Number</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Phone Number" className="mt-2 block w-full h-9 rounded-md p-2"/>
                    </Box>
                    <Box my="4">
                        <label className="text-yellow font-semibold text-lg">Description</label>
                        <TextArea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" className="mt-2"/>
                    </Box>

                    <Button type="submit" variant="outline" className="w-full">Submit</Button>
                </form>
            </Card>
            
            
        </>
    )
}

export default Form;