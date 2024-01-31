import { Container , Row , Col } from "reactstrap"
import NavBar from "./Components/NavBar"
import Image from "next/image"
import hero from "../public/Heroo.png"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
export default async function Home() {
 
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
         <Col xl={12} md={12} lg={12} sm={12} className="text-center mt-5">
          <Link className="surah" href={"/surahs"}>
              <h2> الذهاب الي سور القران الكريم <FaArrowRight /></h2>
          </Link>
         </Col>
       </Row>
     </Container>
  
   
    </>
   )




  
}
