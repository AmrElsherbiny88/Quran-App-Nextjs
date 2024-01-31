import { Container , Row , Col } from "reactstrap"


async function surahh ({params}){
    const surrahno = params.quranapi
    const response = await fetch(`https://api.alquran.cloud/v1/surah/${surrahno}`);
    const dataa = await response.json();
    const Ayahs = dataa.data.ayahs
   
    // const response2 = await fetch(`https://api.muslimsalat.com/v1/quran/${surrahno}`);
    // const dataa2 = await response2.json();
    // const audios = dataa2
     
    // console.log(audios)

    const audio = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surrahno}.mp3`
   
    return (
        <>
         <Container className="text-center con mb-5 mt-5">
         <h1 className="title"> {dataa.data.name} </h1>
         <Container>
         <div className="audioDiv mt-4 mb-3">
            <audio className="audio" controls>
              <source src={audio} />
            </audio>        
        </div>
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