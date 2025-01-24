import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";


export default function Private() {
    const [session, setSession] = useState(null)

    useEffect(() => {
        console.log(session);
    }, [session])

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    if (!session) {
        return (
            <div className="flex justify-center items-center">
                <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
            </div>
        )
    }
    else {
        return (
        <div>
            <h1>Logged in</h1>
            <button onClick={() => supabase.auth.signOut()}>Sign out</button>
        </div>
        )
    }
}
