import { ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nbootstrap from "@/components/Nbootstrap";
 
 
 
type Props = {
    children: ReactNode;
}
 
export default function AdminLayout(props: Props) {
    return (
        <html lang="pt-br">
            <body>
                <Nbootstrap/>
                <main>
                    {props.children}
                </main>
            </body>
        </html>
 
    )
}
 