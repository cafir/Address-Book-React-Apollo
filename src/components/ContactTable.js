import React from "react"
import { useMutation, useQuery } from "@apollo/client"
import { GET_CONTACTS, REMOVE_CONTACT } from "../utils/graphql/queries"
import { Table } from "react-bootstrap"

const ContactTable = ({ contact }) => {

    const [removeContactMutation] = useMutation(REMOVE_CONTACT)
    

    const removeContact = (id) => {
        removeContactMutation({
            variables: { id },
            optimisticResponse: true,
            update: (cache) => {
                const existingContacts = cache.readQuery( { query: GET_CONTACTS });
                const contacts = existingContacts.contacts.filter((t) => t.id !== id);
                cache.writeQuery({
                    query: GET_CONTACTS,
                    data: { contact }
                })  
            }
        })
        
    }
    
    return (
        <div key={contact.id} className="task">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Edit</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                    <td>{contact.first_name}</td>
                    <td>{contact.phone_number}</td>
                    <td>{contact.city}</td>
                    <td><button type="submit" onClick={() => removeContact(contact.id)}>DELETE</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
        
    )
}

export default ContactTable;