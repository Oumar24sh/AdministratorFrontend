import { createFormAction } from 'remix-forms'
// For Remix, import it like this
import { redirect, json } from '@remix-run/node'

//@ts-ignore
const formAction = createFormAction({ redirect, json })

export { formAction }