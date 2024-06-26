export async function fetchUniversities() {
    // fetch data from universities api
    const response = await fetch('http://universities.hipolabs.com/search');
    if(!response.ok) {
        throw new Error('Failed to fetch universities');
    }
    return response.json();
}