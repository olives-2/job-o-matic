import { type ICompany } from "@/types"

export default function CompanyComponent(props: ICompany){
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.website}</h1>
        </div>
    )
}