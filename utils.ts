export function getBestuurseenheidUrl(bestuurseenheidUuid: string): string {
    const bestuurseenheidQuery = `
    construct {
        ?s ?p ?o .
    }
    where {
        graph <http://mu.semte.ch/graphs/organizations/${bestuurseenheidUuid}/LoketLB-mandaatGebruiker> {
            ?s ?p ?o .
        }
    }
    `;
    return `http://localhost:8890/sparql/?default-graph-uri=&query=${encodeURIComponent(bestuurseenheidQuery)}`;
}