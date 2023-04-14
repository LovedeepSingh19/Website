import Maphooks from '@/hooks/Maphooks';
import { Flex, Text } from '@chakra-ui/react';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import React, { useMemo } from 'react';


type MapsComponentProps = {
    
};

const MapsComponent:React.FC<MapsComponentProps> = () => {

  const libraries = useMemo(() => ["places"], []);

  const {currentCoords, error} = Maphooks();

  const mapCenter = useMemo(() => (currentCoords), [currentCoords]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  return (
    <>
    {isLoaded ? (

    <Flex align={'center'} justify={'center'} direction={'column'}>
      <Flex>
        <Text pb={5} fontWeight={700}>Map</Text>
      </Flex>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "400px", height: "400px" }}
        onLoad={() => console.log("Map Component Loaded ... ")}
      />
    </Flex>
    ):(
      <Flex p={20}>Loading ....</Flex>
    )}
    </>
  );
}
export default MapsComponent;