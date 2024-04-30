import { useEffect, useState } from 'react';
import API from '../axios';
import {TechBox} from '../components/TechBox';
import { Flex } from '@chakra-ui/react';
import { TITLE, URL } from '../utils';

function Technology({title,loaded, selectedValue }) {
    const [techList, setTechs] = useState([]);
    const [allTechList, setAllTechList] = useState([]);

    useEffect(() => {
        title(TITLE.tech);
        loaded(false);

        API({
          method: 'get',
          url:URL.techUrl,
          withCredentials: false,
          headers: {
            crossOriginIsolated:false
          }
        }).then(res => {
          setTechs(res.data.technologies);
          setAllTechList(res.data.technologies);
          loaded(true);
            
      })
      }, []);

      useEffect(() => {
        filterExpansion(selectedValue);
        },[selectedValue]);
           

      const filterExpansion = (selectedValue) => {
        setTechs(allTechList);
        if(selectedValue?.value !== 5) {
            setTechs(allTechList.filter((opt) => {return opt.age === selectedValue?.name }));
        }
    }

    return (
        <>
          <Flex flexWrap='wrap' maxHeight='inherit' overflow='auto' maxH='94vh'>
            {techList?.map((tech) => {return <TechBox tech={tech} key={tech.id} />})}
          </Flex>
        </>
    )
}

export default Technology;