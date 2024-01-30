import Image from "next/image";
import OTPLogin from "@/app/ui/otpLogin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Login</h1>
        <OTPLogin />
      </div>
    </main>
  );
}
