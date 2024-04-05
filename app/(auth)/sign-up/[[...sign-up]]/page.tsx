/*The sign up page for the application using the clerk auth */

import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <section className="flex flex-col items-center justify-center w-screen h-screen">
            <SignUp />;
        </section>
    );
}