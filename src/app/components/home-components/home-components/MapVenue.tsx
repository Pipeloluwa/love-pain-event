
const MapVenue = () => {
    const mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.8965385075203!2d3.344325074741472!3d8.009605304112682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103096c8491bf681%3A0x8012f0c5f84d4cd7!2sIsia%20Okeho%20Primary%20Health%20Centre!5e0!3m2!1sen!2sng!4v1730562531520!5m2!1sen!2sng";

    return (
        <iframe 
            src={mapSource} width="600" height="450"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className='w-full h-[700px] flex'
            >
        </iframe>
    );
}



export default MapVenue