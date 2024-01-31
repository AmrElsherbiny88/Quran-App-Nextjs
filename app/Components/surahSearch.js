'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

const removeDiacritics = (text) => {
  return text.normalize('NFD').replace(/[\u064B-\u065F]/g, '');
};

const QuranSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchingSurah, setMatchingSurah] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch('https://api.alquran.cloud/v1/quran/45'
       
        );
        const data = await response.json();

        if (data && data.data && data.data.surahs) {
          const normalizedSearchTerm = removeDiacritics(searchTerm.toLowerCase());

          const surah = data.data.surahs.find(
            (surah) =>
              removeDiacritics(surah.name.toLowerCase()).includes(normalizedSearchTerm) ||
              removeDiacritics(surah.englishName.toLowerCase()).includes(normalizedSearchTerm)
          );

          if (surah) {
            setMatchingSurah(surah);
            setError(null);
          } else {
            setMatchingSurah(null);
            setError('Surah not found.');
          }
        } else {
          setError('Failed to fetch Surahs.');
        }
      } catch (error) {
        setError('An error occurred while fetching data.');
      }
    };

    if (searchTerm.trim() !== '') {
      fetchSurahs();
    } else {
      setMatchingSurah(null);
      setError(null);
    }
  }, [searchTerm]);

  return (
    <div className='text-center searchdiv mb-5 mt-5'>
       <h3 className='mt-3 mb-3'>       ابحث عن السورة بالعربي او الانجليزي
       </h3>
        <input
         className=' mb-3 searchinp'
          type="text"
          dir="auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='ابحث هنا عن الصورة'
        />
      

      {error && <p>{error}</p>}

      {matchingSurah && (
        <Link className="surah" href= {`Quran/${matchingSurah.number}`}>
          <h3>{matchingSurah.name}<FaArrowRight /></h3>
          <p>{matchingSurah.englishName}<FaArrowRight /></p>
          {/* Add more details as needed */}
        </Link>
      )}
    </div>
  );
};

export default QuranSearch;

