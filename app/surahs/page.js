
import { Container , Row , Col } from "reactstrap"
import NavBar from "../Components/NavBar"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Searchh from "../Components/surahSearch"


export default async function surahs() {
  const response = await fetch("https://api.alquran.cloud/v1/quran",
);
  const dataa = await response.json();
  const surah = dataa.data.surahs
  return (
    <>
     <NavBar />
 
     <Searchh />

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
