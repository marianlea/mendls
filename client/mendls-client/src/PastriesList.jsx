export default function PastriesList({ pastries }) {

    return (
        <section className="pastries-list">
            <ul>
                {pastries.map(pastry =>console.log(pastry))}
            </ul>
        </section>
    )
}