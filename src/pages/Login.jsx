import React from 'react';
import { Header } from "../components/Header.jsx";
import axios from "axios";
import { useQuery } from "react-query"

export function Login() {
    //try é dentro da função
    try {
        const { data, isLoading, isError, error } = useQuery("response", async () => {

            const resp = await axios.get(async () => {
                "http//:localhost:3005/something"
            })
            return resp
            
        })
        if (isLoading) {
            return (<><p>{isLoading}...</p></>)
        }
        if (isError) {
            return (<>
                <p>{error.message}</p>
            </>)
        }

        return data.resp.message
    } catch (error) {
        console.log(error);
    }

    return (
        <>
            <div>
                <form>
                    <input type="text" />
                </form>
            </div>

        </>
    )
}