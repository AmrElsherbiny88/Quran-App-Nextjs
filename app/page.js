import { Container , Row , Col } from "reactstrap"
import NavBar from "./Components/NavBar"
import Image from "next/image"
import hero from "../public/Heroo.png"
import axios from 'axios';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Home() {
  const response = await fetch("http://api.alquran.cloud/v1/quran/45");
  const dataa = await response.json();
  const surah = dataa.data.surahs
  return (
    <>
     <NavBar />
 
     <Container className="text-center mt-5">
       <Row>
         <Col xl={6} md={6} lg={6} sm={6} className="text-center ">
           <Image src={hero}/> 
         </Col>
 
         <Col xl={6} md={6} lg={6} sm={6} className="text-center mt-5">
         <h1>موقع يوجد به القران الكريم كامل و سيتم اضافة المزيد في اقرب وقت ممكن</h1>
         </Col>
       </Row>
     </Container>

     <Container className="text-center mt-4">
     <Row>
        {
          surah.map((sur)=>{
            return (
              <Col xl={4} md={4} lg={4} sm={4} className="mt-3 mb-2"> 
              <Link className="surah" href= {`Quran/${sur.number}`}>
                   <h2 >{sur.name} <FaArrowRight /></h2>
              </Link>
              </Col> 
            )
          })
        }
      
      </Row>
     </Container>
    </>
   )




  
}
