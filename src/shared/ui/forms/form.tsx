import { ReactElement } from 'react'

import { Formik, Form as FormikForm, FormikValues, FormikHelpers } from 'formik'

interface FormProps {
    initialValues: FormikValues
    validationSchema: unknown,
    handelSubmit: (
        values: { [key: string]: string },
        actions: FormikHelpers<FormikValues>
    ) => void,
    children: ReactElement | ReactElement[]
}
  
export default function FormCustom ({ initialValues, validationSchema, handelSubmit,  children }: FormProps) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: {
                [key: string]: string 
            }, actions: FormikHelpers<FormikValues>) => {
                handelSubmit(values, actions)
            }}
        >
            <FormikForm style={{ width: '100%' }}>
                {children}
            </FormikForm>
        </Formik>
    )
}