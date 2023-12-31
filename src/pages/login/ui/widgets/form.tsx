import { Button } from "@chakra-ui/react"
import * as yup from "yup"

import { Form, Input } from "@/shared/ui/forms"

interface inputType {
    [key: string]: string 
}

const initialValues = { email: "", password: "" }
const validationSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('email field is required'),
    password: yup.string().required('password field is required')
})

export function LoginForm () {

    const handelSubmit = async (values: inputType) => {
        try {
            console.log('values: ', values)
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return (
        <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            handelSubmit={handelSubmit}
        >
            <Input
                label="Email"
                name="email"
                type="email"
                placeholder="john@doa.com"
            />
            <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
            />
            <Button
                type="submit"
                my="1"
                size="md"
            >   
                submit
            </Button>
        </Form>
    )
}