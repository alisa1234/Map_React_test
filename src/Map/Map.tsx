import React, {useEffect, useState} from "react";
import './map.scss';
// @ts-ignore
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import {getLocations, getLocationsLocal} from "../services/location-service";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
export function Map() {
    const [locations, setLocations] = useState(new Array<any>());
    const [showInfo, setShowIno] = useState(false);
    const [locationInfo, setLocationInfo] = useState({coordinates: new Array<number>(), name: ''});
    const [locationClickedIndex, setLocationClickedIndex] = useState(0)

    const { t, i18n } = useTranslation();
    useEffect(() => {
        /** Version for non-local response */
        // getLocations()
        //     .then(data => {setLocations(data)})
        /** Version for local response */
        const locations = localStorage.getItem('locations');
        if (!locations) {
            getLocationsLocal();
        }
        if (!!locations) {
            setLocations(JSON.parse(locations));
        }
    }, []);

    const defaultProps = {
        center: {
            lat: 35.1395,
            lng: 33.952
        },
        zoom: 8
    };
    function showInfoPanel(locationInfo: {coordinates: Array<number>, name: string}, index: number) {
        setLocationClickedIndex(index);
        setShowIno(true)
        setLocationInfo(locationInfo);
    }
    return (
        <>
        <div className={!showInfo ? 'map-wrapper' : 'map-wrapper map-wrapper-less-width'}>
            <div style={{height: '50vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: ""}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {
                    locations.map((location: {coordinates: Array<any>, name: string}, index) => (
                        <Marker
                            key={index}
                            text={location.name}
                            onClick={() => showInfoPanel(location, index)}
                            isShowText={index === locationClickedIndex}
                            lat={location.coordinates[0]}
                            lng={location.coordinates[1]}
                        />
                        )

                    )
                }
            </GoogleMapReact>
        </div>
            <div className={'location-info-wrapper'} style={{width: showInfo ? '400px' : '0'}}>
                <div className={'location-info'}>
                    <h2>{locationInfo.name}</h2>
                    <div>{t('lat')}: {locationInfo.coordinates[0]}</div>
                    <div>{t('long')}: {locationInfo.coordinates[1]}</div>
                </div>
                <FontAwesomeIcon
                    className={'location-info-close'}
                    onClick={() => setShowIno(false)}
                    icon={faXmark} />
            </div>
        </div>
        </>
    );
}
export default Map;