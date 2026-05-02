import {WifiOff} from "lucide-react"
import Link from "next/link"

export default function Navbar(){
  return(
    <nav>
      <Link href={"/"}>
        <h1 className="font-bold text-2xl">بی‌نتی حمایت </h1>
        <div><WifiOff /></div>
      </Link>
    </nav>
  )
}