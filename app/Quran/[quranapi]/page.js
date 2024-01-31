import { Container , Row , Col } from "reactstrap"


async function surahh ({params}){
    const surrahno = params.quranapi
    const response = await fetch(`http://api.alquran.cloud/v1/surah/${surrahno}`);
    const dataa = await response.json();
    const Ayahs = dataa.data.ayahs
   

    return (
        <>
         <Container className="text-center con mb-5 mt-5">
         <h1 className="title"> {dataa.data.name} </h1>
         <Container>
    
     <div className=" ayahsMain">
        {
          Ayahs.map((ayah)=>{
            return (
                   <div  className="mt-5 mb-3 ayah m-3 text-center"> 
                     <h2 className="ayah-text">{ayah.text}<span className="ayah-no">{ayah.numberInSurah}</span></h2>
                     </div>
            )
          })
        }
      </div>
     </Container>
         </Container>

        </>


    )
} 

export default surahh