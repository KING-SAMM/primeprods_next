import { getAllPrototypes } from "@/lib/fetch";

export async function getStaticProps({ params }) {
    const { id } = params;
    const prototype = await getAllPrototypes(id);

    return {
        props: { prototype }
    }
}

export async function getStaticPaths() {
    const prototypesObj = await getAllPrototypes();  
    
    const { data } = prototypesObj;

    const prototypes = data;

    const paths = prototypes.map(prototype => ({
        params: { id: prototype.id.toString() }
    }));

    return {
        paths,
        fallback: "blocking" 
    }
}