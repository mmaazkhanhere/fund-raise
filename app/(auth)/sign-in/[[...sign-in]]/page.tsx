import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <section className="flex flex-col items-center justify-center w-screen h-screen">
            <SignIn />;
        </section>
    )

}