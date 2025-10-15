export default function Filter () {
    return (
           <div>
        <h1>This is the filter</h1>
        <label htmlFor="regionSelect">Select a region</label>
        <select name="regionSelect" id="regionSelect">
            
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
        </select>
    </div>

    )
 
}