import { redirect } from "next/navigation";

export default function Home() {
    redirect("/dashboard"); // Automatically redirect to /dashboard when page.tsx renders
    return null;
}
