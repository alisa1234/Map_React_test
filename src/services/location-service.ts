//Version for non-local response
export async function getLocations(): Promise<Array<any>> {
    let locations:Array<any> = [];
    await fetch('locations.json')
        .then(response => response.json())
        .then(data => {locations = data; localStorage.setItem('locations', JSON.stringify(data));})
        .catch(err => console.log('Error'))
    return locations;
}
//Version for local response
export async function getLocationsLocal() {
    await fetch('locations.json')
        .then(response => response.json())
        .then(data => {localStorage.setItem('locations', JSON.stringify(data))})
        .catch(err => console.log('Error'))
}