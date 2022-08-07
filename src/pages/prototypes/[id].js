import { getAllPrototypes } from "@/lib/helper";

export default function Prototype({ prototypes }) {
    return (
        <article>
            {
                prototypes.map(
                    prototype => (
                        <div key={ prototype.id }>
                            <h1>{ prototype.title }</h1>
                            <p>{ prototype.description }</p>
                        </div>
                    )
                )
            }
        </article>
    )
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const prototypes = getAllPrototypes(id);

    return {
        props: { prototypes }
    }
}

export async function getStaticPaths() {
    const prototypes = getAllPrototypes();

    const paths = prototypes.map(prototype => ({
        params: { id: prototype.id.toString() }
    }));

    return {
        paths,
        fallback: false
    }
}