import React ,{useState} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Policy from "../../components/Policy/Policy";
import { Container } from "react-bootstrap";
import styles from "./TermsCondition.module.css";
import { Link,useLocation } from 'react-router-dom';

const TermsCondition = () => {
  const location = useLocation();
  let val = new URLSearchParams(location.search).get('closeVal');
  let CloseVal = val === "true" ? true : false;
  const [closeMenu,setCloseMenu]=useState(CloseVal);
  return (
    <>
      <Header setCloseState={setCloseMenu} />
      <div className="main_div">
      <Sidebar setCloseState={closeMenu} />
        <div className={styles.main}>
          <Policy pakagenamme="termscondition" title="Terms & Conditions" text="Lorem ipsum dolor sit amet consectetur. Scelerisque facilisi a lacinia ultricies morbi ultrices. Sed dui vitae tortor aliquet. Nibh id dignissim nunc nisl amet ultrices at. Maecenas in tristique dui fames risus nec duis scelerisque. Ornare nulla urna sit sed. Volutpat est netus habitant nulla aliquam tristique sem tristique. Convallis vitae in ut lobortis elit ridiculus. Eget pellentesque fusce scelerisque consectetur dignissim diam enim justo. Semper cursus tellus odio odio. Adipiscing vivamus aliquam bibendum eget amet. Aliquam duis donec nisl netus at aliquam tempor a auctor.
                        
                        Mauris vel ut nunc feugiat. At integer auctor pellentesque accumsan eu convallis leo congue leo. At vitae nunc tristique purus ac quis. Donec et sodales aliquet vitae. Mi sit sem dignissim sagittis fusce id. Pulvinar aliquam mauris amet enim magna id et. Quam neque accumsan nisl at blandit urna et dignissim mi. Rhoncus praesent luctus lacinia velit volutpat a at lorem.
                        Risus faucibus platea non nunc sit viverra vel sed quam. Diam tempus enim integer purus eget. Neque quam volutpat in integer ipsum feugiat nec justo. Arcu hendrerit eleifend fringilla urna diam senectus sit volutpat facilisi. Vestibulum integer vel volutpat arcu amet integer. Egestas mattis purus elementum amet et nisl dignissim sed cras. Ultricies feugiat semper integer dictum ut arcu non ante nisl. A nibh lacus tincidunt laoreet egestas fermentum malesuada massa est. Lectus quam diam diam non vitae sem quam gravida accumsan. Mi nunc egestas orci senectus nisi. Sed tincidunt enim netus nulla duis. Faucibus egestas faucibus ut nibh rutrum dolor mi.
                        Amet sed aliquam rutrum tellus. Tempor donec libero interdum tempor. Eget viverra commodo aliquet aliquam viverra enim volutpat elit. Ultrices facilisi vehicula tempor id dui. Bibendum augue quis tincidunt turpis aliquet posuere. Mollis lorem sit viverra nisl purus tellus blandit auctor at. Ipsum dolor sed diam pulvinar amet. Nascetur fringilla turpis ultricies adipiscing varius. Dolor nibh sed aliquet fusce lectus varius platea quis pellentesque. Metus lacus id consequat et mattis. Sit in arcu scelerisque facilisis nibh nulla tellus nisl. Tortor sodales nibh mauris vestibulum sed dui feugiat nunc pretium. Leo at egestas sed ac amet dui tortor. Auctor elementum nulla est egestas quis tortor aliquet sed. Quam nunc mollis auctor urna.
                        
                        Turpis scelerisque semper turpis amet et semper elit justo. Vitae feugiat sapien fames commodo enim sapien. Neque nibh augue faucibus neque neque quam nulla eu. Aliquam sed risus ornare quis diam et. Nulla semper eget luctus ornare ut est vitae. Velit magna sagittis mauris mauris libero. Ipsum tincidunt volutpat morbi odio ac. Gravida in hendrerit bibendum odio. Id id fusce non nulla quis. Vitae tellus malesuada eget blandit sodales pellentesque. Turpis tincidunt risus orci ac feugiat orci euismod dui ut.
                        Dignissim est eu leo aliquet lorem non. Elit at nibh enim mauris ultrices. Ullamcorper aliquet pellentesque ornare duis sit. Parturient neque proin augue scelerisque quis vestibulum egestas quis. Porttitor aliquam dignissim pellentesque semper rutrum scelerisque risus posuere. Ut id eget metus neque ultricies elementum aliquet id gravida. Ac aliquet pulvinar sit ut tellus. Consectetur magna vel diam mauris. Malesuada elementum aenean et pellentesque ipsum id mauris tellus. Et ligula viverra sociis mi nec non nunc auctor. Ipsum non etiam quis eget lobortis scelerisque non suscipit. Mollis ut mi arcu metus. Sed et nulla turpis eu ullamcorper diam vitae. Elit gravida ornare arcu morbi facilisis bibendum ultricies integer sed. Faucibus sagittis aliquam phasellus fermentum magna.
                        Lorem ipsum dolor sit amet consectetur. Scelerisque facilisi a lacinia ultricies morbi ultrices. Sed dui vitae tortor aliquet. Nibh id dignissim nunc nisl amet ultrices at. Maecenas in tristique dui fames risus nec duis scelerisque. Ornare nulla urna sit sed. Volutpat est netus habitant nulla aliquam tristique sem tristique. Convallis vitae in ut lobortis elit ridiculus. Eget pellentesque fusce scelerisque consectetur dignissim diam enim justo. Semper cursus tellus odio odio. Adipiscing vivamus aliquam bibendum eget amet. Aliquam duis donec nisl netus at aliquam tempor a auctor."/>
        </div>
      </div>
    </>
  )
}

export default TermsCondition