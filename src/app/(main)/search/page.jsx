import PageHeader from "@/components/PageHeader";
import SearchInput from "@/components/SearchInput";

export default function Search(){
    return(
        <main className="main-spacing">
            <PageHeader text = "Søg"/>
            <SearchInput />
        </main>
    )
}